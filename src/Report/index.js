import React from 'react';
import style from './style.module.scss';
import { Flex } from 'antd';
import List from './List';
import Result from './Result';
import Table from './Table';
import Part from './Part';
import Score from './Score';
import PrintPageBreak from './PrintPageBreak';
import classNames from 'classnames';

const Report = ({ title, subtitle, extra, className, border, children }) => {
  return (
    <div
      className={classNames(
        style['report-view'],
        {
          [style['no-title']]: !(title || extra),
          [style['no-border']]: border === false
        },
        className
      )}
    >
      <Flex className={style['title-outer']} justify="space-between">
        {title && (
          <Flex vertical>
            <div className={style['title']}>{title}</div>
            {subtitle && <div className={style['subtitle']}>{subtitle}</div>}
          </Flex>
        )}
        {extra && <div className={style['title-extra']}>{extra}</div>}
      </Flex>
      {children}
    </div>
  );
};

Report.List = List;
Report.Result = Result;
Report.Table = Table;
Report.Part = Part;
Report.Score = Score;
Report.PrintPageBreak = PrintPageBreak;

export default Report;
