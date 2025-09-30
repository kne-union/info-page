import React, { useMemo, useState } from 'react';
import Header from './Header';
import { Checkbox, Col, Empty, Row } from 'antd';
import { CheckOutlined } from '@ant-design/icons';
import classnames from 'classnames';
import get from 'lodash/get';
import formatView from '../formatView';
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
  const { className, dataSource, columns, rowKey, rowSelection, valueIsEmpty, emptyIsPlaceholder, placeholder, empty, onRowSelect, render, ...others } = props;

  const defaultSpan = useMemo(() => {
    const assignedSpan = columns.reduce((a, b) => {
      return a + (b.span || 0);
    }, 0);
    const undistributedColCount = columns.filter(item => !item.span).length;

    return Math.round(Math.max(24 - assignedSpan, 0) / undistributedColCount);
  }, [columns]);

  const header = <Header {...props} defaultSpan={defaultSpan} colsSize={colsSize} setColsSize={setColsSize} />;

  const renderBody = dataSource => {
    return dataSource && dataSource.length > 0 ? (
      dataSource.map(item => {
        const id = get(item, typeof rowKey === 'function' ? rowKey(item) : rowKey);
        const isChecked = rowSelection?.selectedRowKeys && rowSelection.selectedRowKeys.indexOf(id) > -1;
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
                rowSelection.onChange(selectedRowKeys);
              } else {
                rowSelection.onChange(rowSelection.selectedRowKeys.length && rowSelection.selectedRowKeys[0] === id ? [] : [id]);
              }
            }}
          >
            {rowSelection && rowSelection.type === 'checkbox' && (
              <Col className={classnames(style['col'], 'info-page-table-col')}>
                <span className={classnames(style['col-content'], 'info-page-table-col-content')}>
                  <Checkbox disabled={item.disabled || rowSelection.isSelectedAll} checked={rowSelection.isSelectedAll || isChecked} />
                </span>
              </Col>
            )}
            <Col flex={1}>
              <Row className={classnames('info-page-table-row-content')} wrap={false}>
                {columns.map(column => {
                  const { name, span } = column;
                  const colItem = (item => {
                    const itemValue =
                      typeof column.getValueOf === 'function'
                        ? column.getValueOf(item, {
                            dataSource,
                            columns,
                            column,
                            target: item
                          })
                        : get(item, column.name);

                    const displayValue = (value => {
                      if (typeof column.format === 'function') {
                        return column.format(value, {
                          dataSource,
                          columns,
                          column,
                          target: item
                        });
                      }
                      if (typeof column.format === 'string') {
                        const formatValue = formatView(value, column.format, {
                          dataSource,
                          columns,
                          column,
                          target: item
                        });
                        if (formatValue) {
                          return formatValue;
                        }
                      }
                      return value;
                    })(itemValue);

                    const itemIsEmpty = (column.valueIsEmpty || valueIsEmpty)(itemValue);

                    if (!(column.hasOwnProperty('emptyIsPlaceholder') ? column.emptyIsPlaceholder : emptyIsPlaceholder) && itemIsEmpty) {
                      return null;
                    }
                    return Object.assign({}, column, { isEmpty: itemIsEmpty, value: displayValue });
                  })(item);

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
                      <span className={style['col-content']}>
                        {colItem.isEmpty
                          ? typeof colItem.renderPlaceholder === 'function'
                            ? colItem.renderPlaceholder({
                                column,
                                dataSource,
                                columns,
                                placeholder,
                                target: item
                              })
                            : colItem.placeholder || placeholder
                          : typeof colItem.render === 'function'
                            ? colItem.render(colItem.value, {
                                column,
                                columns,
                                dataSource,
                                target: item
                              })
                            : colItem.value}
                      </span>
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
      <div className={classnames('info-page-table-body')}>{renderBody(dataSource)}</div>
    </div>
  );
};

export default TableView;
