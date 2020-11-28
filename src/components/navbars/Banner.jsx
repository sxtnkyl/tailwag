import React from "react";
import { makeStyles } from "@material-ui/core";
import useBannerImage from "../../utility/hooks/useBannerImage";
import theme from "../../theme/theme";

import { motion, AnimatePresence } from "framer-motion";

const useStyles = makeStyles((theme) => ({
  container: {
    height: "30vh",
    borderTopLeftRadius: "50% 20%",
    borderTopRightRadius: "50% 20%",
    overflow: "hidden",
    boxShadow: theme.palette.shadows.topShadow,
    [theme.breakpoints.down("sm")]: {
      height: "20vh",
    },
  },
  image: {
    height: "100%",
    width: "100%",
    objectFit: "cover",
    borderTopLeftRadius: "50% 20%",
    borderTopRightRadius: "50% 20%",

    backgroundColor: theme.palette.primary.light,
  },
}));

const Banner = ({ location }) => {
  const classes = useStyles();
  let currentRoute = location.pathname.substring(1, location.pathname.length);
  if (currentRoute.includes("stories")) currentRoute = "stories";

  const image = useBannerImage(currentRoute);

  const SnootBanner = ({ image }) => (
    <AnimatePresence>
      <motion.img
        key="banner"
        className={classes.image}
        src={image.src}
        alt={image.description}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      />
    </AnimatePresence>
  );

  return (
    <div
      className={classes.container}
      style={{ ...theme.mixins.formats.centeredFlex }}
    >
      <SnootBanner image={image} />
      <div className={classes.banner} />
    </div>
  );
};

export default Banner;
