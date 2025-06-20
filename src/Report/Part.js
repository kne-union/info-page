import React from 'react';
import { Space } from 'antd';
import get from 'lodash/get';
import classnames from 'classnames';
import style from './style.module.scss';

const Part = ({ className, report }) => {
  return (
    <Space direction="vertical" size={32} className={classnames('part-view', className)}>
      {get(report, 'list', []).map(({ label, content, hasBgColor, ...props }, index) => {
        return (
          <div {...props} key={index}>
            <div className={classnames('part-label', style['part-label'])}>{label}</div>
            <div
              className={classnames('part-content', style['part-content'], {
                [style['has-bg-color']]: hasBgColor
              })}
            >
              {content}
            </div>
          </div>
        );
      })}
    </Space>
  );
};

export default Part;
