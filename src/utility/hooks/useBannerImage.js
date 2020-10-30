import { useState, useEffect, useRef } from "react";

import ServicePic from "../../images/beagle.jpg";
import HomePic from "../../images/ollieSnoot.jpg";
import StoriesPic from "../../images/croppedCollie.jpg";
import ContactPic from "../../images/chanceSnoot.jpg";
import ErrorPic from "../../images/croppedGerman.jpg";

const images = [
  {
    id: "services",
    // src: "../../images/beagle.jpg",
    src: ServicePic,
    description: "snoozy_Beagle",
  },
  {
    id: "",
    src: HomePic,
    description: "ollie_Sexton",
  },
  {
    id: "stories",
    src: StoriesPic,
    description: "black_and_brown_dog",
  },
  {
    id: "contact",
    src: ContactPic,
    description: "chance_Thomas",
  },
  {
    id: "404",
    src: ErrorPic,
    description: "white_lab",
  },
];

const useBannerImage = (route) => {
  //matches route(str) to image of images folder
  let image = images.find(({ id }) => {
    return id === route;
  });
  return image;
};

export default useBannerImage;
