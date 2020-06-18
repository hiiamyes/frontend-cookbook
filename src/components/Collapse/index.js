import React, { useState, useCallback } from "react";
import Style from "./style";

const Collapse = (props) => {
  const { visible, children } = props;
  const [height, setHeight] = useState();

  // https://reactjs.org/docs/hooks-faq.html#how-can-i-measure-a-dom-node
  const measuredRef = useCallback((node) => {
    if (node !== null) {
      const resizeObserver = new ResizeObserver(() => {
        setHeight(node.getBoundingClientRect().height);
      });
      resizeObserver.observe(node);
    }
  }, []);

  return (
    <Style>
      <div
        className={`children ${visible ? "visible" : ""}`}
        style={{ height: visible ? `${height}px` : 0 }}
      >
        <div ref={measuredRef}>{children}</div>
      </div>
    </Style>
  );
};

export default Collapse;
