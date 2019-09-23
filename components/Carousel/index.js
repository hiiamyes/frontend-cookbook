import React, { useState, createRef, useEffect } from "react";
import { debounce } from "lodash/fp";
import FAIcon from "../FAIcon";
import Style from "./style";
import photo1 from "./photos/benjamin-voros-phIFdC6lA4E-unsplash.jpg";
import photo2 from "./photos/jerry-zhang-ePpaQC2c1xA-unsplash.jpg";
import photo3 from "./photos/john-rodenn-castillo-eluzJSfkNCk-unsplash.jpg";
import photo4 from "./photos/kalen-emsley-Bkci_8qcdvQ-unsplash.jpg";

const photos = [
  {
    url: photo1,
    copyright: "Photo by John Rodenn Castillo on Unsplash"
  },
  {
    url: photo2,
    copyright: "Photo by Benjamin Voros on Unsplash"
  },
  {
    url: photo3,
    copyright: "Photo by Kalen Emsley on Unsplash"
  },
  {
    url: photo4,
    copyright: "Photo by Jerry Zhang on Unsplashh"
  }
];

const Carousel = props => {
  const [visible, setVisible] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0);
  const [w, setW] = useState(0);
  const bb = createRef();
  const itemsRef = createRef();
  const open = () => {
    setVisible(true);
  };
  const close = e => {
    setVisible(false);
  };
  const prev = () => {
    if (activeIndex === 0) {
      setActiveIndex(photos.length - 1);
    } else {
      setActiveIndex(activeIndex - 1);
    }
  };
  const next = () => {
    if (activeIndex === photos.length - 1) {
      setActiveIndex(0);
    } else {
      setActiveIndex(activeIndex + 1);
    }
  };
  const go = index => () => {
    setActiveIndex(index);
  };
  const resize = debounce(150, () => {
    setW(itemsRef.current.getBoundingClientRect().width);
  });

  useEffect(() => {
    resize();
    window.addEventListener("resize", resize, {});
    return () => {
      window.removeEventListener("resize", resize);
    };
  }, []);

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
          close();
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
    <Style>
      <button onClick={open}>open</button>
      {visible && (
        <div ref={bb} className="modal">
          <div
            ref={itemsRef}
            className="cc"
            style={{
              transform: `translateX(${-w * activeIndex}px)`
            }}
          >
            {photos.map(photo => {
              return (
                <div className="ccc">
                  <img src={photo.url} />
                  <div>{photo.copyright}</div>
                </div>
              );
            })}
          </div>
          <button className="close" onClick={close}>
            <FAIcon icon="times"></FAIcon>
          </button>
          <button className="prev" onClick={prev}>
            <FAIcon icon="chevron-left"></FAIcon>
          </button>
          <button className="next" onClick={next}>
            <FAIcon icon="chevron-right"></FAIcon>
          </button>
          <div className="indicators">
            {photos.map((photo, index) => {
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
