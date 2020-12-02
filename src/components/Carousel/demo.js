import React from "react";
import styled from "styled-components";
import Carousel from "./index";
import photo1 from "./photos/benjamin-voros-phIFdC6lA4E-unsplash.jpg";
import photo2 from "./photos/jerry-zhang-ePpaQC2c1xA-unsplash.jpg";
import photo3 from "./photos/john-rodenn-castillo-eluzJSfkNCk-unsplash.jpg";
import photo4 from "./photos/kalen-emsley-Bkci_8qcdvQ-unsplash.jpg";
import Button from "src/components/Buttons/Button";
import useModal from "src/components/Modal/useModal";

const Photo = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  > .copyright {
    color: white;
    position: absolute;
    bottom: 48px;
    width: 100%;
    text-align: center;
  }
  > img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

const photos = [
  {
    url: photo1,
    copyright: "Photo by John Rodenn Castillo on Unsplash",
  },
  {
    url: photo2,
    copyright: "Photo by Benjamin Voros on Unsplash",
  },
  {
    url: photo3,
    copyright: "Photo by Kalen Emsley on Unsplash",
  },
  {
    url: photo4,
    copyright: "Photo by Jerry Zhang on Unsplashh",
  },
];

const CarouselDemo = () => {
  const { visible, openModal, closeModal } = useModal();

  return (
    <div>
      <Button onClick={openModal}>Open Carousel</Button>
      <Carousel visible={visible} onClose={closeModal}>
        {photos.map((photo) => {
          return (
            <Photo>
              <div className="copyright">{photo.copyright}</div>
              <img src={photo.url} />
            </Photo>
          );
        })}
      </Carousel>
    </div>
  );
};

export default CarouselDemo;
