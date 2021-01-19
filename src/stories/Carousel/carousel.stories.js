import React from "react";
import photo1 from "./photos/benjamin-voros-phIFdC6lA4E-unsplash.jpg";
import photo2 from "./photos/jerry-zhang-ePpaQC2c1xA-unsplash.jpg";
import photo3 from "./photos/john-rodenn-castillo-eluzJSfkNCk-unsplash.jpg";
import photo4 from "./photos/kalen-emsley-Bkci_8qcdvQ-unsplash.jpg";
import Carousel from "src/components/Carousel";
import Photo from "src/components/Carousel/Photo";
import Button from "src/components/Buttons/Button";
import useModal from "src/components/Modal/useModal";

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

export default {
  title: "Carousel",
};

export const Default = () => {
  const modal1 = useModal();
  const { visible, openModal, closeModal } = useModal();
  return (
    <div>
      <Button onClick={modal1.openModal}>Single photo</Button>
      <Carousel visible={modal1.visible} onClose={modal1.closeModal}>
        {[photos[0]].map((photo) => {
          return <Photo copyright={photo.copyright} url={photo.url} />;
        })}
        {/* <Photo copyright={photos[0].copyright} url={photos[0].url} />; */}
      </Carousel>
      <br />
      <br />
      <Button onClick={openModal}>Multiple photos</Button>
      <Carousel visible={visible} onClose={closeModal}>
        {photos.map((photo) => {
          return <Photo copyright={photo.copyright} url={photo.url} />;
        })}
      </Carousel>
    </div>
  );
};
