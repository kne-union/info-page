import React, { useMemo, useRef } from 'react';
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

  const totalColWidth = useRef(0);

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
              const [name, ...args] = item.format.split('-');
              if (typeof defaultFormat[name] === 'function') {
                return defaultFormat[name](value, { dataSource, column: item, args });
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
              <Col className={classnames(style['table-view-content'], 'table-view-content')}>{item.isEmpty ? item.placeholder || placeholder : item.value}</Col>
            </Row>
          </Col>
        );
      })}
    </Row>
  );

  /*return <Row className={classnames(style['table-view'], className)}>
    {columns.map((item, index) => {
      const itemValue = typeof item.getValueOf === 'function' ? item.getValueOf(dataSource, { column: item }) : get(dataSource, item.name);
      const displayValue = ((value) => {
        if (typeof item.format === 'function') {
          return item.format(value, { dataSource, column: item });
        }
        if (typeof item.format === 'string') {
          const [name, ...args] = item.format.split('-');
          if (typeof defaultFormat[name] === 'function') {
            return defaultFormat[name](value, { dataSource, column: item, args });
          }
        }
        return value;
      })(itemValue);

      const itemIsEmpty = (item.valueIsEmpty || valueIsEmpty)(itemValue);

      if (item.display === false || (typeof item.display === 'function' && item.display(itemValue, {
        dataSource, column: item
      }) === false)) {
        return null;
      }

      if (!(item.hasOwnProperty('emptyIsPlaceholder') ? item.emptyIsPlaceholder : emptyIsPlaceholder) && itemIsEmpty) {
        return null;
      }
      const isLast = index === columns.length - 1;
      const legacy = 24 - totalColWidth.current % 24;
      const currentSpan = (() => {
        if (item.block === true) {
          return 24;
        }

        if (isLast) {
          return legacy;
        }

        const itemSpan = 24 / (item.col || col);

        //如果下一条放不下，则由当前补齐


        return itemSpan;
      })();
      totalColWidth.current = totalColWidth.current + currentSpan;
      const colWidth = currentSpan / 24;

      return <Col className={classnames(style['table-view-col'], 'table-view-col')} key={index} style={{
        '--col-width': `${100 * colWidth}%`
      }}>
        <Row className={classnames(style['table-view-item'], 'table-view-item')} wrap={false}>
          <Col className={classnames(style['table-view-label'], 'table-view-label')} style={{
            '--col-label-width': isLast && legacy > 0 ? `${100 / (3 * 24 / legacy)}%` : `${100 / (3 * currentSpan * col / 24)}%`
          }}>{item.title}</Col>
          <Col
            className={classnames(style['table-view-content'], 'table-view-content')}>{itemIsEmpty ? (item.placeholder || placeholder) : displayValue}</Col>
        </Row>
      </Col>;
    })}
  </Row>;*/
};

export default TableView;
