import React, { useState, createRef } from "react";
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
  // const [visible, setVisible] = useState(false);
  const [visible, setVisible] = useState(true);
  const bb = createRef();
  const open = () => {
    setVisible(true);
  };
  const close = e => {
    if (e.target === bb.current) {
      setVisible(false);
    }
  };
  return (
    <Style>
      <button onClick={open}>open</button>
      {visible && (
        <div ref={bb} className="bb" onClick={close}>
          <button className="prev">
            <FAIcon icon="chevron-left"></FAIcon>
          </button>
          <div className="cc">
            {photos.map(photo => {
              return (
                <div className="ccc">
                  <img src={photo.url} />
                  <div>{photo.copyright}</div>
                </div>
              );
            })}
          </div>
          <button className="next">
            <FAIcon icon="chevron-right"></FAIcon>
          </button>
        </div>
      )}
    </Style>
  );
};

export default Carousel;
