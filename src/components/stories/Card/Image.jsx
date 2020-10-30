import * as React from "react";
import { motion, useInvertedScale } from "framer-motion";
import { closeSpring } from "../../../utility/animations";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  cardImageContainer: {
    position: "absolute",
    top: "0",
    left: "0",
    overflow: "hidden",
    height: "420px",
    width: "100vw",
    background: "burlywood",
  },
}));

export const Image = ({
  id,
  isSelected,
  pointOfInterest = 0,
  backgroundColor,
}) => {
  const classes = useStyles();
  const inverted = useInvertedScale();

  return (
    <motion.div
      className={classes.cardImageContainer}
      style={{ ...inverted, backgroundColor, originX: 0, originY: 0 }}>
      <motion.img
        className="card-image"
        src={`images/${id}.jpg`}
        alt=""
        initial={false}
        animate={
          isSelected ? { x: -20, y: -20 } : { x: -pointOfInterest, y: 0 }
        }
        transition={closeSpring}
      />
    </motion.div>
  );
};
