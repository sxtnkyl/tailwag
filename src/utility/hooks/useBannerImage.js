import ServicePic from "../../images/beagle.jpg";
import HomePic from "../../images/ollieSnoot.jpg";
import StoriesPic from "../../images/croppedCollie.jpg";
import ContactPic from "../../images/chanceSnoot.jpg";

const images = [
  {
    id: "services",
    src: ServicePic,
    description: "snoozy_Beagle",
  },
  {
    id: "",
    src: HomePic,
    description: "ollie_Sexton",
  },
  {
    id: "testimonials",
    src: StoriesPic,
    description: "black_and_brown_dog",
  },
  {
    id: "contact",
    src: ContactPic,
    description: "chance_Thomas",
  },
];

const useBannerImage = (route) => {
  let currentRoute = route.substring(1, route.length);
  //remove card paths, if open
  if (currentRoute.includes("testimonials")) currentRoute = "testimonials";
  //matches route(str) to image of images folder
  let image = images.find(({ id }) => {
    return id === currentRoute;
  });
  return image;
};

export default useBannerImage;
