import React, { useMemo } from 'react';
import { isEmpty } from '@kne/is-empty';
import { Row, Col } from 'antd';
import get from 'lodash/get';
import dayjs from 'dayjs';
import classnames from 'classnames';
import boxComputed from './boxComputed';
import style from './style.module.scss';

const defaultFormat = {
  date: (value, { args }) => {
    const template = args[0] || 'YYYY-MM-DD';
    return dayjs(value).format(template);
  },
  datetime: (value, { args }) => {
    const template = args[0] || 'YYYY-MM-DD HH:mm:ss';
    return dayjs(value).format(template);
  },
  boolean: value => {
    if (value) {
      return '是';
    }
    return '否';
  },
  number: (value, { args }) => {
    const style = args[0] || 'decimal',
      unit = args[1] || 1,
      maximumFractionDigits = args[2] || 2,
      roundingMode = args[3] || 'halfExpand';
    return new Intl.NumberFormat(
      {},
      {
        style,
        maximumFractionDigits,
        roundingMode
      }
    ).format(value / unit);
  },
  money: (value, { args }) => {
    const unit = args[0] || '元';
    return `${value}${unit}`;
  }
};

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
              const formatList = item.format.split(' ').filter(item => !!item);
              if (formatList.length > 0) {
                return formatList.reduce((value, format) => {
                  const [name, ...args] = format.split('-');
                  if (typeof defaultFormat[name] === 'function') {
                    return defaultFormat[name](value, { dataSource, column: item, args });
                  }
                  return value;
                }, value);
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
      {renderColumns.map(item => {
        return (
          <Col
            className={classnames(style['table-view-col'], 'table-view-col')}
            key={item.name}
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
              <Col className={classnames(style['table-view-content'], 'table-view-content')}>{item.isEmpty ? item.placeholder || placeholder : typeof item.render === 'function' ? item.render(item.value) : item.value}</Col>
            </Row>
          </Col>
        );
      })}
    </Row>
  );
};

export default TableView;
