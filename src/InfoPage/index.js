import { Card, Space, Flex } from 'antd';
import classnames from 'classnames';
import React from 'react';

import Collapse from './Collapse';
import style from './style.module.scss';

const Part = ({ className, title, subtitle, extra, children, ...props }) => {
  return (
    <Card
      className={classnames(style['part'], 'part', className, {
        'no-title': !title,
        [style['no-title']]: !title
      })}
      bordered={false}
      title={
        title && (
          <>
            <div className={classnames('part-title', style['part-title'])}>{title}</div>
            {subtitle && <div className={classnames('part-title-sub', style['part-title-sub'])}>{subtitle}</div>}
          </>
        )
      }
      extra={extra}
      {...props}
    >
      {children}
    </Card>
  );
};

const InfoPage = ({ className, children, ...props }) => {
  return (
    <Flex {...props} className={className} vertical gap={24}>
      {children}
    </Flex>
  );
};

InfoPage.Part = Part;
InfoPage.Collapse = Collapse;
export default InfoPage;
