import React from 'react';
import classnames from 'classnames';
import { Row, Col } from 'antd';
import style from './style.module.scss';

const ScoreItem = ({ score, total, staticScore, getLevel, levelColors = ['#f1f1f1', '#f66969', '#ffb566', '#a2de91'] }) => {
  score = Number.isNaN(score) ? 0 : Number(score);
  const level = (
    getLevel ||
    (score => {
      if (score <= total / 3) return 1;
      if (score <= (total * 2) / 3) return 2;
      if (score > (total * 2) / 3) return 3;
    })
  )(score);

  const color = staticScore > score ? levelColors[0] : levelColors[level];
  return (
    <div
      className={classnames('score-item', style['score-item'])}
      style={{
        '--score-item-color': color
      }}
    />
  );
};

const Score = ({ className, value, gap = 4, total = 5 }) => {
  return (
    // total 未必整除 24（如 5→4.8），span 会生成无效 ant-col-4.8，列宽塌成内容宽再被 space-between 拉开
    <Row gutter={[gap, 0]} className={classnames(className, 'score-view', style['score'])} wrap={false}>
      {Array.from({ length: total }).map((n, index) => (
        <Col key={index + 1} flex={1} className={classnames('score-item-col', style['score-item-col'])}>
          <ScoreItem score={value} total={total} staticScore={index + 1} />
        </Col>
      ))}
    </Row>
  );
};

export default Score;
