import React, { useMemo } from 'react';
import { isEmpty } from '@kne/is-empty';
import { Col, Row } from 'antd';
import get from 'lodash/get';
import classnames from 'classnames';
import boxComputed from './boxComputed';
import style from './style.module.scss';
import formatView from '../formatView';

const TableView = props => {
  const { dataSource, columns, col, valueIsEmpty, emptyIsPlaceholder, placeholder, className } = Object.assign(
    {
      dataSource: {}, //数据
      columns: [], //列定义
      col: 2, //展示列数
      valueIsEmpty: isEmpty,
      placeholder: '-',
      emptyIsPlaceholder: true
    },
    props
  );

  const renderColumns = useMemo(() => {
    return boxComputed(
      columns
        .map(item => {
          const itemValue = typeof item.getValueOf === 'function' ? item.getValueOf(dataSource, { column: item }) : get(dataSource, item.name);
          const displayValue = (value => {
            if (typeof item.format === 'function') {
              return item.format(value, { dataSource, column: item });
            }
            if (typeof item.format === 'string') {
              const formatValue = formatView(value, item.format, { dataSource, column: item });
              if (formatValue) {
                return formatValue;
              }
            }
            return value;
          })(itemValue);

          const itemIsEmpty = (item.valueIsEmpty || valueIsEmpty)(itemValue);

          if (
            item.display === false ||
            (typeof item.display === 'function' &&
              item.display(itemValue, {
                dataSource,
                column: item
              }) === false)
          ) {
            return null;
          }

          if (!(item.hasOwnProperty('emptyIsPlaceholder') ? item.emptyIsPlaceholder : emptyIsPlaceholder) && itemIsEmpty) {
            return null;
          }

          return Object.assign({}, item, { isEmpty: itemIsEmpty, value: displayValue });
        })
        .filter(item => !!item),
      col
    );
  }, [columns, col]);

  return (
    <Row className={classnames(style['table-view'], className)}>
      {renderColumns.map((item, index) => {
        return (
          <Col
            className={classnames(style['table-view-col'], 'table-view-col')}
            key={`${item.name}-${index}`}
            style={{
              '--col-width': `${(100 * item.span) / 24}%`
            }}
          >
            <Row className={classnames(style['table-view-item'], 'table-view-item')} wrap={false}>
              <Col
                className={classnames(style['table-view-label'], 'table-view-label')}
                style={{
                  '--col-label-width': `${(100 * 8) / (col * item.span)}%`
                }}
              >
                {item.title}
              </Col>
              <Col className={classnames(style['table-view-content'], 'table-view-content')}>
                {item.isEmpty
                  ? typeof item.renderPlaceholder === 'function'
                    ? item.renderPlaceholder({
                        column: item,
                        dataSource,
                        placeholder
                      })
                    : item.placeholder || placeholder
                  : typeof item.render === 'function'
                    ? item.render(item.value, {
                        column: item,
                        dataSource
                      })
                    : item.value}
              </Col>
            </Row>
          </Col>
        );
      })}
    </Row>
  );
};

export default TableView;
