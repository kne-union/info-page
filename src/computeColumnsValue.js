import get from 'lodash/get';
import formatView from './formatView';

const computeColumnsValue = ({ columns, emptyIsPlaceholder, valueIsEmpty, dataSource }) => {
  return columns
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
    .filter(item => !!item);
};

export const computeDisplay = ({ column, dataSource, placeholder }) => {
  return column.isEmpty
    ? typeof column.renderPlaceholder === 'function'
      ? column.renderPlaceholder({
          column: column,
          dataSource,
          placeholder
        })
      : column.placeholder || placeholder
    : typeof column.render === 'function'
      ? column.render(column.value, {
          column,
          dataSource
        })
      : column.value;
};

export const computeColumnsDisplay = ({ columns, emptyIsPlaceholder, valueIsEmpty, dataSource, placeholder }) => {
  return computeColumnsValue({ columns, emptyIsPlaceholder, valueIsEmpty, dataSource }).map(column => {
    return computeDisplay({ column, placeholder, dataSource });
  });
};

computeColumnsValue.computeDisplay = computeDisplay;
computeColumnsValue.computeColumnsDisplay = computeColumnsDisplay;

export default computeColumnsValue;
