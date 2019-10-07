import React from "react";
import Style from "./style";

const Drawer = props => {
  let { visible, onClose } = props;
  return (
    <Style visible={visible}>
      <div className="background" role="button" onClick={onClose} />
      <ul className="menu">
        <li>Items</li>
        <li>Packs</li>
      </ul>
    </Style>
  );
};

export default Drawer;
