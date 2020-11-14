import React, { memo, useRef } from "react";
import { motion, useMotionValue, useInvertedScale } from "framer-motion";
import { Link } from "react-router-dom";

import * as c from "@material-ui/core";
import { makeStyles, Card } from "@material-ui/core";

import useFade from "../../../utility/hooks/useFade";
import germanShep from "../../../images/croppedGerman.jpg";

const useStyles = makeStyles((theme) => ({
  card: {
    position: "relative",
    height: theme.spacing(50),
    // padding: "20px",
    // flex: "0 0 40%",
    // maxWidth: "40%",
    // // "&:nth-child((NUMofCARDS)n + (cardPosition))
    // //30 30 40, 40 20 40, 40 30 30
    // "&:nth-child(9n + 1), &:nth-child(9n + 2), &:nth-child(9n + 8), &:nth-child(9n + 9)": {
    //   flex: "0 0 30%",
    //   maxWidth: "30%",
    // },
    // "&:nth-child(9n + 5)": {
    //   flex: "0 0 20%",
    //   maxWidth: "20%",
    // },
  },
  cardContent: {
    width: "100%",
    height: "100%",
    margin: "0 auto",
    background:
      "linear-gradient(130deg, rgba(179, 229, 252, 1) 0%, rgba(33, 150, 243, 0.75) 30%)",
    borderRadius: theme.spacing(2),
    boxShadow: `2px 2px 4px ${useFade(theme.palette.primary.dark, 0.8)}`,
    display: "flex",
    flexDirection: "column",
  },
  cardOpenLink: {
    position: "absolute",
    top: "0",
    left: "0",
    right: "0",
    bottom: "0",
  },
  cardImageContainer: {
    margin: theme.spacing(2),
    borderRadius: theme.spacing(2),
    borderBottomLeftRadius: theme.spacing(12),
    overflow: "hidden",
  },
  image: {
    objectFit: "cover",
    height: "100%",
    width: "100%",
  },
  title: { margin: theme.spacing(2) },
}));

export const ListCard = memo(
  ({
    id,
    dogName,
    ownerName,
    pointOfInterest,
    backgroundColor,
    testimonial,
    isSelected,
    history,
  }) => {
    const classes = useStyles();

    const MotionCard = motion.custom(Card);
    const MotionTitle = motion.custom(c.Typography);

    const Image = () => {
      const inverted = useInvertedScale();
      const scaleTranslate = ({ x, y, scaleX, scaleY }) =>
        `scaleX(${scaleX}) scaleY(${scaleY}) translate(${x}, ${y}) translateZ(0)`;

      return (
        <motion.div
          className={classes.cardImageContainer}
          layoutId={`image-container-${id}`}
          transformTemplate={scaleTranslate}
          animate={{ height: "75%" }}
          style={{ ...inverted }}>
          <motion.img
            className={classes.image}
            layoutId={`image-${id}`}
            src={germanShep}
            alt=""
          />
        </motion.div>
      );
    };

    const Title = () => {
      return (
        <MotionTitle
          className={classes.title}
          key="title"
          // layoutId={`title-container-${id}`}
          animate="true">
          ~ {dogName} and {ownerName}
        </MotionTitle>
      );
    };

    return (
      <div className={classes.card}>
        <motion.div
          className={classes.cardContent}
          layoutId={`card-container-${id}`}
          animate={{ y: 0, opacity: isSelected ? 0 : 1 }}>
          <Image />
          <Title />
        </motion.div>
        {!isSelected && (
          <Link to={`/stories/${id}`} className={classes.cardOpenLink} />
        )}
      </div>
    );
  },
  (prev, next) => prev.isSelected === next.isSelected
);
