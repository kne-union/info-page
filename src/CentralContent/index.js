import React, { useMemo } from 'react';
import { isEmpty } from '@kne/is-empty';
import { Col, Row } from 'antd';
import classnames from 'classnames';
import boxComputed from './boxComputed';
import style from './style.module.scss';
import computeColumnsValue from '../computeColumnsValue';

const CentralContent = props => {
  const { dataSource, columns, col, valueIsEmpty, emptyIsPlaceholder, placeholder, className, context } = Object.assign(
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
      computeColumnsValue({
        dataSource,
        columns,
        valueIsEmpty,
        emptyIsPlaceholder,
        context
      }),
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
                {computeColumnsValue.computeDisplay({
                  column: item,
                  placeholder,
                  context
                })}
              </Col>
            </Row>
          </Col>
        );
      })}
    </Row>
  );
};

export default CentralContent;
