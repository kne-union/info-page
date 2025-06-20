import React from 'react';
import { Flex, Row, Col } from 'antd';
import get from 'lodash/get';
import classnames from 'classnames';
import style from './style.module.scss';

const List = ({ className, report }) => {
  return (
    <Flex vertical gap={16} className={classnames('list-view', className)}>
      {get(report, 'list', []).map(({ label, content }, index) => {
        return (
          <Row wrap={false} key={index}>
            <Col span={3} className={classnames('list-label-col', style['list-label-col'])}>
              <div className={classnames('list-label', style['list-label'])}>{label}</div>
            </Col>
            <Col span={21} className={classnames('list-content-col', style['list-content-col'])}>
              <div className={classnames('list-content', style['list-content'])}>{content}</div>
            </Col>
          </Row>
        );
      })}
    </Flex>
  );
};

export default List;
