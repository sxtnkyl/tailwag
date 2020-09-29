import { useState, useEffect, useRef } from "react";

const images = [
  { id: "Home", src: "../../images/Home.jpg", description: "aussie" },
  { id: "About", src: "../../images/About.jpg", description: "beagle" },
  { id: "Contact", src: "../../images/Contact.jpg", description: "black_dog" },
  { id: "Gallery", src: "../../images/Gallery.jpg", description: "brown_dog" },
  {
    id: "Services",
    src: "../../images/Services.jpg",
    description: "white_dog",
  },
];

const useBannerImage = (route) => {
  //matches route(str) to image of images folder
  let match = images.find(({ id }) => {
    return id === route;
  });
  return match;
};

export default useBannerImage;
