import React, { useState, createRef, useEffect } from "react";
import Style from "./style";

const Collapse = (props) => {
  const { visible, children } = props;
  const childrenRef = createRef();
  const [height, setHeight] = useState();

  useEffect(() => {
    setHeight(childrenRef.current.getBoundingClientRect().height);
  }, []);

  return (
    <Style height={height}>
      <div className={`children ${visible ? "visible" : ""}`}>
        <div ref={childrenRef}>{children}</div>
      </div>
    </Style>
  );
};

export default Collapse;
