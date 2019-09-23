import React, { useState, createRef, useEffect } from "react";
import { debounce } from "lodash/fp";
import FAIcon from "../FAIcon";
import Style from "./style";

const Carousel = props => {
  const { visible, onClose, children } = props;
  const [actionsVisible, setActionsVisible] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0);
  const [w, setW] = useState(0);
  const itemsRef = createRef();
  const prev = () => {
    if (activeIndex === 0) {
      setActiveIndex(children.length - 1);
    } else {
      setActiveIndex(activeIndex - 1);
    }
  };
  const next = () => {
    if (activeIndex === children.length - 1) {
      setActiveIndex(0);
    } else {
      setActiveIndex(activeIndex + 1);
    }
  };
  const go = index => () => {
    setActiveIndex(index);
  };
  const resize = debounce(150, () => {
    if (itemsRef.current) setW(itemsRef.current.getBoundingClientRect().width);
  });
  const toggleActionsVisible = () => {
    setActionsVisible(!actionsVisible);
  };

  useEffect(() => {
    resize();
    window.addEventListener("resize", resize);
    return () => {
      window.removeEventListener("resize", resize);
    };
  }, [itemsRef]);

  useEffect(() => {
    const keydown = e => {
      switch (e.key) {
        case "ArrowLeft":
          prev();
          break;
        case "ArrowRight":
          next();
          break;
        case "Escape":
          onClose();
          break;
        default:
          break;
      }
    };
    window.addEventListener("keydown", keydown);
    return () => {
      window.removeEventListener("keydown", keydown);
    };
  }, [activeIndex]);
  return (
    <Style actionsVisible={actionsVisible}>
      {visible && (
        <div className="modal">
          <div
            ref={itemsRef}
            className="items"
            style={{
              transform: `translateX(${-w * activeIndex}px)`
            }}
            onClick={toggleActionsVisible}
          >
            {children.map((child, index) => {
              return (
                <div key={index} className="item">
                  {child}
                </div>
              );
            })}
          </div>
          <button className="close" onClick={onClose}>
            <FAIcon icon="times"></FAIcon>
          </button>
          <button className="prev" onClick={prev}>
            <FAIcon icon="chevron-left"></FAIcon>
          </button>
          <button className="next" onClick={next}>
            <FAIcon icon="chevron-right"></FAIcon>
          </button>
          <div className="indicators">
            {children.map((child, index) => {
              return (
                <button
                  key={index}
                  className={`indicator ${
                    index === activeIndex ? "active" : ""
                  }`}
                  onClick={go(index)}
                ></button>
              );
            })}
          </div>
        </div>
      )}
    </Style>
  );
};

export default Carousel;
