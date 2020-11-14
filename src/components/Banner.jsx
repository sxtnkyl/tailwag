import React from "react";
import { makeStyles } from "@material-ui/core";
import TestPic from "../images/ollieSnoot.jpg";
import useBannerImage from "../utility/hooks/useBannerImage";
import theme from "../theme/theme";

import { motion, AnimatePresence } from "framer-motion";

const useStyles = makeStyles((theme) => ({
  container: {
    height: "30vh",
    borderBottomLeftRadius: "50% 20%",
    borderBottomRightRadius: "50% 20%",
  },
  image: {
    height: "100%",
    width: "100%",
    objectFit: "cover",
    borderBottomLeftRadius: "50% 20%",
    borderBottomRightRadius: "50% 20%",
    boxShadow: theme.palette.shadows.bottomShadow,
    backgroundColor: theme.palette.primary.light,
  },
}));

const Banner = ({ location }) => {
  const classes = useStyles();
  let currentRoute = location.pathname.substring(1, location.pathname.length);
  //check if stories- can have subpaths- return stories
  if (currentRoute.includes("stories")) currentRoute = "stories";

  const image = useBannerImage(currentRoute);

  const SnootBanner = ({ image }) => (
    <AnimatePresence>
      <motion.img
        className={classes.image}
        src={image.src}
        alt={image.description}
        initial={{ opacity: 0.5 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0.5 }}
      />
    </AnimatePresence>
  );

  return (
    <div
      className={classes.container}
      style={{ ...theme.mixins.formats.centeredFlex }}>
      <SnootBanner image={image} />
      <div className={classes.banner} />
    </div>
  );
};

export default Banner;
