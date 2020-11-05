import * as React from "react";
import { motion, useInvertedScale } from "framer-motion";
import { closeSpring } from "../../../utility/animations";
import { makeStyles } from "@material-ui/core";

import germanShep from "../../../images/croppedGerman.jpg";

const useStyles = makeStyles((theme) => ({
  cardImageContainer: {
    margin: theme.spacing(2),
    borderRadius: theme.spacing(2),
    borderBottomLeftRadius: theme.spacing(16),
    overflow: "hidden",
  },
  image: {
    objectFit: "cover",
    height: "100%",
    width: "100%",
  },
}));

export const Image = ({
  id,
  isSelected,
  pointOfInterest = 0,
  backgroundColor,
  paramsId = null,
}) => {
  const classes = useStyles();
  const inverted = useInvertedScale();

  return (
    <motion.div
      className={classes.cardImageContainer}
      animate={{ height: paramsId === null ? "75%" : "50%" }}>
      <motion.img
        className={classes.image}
        src={germanShep}
        alt=""
        // initial={false}
        // animate={
        //   isSelected ? { x: -20, y: -20 } : { x: -pointOfInterest, y: 0 }
        // }
        // transition={closeSpring}
      />
    </motion.div>
  );
};
