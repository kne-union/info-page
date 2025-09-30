import React, { useMemo, useRef, useState } from 'react';
import Header from './Header';
import { Checkbox, Col, Empty, Row } from 'antd';
import { CheckOutlined } from '@ant-design/icons';
import classnames from 'classnames';
import get from 'lodash/get';
import computeColumnsValue, { computeDisplay, computeColumnsDisplay } from '../computeColumnsValue';
import { isEmpty } from '@kne/is-empty';
import style from './style.module.scss';

const TableView = p => {
  const [colsSize, setColsSize] = useState({});
  const props = Object.assign(
    {},
    {
      rowKey: 'id',
      valueIsEmpty: isEmpty,
      placeholder: '-',
      emptyIsPlaceholder: true,
      empty: <Empty />
    },
    p
  );
  const { className, dataSource, columns, rowKey, rowSelection, valueIsEmpty, emptyIsPlaceholder, placeholder, empty, onRowSelect, render, context, sticky, ...others } = props;
  const dataSourceMapRef = useRef(new Map());
  const defaultSpan = useMemo(() => {
    const assignedSpan = columns.reduce((a, b) => {
      return a + (b.span || 0);
    }, 0);
    const undistributedColCount = columns.filter(item => !item.span).length;

    return Math.round(Math.max(24 - assignedSpan, 0) / undistributedColCount);
  }, [columns]);

  const header = <Header {...props} sticky={sticky} defaultSpan={defaultSpan} colsSize={colsSize} setColsSize={setColsSize} />;

  const renderBody = (dataSource, context) => {
    const getId = item => get(item, typeof rowKey === 'function' ? rowKey(item) : rowKey);
    return dataSource && dataSource.length > 0 ? (
      dataSource.map(item => {
        const id = getId(item);
        dataSourceMapRef.current.set(id, item);
        const isChecked = rowSelection?.selectedRowKeys && rowSelection.selectedRowKeys.indexOf(id) > -1;
        const columnsValue = computeColumnsValue({ columns, emptyIsPlaceholder, valueIsEmpty, removeEmpty: false, dataSource: item, placeholder, context });
        return (
          <Row
            wrap={false}
            key={id}
            className={classnames(style['body'], 'info-page-table-row', [
              {
                [style['is-selected-all']]: rowSelection?.isSelectedAll,
                [style['is-selected']]: isChecked,
                [style['is-disabled']]: item.disabled
              }
            ])}
            onClick={() => {
              if (item.disabled) {
                return;
              }
              onRowSelect && onRowSelect(item, { columns, dataSource });
              if (!rowSelection) {
                return;
              }
              if (rowSelection.isSelectedAll) {
                return;
              }
              if (rowSelection.type === 'checkbox') {
                const selectedRowKeys = (rowSelection.selectedRowKeys || []).slice(0);
                isChecked ? selectedRowKeys.splice(rowSelection.selectedRowKeys.indexOf(id), 1) : selectedRowKeys.push(id);
                rowSelection.onChange(
                  selectedRowKeys,
                  selectedRowKeys.map(id => dataSourceMapRef.current.get(id))
                );
              } else {
                const selectedRowKeys = rowSelection.selectedRowKeys.length && rowSelection.selectedRowKeys[0] === id ? [] : [id];
                rowSelection.onChange(
                  selectedRowKeys,
                  selectedRowKeys.map(id => dataSourceMapRef.current.get(id))
                );
              }
            }}
          >
            {rowSelection && rowSelection.type === 'checkbox' && (
              <Col className={classnames(style['col'], 'info-page-table-col')}>
                <span className={classnames(style['col-content'], 'info-page-table-col-content')}>
                  <Checkbox disabled={item.disabled || rowSelection.isSelectedAll} checked={(rowSelection.isSelectedAll && !item.disabled) || isChecked} />
                </span>
              </Col>
            )}
            <Col flex={1}>
              <Row className={classnames('info-page-table-row-content')} wrap={false}>
                {columnsValue.map(column => {
                  const { name, span } = column;
                  return (
                    <Col
                      key={name}
                      style={{
                        '--col-width': `${colsSize[name] || 0}px`,
                        '--col-span': `${span || defaultSpan}`,
                        '--col-align': column.align || 'top',
                        '--col-justify': column.justify || 'flex-start'
                      }}
                      className={classnames(style['col'], 'info-page-table-col')}
                    >
                      <span className={style['col-content']}>{computeDisplay({ column, placeholder, dataSource: item, context })}</span>
                    </Col>
                  );
                })}
              </Row>
            </Col>
            {rowSelection && rowSelection.type !== 'checkbox' && <Col className={classnames(style['col'], style['single-checked'], 'info-page-table-col')}>{isChecked && <CheckOutlined />}</Col>}
          </Row>
        );
      })
    ) : (
      <div className={style['empty']}>{empty}</div>
    );
  };
  if (typeof render === 'function') {
    return render({ ...others, header, renderBody });
  }
  return (
    <div {...others} className={classnames(style['table'], 'info-page-table', className)}>
      {header}
      <div className={classnames('info-page-table-body')}>{renderBody(dataSource, context)}</div>
    </div>
  );
};
TableView.Header = Header;
export default TableView;
