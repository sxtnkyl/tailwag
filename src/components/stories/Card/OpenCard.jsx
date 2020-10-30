import React, { memo, useRef } from "react";
import {
  AnimateSharedLayout,
  AnimatePresence,
  motion,
  useMotionValue,
} from "framer-motion";
import { Link } from "react-router-dom";

import * as c from "@material-ui/core";
import { makeStyles, Card, Backdrop } from "@material-ui/core";

import { ContentPlaceholder } from "./ContentPlaceholder";
import { Title } from "./Title";
import { Image } from "./Image";

import { openSpring, closeSpring } from "../../../utility/animations";
import { useScrollConstraints } from "../utils/useScrollConstraints";
import { useWheelScroll } from "../utils/useWheelScroll";
import { useInvertedBorderRadius } from "../utils/useInvertedBorderRadius";

import storiesData from "../../../utility/storiesData";

const useStyles = makeStyles((theme) => ({
  openCardContent: {
    marginTop: "12vh",
    height: "80vh",
    width: "50%",
    maxWidth: "700px",
    border: "1px solid yellow",
    backgroundColor: "pink",
    zIndex: 2,
  },
  backdrop: {
    zIndex: 1,
    position: "fixed",
    top: 0,
    bottom: 0,
    background: "rgba(0, 0, 0, 0.3)",
    width: "100%",
    left: "50%",
    transform: "translateX(-50%)",
    display: "flex",
    justifyContent: "center",
    alignContent: "center",
  },
  backdropLink: {
    position: "fixed",
    top: 0,
    bottom: 0,
    right: 0,
    zIndex: 1,
    width: "100%",
    left: "50%",
    transform: "translateX(-50%)",
  },
}));

export const OpenCard = memo(
  ({ paramsId }) => {
    const classes = useStyles();
    const {
      id,
      dogName,
      ownerName,
      pointOfInterest,
      backgroundColor,
      testimonial,
    } = storiesData.find((item) => item.id === paramsId);

    const MotionCard = motion.custom(Card);
    const MotionBackdrop = motion.custom(Backdrop);

    const y = useMotionValue(0);
    const inverted = useInvertedBorderRadius(20);

    return (
      <motion.div
        className={classes.backdrop}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        style={{ pointerEvents: "auto" }}>
        <motion.div
          className={classes.openCardContent}
          layoutId={`card-container-${id}`}
          style={{ ...inverted, y }}>
          {/* <Image
            id={id}
            isSelected={isSelected}
            pointOfInterest={pointOfInterest}
            backgroundColor={backgroundColor}
            layoutId={`card-image-container-${id}`}
          />
          <Title
            ownerName={ownerName}
            dogName={dogName}
            isSelected={isSelected}
            layoutId={`title-container-${id}`}
          /> */}
          {/* <ContentPlaceholder /> */}
        </motion.div>
        <Link to="/stories" className={classes.backdropLink} />
      </motion.div>
    );
  },
  (prev, next) => prev.isSelected === next.isSelected
);
