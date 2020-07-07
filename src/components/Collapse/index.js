import React, { useState, useCallback } from "react";
import { CSSTransition } from "react-transition-group";
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
    <CSSTransition in={visible} timeout={300} classNames="collapse">
      <Style className={visible ? "visible" : ""} height={height}>
        <div ref={measuredRef}>{children}</div>
      </Style>
    </CSSTransition>
  );
};

export default Collapse;
