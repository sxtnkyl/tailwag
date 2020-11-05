import React, { memo, useRef } from "react";
import { motion, useMotionValue, useInvertedScale } from "framer-motion";
import { Link, useHistory } from "react-router-dom";

import * as c from "@material-ui/core";
import { makeStyles, Card } from "@material-ui/core";

import { useScrollConstraints } from "../utils/useScrollConstraints";
import { useWheelScroll } from "../utils/useWheelScroll";
import { useInvertedBorderRadius } from "../utils/useInvertedBorderRadius";

import storiesData from "../../../utility/storiesData";
import useFade from "../../../utility/hooks/useFade";
import germanShep from "../../../images/croppedGerman.jpg";

const useStyles = makeStyles((theme) => ({
  openCardContent: {
    marginTop: "12vh",
    height: "80vh",
    width: "50%",
    maxWidth: "700px",
    backgroundColor: theme.palette.primary.light,
    zIndex: 2,
    background:
      "linear-gradient(130deg, rgba(179, 229, 252, 1) 0%, rgba(33, 150, 243, 0.75) 80%)",
    boxShadow: `2px 2px 4px ${useFade(theme.palette.primary.dark, 0.8)}`,
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
  title: { margin: theme.spacing(2) },
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
    const MotionTitle = motion.custom(c.Typography);

    const history = useHistory();
    const dismissDistance = 150;

    const y = useMotionValue(0);
    const inverted = useInvertedBorderRadius(20);
    const cardRef = useRef(null);
    const constraints = useScrollConstraints(cardRef, true);

    function checkSwipeToDismiss() {
      y.get() > dismissDistance && history.push("/stories");
    }

    const containerRef = useRef(null);
    useWheelScroll(containerRef, y, constraints, checkSwipeToDismiss, true);

    const Image = () => {
      const inverted = useInvertedScale();
      const scaleTranslate = ({ x, y, scaleX, scaleY }) =>
        `scaleX(${scaleX}) scaleY(${scaleY}) translate(${x}, ${y}) translateZ(0)`;

      return (
        <motion.div
          className={classes.cardImageContainer}
          layoutId={`image-container-${id}`}
          transformTemplate={scaleTranslate}
          animate={{ height: "50%" }}
          style={{ ...inverted }}>
          <motion.img
            className={classes.image}
            layoutId={`image-${id}`}
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

    const Title = () => {
      const inverted = useInvertedScale();
      return (
        <MotionTitle
          className={classes.title}
          layoutId={`title-container-${id}`}
          style={{ paddingLeft: 40, ...inverted }}>
          {dogName} and {ownerName}
        </MotionTitle>
      );
    };

    return (
      <motion.div
        ref={containerRef}
        className={classes.backdrop}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        style={{ pointerEvents: "auto" }}>
        <MotionCard
          ref={cardRef}
          className={classes.openCardContent}
          layoutId={`card-container-${id}`}
          style={{ ...inverted, y }}
          animate={{ opacity: 1 }}
          drag={"y"}
          dragConstraints={constraints}
          onDrag={checkSwipeToDismiss}>
          <Image />
          <Title />
          {/* <ContentPlaceholder /> */}
        </MotionCard>
        <Link to="/stories" className={classes.backdropLink} />
      </motion.div>
    );
  },
  (prev, next) => prev.isSelected === next.isSelected
);
