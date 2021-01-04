import React, { useRef } from "react";
import { motion, useMotionValue, useInvertedScale } from "framer-motion";
import { Link, useHistory } from "react-router-dom";

import * as c from "@material-ui/core";
import { makeStyles } from "@material-ui/core";

import { useScrollConstraints } from "../utils/useScrollConstraints";
import { useWheelScroll } from "../utils/useWheelScroll";
import { useInvertedBorderRadius } from "../utils/useInvertedBorderRadius";

import storiesData from "../../../utility/storiesData";
import useFade from "../../../utility/hooks/useFade";
import germanShep from "../../../images/croppedGerman.jpg";

const useStyles = makeStyles((theme) => ({
  backdrop: {
    zIndex: 3,
    position: "fixed",
    top: 0,
    left: 0,
    bottom: 0,
    background: "rgba(0, 0, 0, 0.3)",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignContent: "center",
  },
  backdropLink: {
    position: "fixed",
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    zIndex: 4,
    width: "100%",
  },
  openCardContent: {
    marginTop: "12vh",
    height: "80vh",
    width: "50vw",
    maxWidth: "700px",
    backgroundColor: theme.palette.primary.light,
    zIndex: 5,
    background:
      "linear-gradient(130deg, rgba(179, 229, 252, 1) 0%, rgba(33, 150, 243, 0.75) 50%)",
    boxShadow: `2px 2px 4px ${useFade(theme.palette.primary.dark, 0.8)}`,
    display: "flex",
    flexDirection: "column",
    [theme.breakpoints.down("md")]: {
      width: "90vw",
    },
  },
  cardImageContainer: {
    margin: theme.spacing(2),
    borderRadius: theme.spacing(2),
    borderBottomLeftRadius: theme.spacing(16),
    overflow: "hidden",
    [theme.breakpoints.down("md")]: {
      borderBottomLeftRadius: theme.spacing(8),
    },
  },
  image: {
    objectFit: "cover",
    height: "100%",
    width: "100%",
  },
  title: {
    margin: theme.spacing(2),
  },
  contentContainer: {
    maxHeight: "50%",
    padding: "32px 64px",
    maxWidth: "700px",
    overflow: "auto",
    margin: "auto",
    marginRight: theme.spacing(1),
    [theme.breakpoints.down("md")]: {
      padding: "32px",
    },
    "&::-webkit-scrollbar": {
      width: theme.spacing(1),
      opacity: "0.5",
    },
    "&::-webkit-scrollbar-track": {
      width: theme.spacing(2),
      backgroundColor: theme.palette.primary.main,
    },
    "&::-webkit-scrollbar-thumb": {
      backgroundColor: theme.palette.primary.dark,
      borderRadius: theme.shape.borderRadius,
    },
  },
}));

export const OpenCard = ({ paramsId }) => {
  const classes = useStyles();
  const { id, ownerName, testimonial } = storiesData.find(
    (item) => item.id === paramsId
  );

  const MotionCard = motion.custom(c.Card);
  const MotionTypography = motion.custom(c.Typography);

  const history = useHistory();
  const dismissDistance = 100;

  const y = useMotionValue(0);
  const inverted = useInvertedBorderRadius(20);
  const cardRef = useRef(null);
  const constraints = useScrollConstraints(cardRef, true);

  function checkSwipeToDismiss() {
    Math.abs(y.get()) > dismissDistance && history.push("/testimonials");
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
        animate={{ height: "40%" }}
        style={{ ...inverted }}
      >
        <motion.img
          className={classes.image}
          layoutId={`image-${id}`}
          src={germanShep}
          alt="dog-photo"
        />
      </motion.div>
    );
  };

  const Title = () => {
    return (
      <MotionTypography
        className={classes.title}
        key="title"
        animate={{ x: 32, y }}
      >
        ~ {ownerName}
      </MotionTypography>
    );
  };

  return (
    <motion.div
      ref={containerRef}
      className={classes.backdrop}
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      style={{ pointerEvents: "auto" }}
    >
      <MotionCard
        ref={cardRef}
        className={classes.openCardContent}
        layoutId={`card-container-${id}`}
        style={{ ...inverted, y }}
        drag={"y"}
        dragConstraints={constraints}
        onDrag={checkSwipeToDismiss}
      >
        <Image />
        <MotionTypography
          variant="subtitle1"
          className={classes.contentContainer}
          animate="true"
        >
          " {testimonial} "
        </MotionTypography>
        <c.Divider
          variant="middle"
          style={{
            marginLeft: "64px",
            marginRight: "64px",
          }}
        />
        <Title />
      </MotionCard>
      <Link
        to="/testimonials"
        className={classes.backdropLink}
        aria-label="close current card"
      />
    </motion.div>
  );
};
