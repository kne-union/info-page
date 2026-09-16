/** antd Steps `classNames` 语义槽位：稳定类名，避免依赖 `.ant-steps-*` 内部结构 */
export const FLOW_STEPS_CLASS_NAMES = {
  item: 'kne-info-flow-item',
  itemWrapper: 'kne-info-flow-item-wrapper',
  itemIcon: 'kne-info-flow-item-icon',
  itemSection: 'kne-info-flow-item-section',
  itemHeader: 'kne-info-flow-item-header',
  itemTitle: 'kne-info-flow-item-title',
  itemSubtitle: 'kne-info-flow-item-subtitle',
  itemContent: 'kne-info-flow-item-content',
  itemRail: 'kne-info-flow-item-rail'
};

export const mergeFlowStepsClassNames = classNames => {
  if (typeof classNames === 'function') {
    return info => Object.assign({}, FLOW_STEPS_CLASS_NAMES, classNames(info));
  }
  return Object.assign({}, FLOW_STEPS_CLASS_NAMES, classNames);
};
