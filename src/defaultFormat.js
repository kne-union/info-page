import dayjs from 'dayjs';
import { isEmpty } from '@kne/is-empty';

const defaultFormat = {
  date: (value, { args }) => {
    const template = args[0] || 'YYYY-MM-DD';
    return dayjs(value).format(template);
  },
  datetime: (value, { args }) => {
    const template = args[0] || 'YYYY-MM-DD HH:mm:ss';
    return dayjs(value).format(template);
  },
  dateRange: (value, { args }) => {
    const template = args[0] || 'YYYY-MM-DD',
      allowNull = args[1];
    if (!isEmpty(value[0]) && !isEmpty(value[1])) {
      return `${dayjs(value[0]).format(template)}~${dayjs(value[1]).format(template)}`;
    }
    if (allowNull === 'allow' && !isEmpty(value[0])) {
      return `${dayjs(value[0]).format(template)}以后`;
    }
    if (allowNull === 'allow' && !isEmpty(value[1])) {
      return `${dayjs(value[1]).format(template)}以前`;
    }
    return '';
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

export const formatView = (value, format, context) => {
  const formatList = format.split(' ').filter(item => !!item);
  if (formatList.length > 0) {
    return formatList.reduce((value, format) => {
      const [name, ...args] = format.split('-');
      if (typeof defaultFormat[name] === 'function') {
        return defaultFormat[name](value, Object.assign({}, context, { args }));
      }
      return value;
    }, value);
  }
};

export default defaultFormat;
