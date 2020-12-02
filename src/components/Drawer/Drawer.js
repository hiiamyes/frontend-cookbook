import React from "react";
import Style from "./style";

const Drawer = (props) => {
  let { visible, onClose, children, ...rest } = props;
  return (
    <Style visible={visible} {...rest}>
      <div className="background" role="button" onClick={onClose} />
      <div className="content">{children}</div>
    </Style>
  );
};

export default Drawer;
