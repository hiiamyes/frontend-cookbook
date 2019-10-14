import React, { useState, createRef, useEffect } from "react";
import Style from "./style";

const Carousel = props => {
  const { toggle, detail } = props;
  const detailH = createRef();

  const [visible, setVisible] = useState(false);
  const [height, setHeight] = useState();

  useEffect(() => {
    setHeight(detailH.current.getBoundingClientRect().height);
  }, []);

  return (
    <Style height={height}>
      <div className="toggle" onClick={() => setVisible(!visible)}>
        {toggle}
      </div>
      <div className={`detail ${visible ? "visible" : ""}`}>
        <div ref={detailH}>{detail}</div>
      </div>
    </Style>
  );
};

export default Carousel;
