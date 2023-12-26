import { useEffect, useState } from "react";
import "react-image-gallery/styles/css/image-gallery.css";
// import ImageGallery from "react-image-gallery";
import AwesomeSlider from "react-awesome-slider";
import AwesomeSliderStyles from "react-awesome-slider/src/styles";
import "./App.css";
import Index from "./Redux";
import Drawer from "./Drawer/Drawer";
import Carousel from "./CarouselModule/Carousel";
import { slides } from "./CarouselModule/ImageSlides";

function App() {
  const slider = (
    <AwesomeSlider cssModule={AwesomeSliderStyles}>
      <div data-src="/path/to/image-0.png" />
      <div data-src="/path/to/image-1.png" />
      <div data-src="/path/to/image-2.jpg" />
    </AwesomeSlider>
  );

  // function handleMoveToTop() {
  //   window.scrollTo(0, 0);
  // }

  return (
    <div className="h-96 flex justify-center items-center">
      {/* <Carousel slides={slides} /> */}
      <div className="w-2/4">
        {/* <ImageGallery items={images} />; */}
        {/* {slider} */}
      </div>
    </div>
  );
}

export default App;
