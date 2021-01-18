import React, { useEffect, useState, useRef } from "react";
import classnames from "classnames";
import PropTypes from "prop-types";
import Tip from "./Tip";

const Tooltip = (props) => {
  const { tip, children, ...rest } = props;
  const [hover, setHover] = useState(false);
  const [rect, setRect] = useState(null);
  const childRef = useRef();
  useEffect(() => {
    // console.log(childRef.current.getBoundingClientRect().top);
    setRect(childRef.current.getBoundingClientRect());
  }, []);
  console.log(rect);
  return (
    <>
      {React.cloneElement(children, {
        ref: childRef,
        onMouseEnter: () => {
          setHover(true);
        },
        onMouseLeave: () => {
          setHover(false);
        },
      })}
      {rect && (
        <Tip className={classnames("tip", { hover })} rect={rect}>
          {tip}
        </Tip>
      )}
    </>
  );
};

Tooltip.propTypes = {
  size: PropTypes.string.isRequired,
};

Tooltip.defaultProps = {
  tip: "",
};

export default Tooltip;
