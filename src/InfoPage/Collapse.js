import { Collapse as CollapseAntd } from "antd";
import classnames from "classnames";
import React from "react";

import style from "./style.module.scss";

const Collapse = ({ children, className, ...props }) => {
  return (
    <CollapseAntd
      {...props}
      className={classnames(style["collapse"], "collapse", className)}
    >
      {children}
    </CollapseAntd>
  );
};

Collapse.Panel = CollapseAntd.Panel;

export default Collapse;
