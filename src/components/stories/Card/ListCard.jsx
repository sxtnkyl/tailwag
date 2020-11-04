import React, { memo, useRef } from "react";
import { motion, useMotionValue } from "framer-motion";
import { Link } from "react-router-dom";

import * as c from "@material-ui/core";
import { makeStyles, Card, Backdrop } from "@material-ui/core";

import { ContentPlaceholder } from "./ContentPlaceholder";
import { Title } from "./Title";
import { Image } from "./Image";

import { openSpring, closeSpring } from "../../../utility/animations";

const useStyles = makeStyles((theme) => ({
  card: {
    border: "1px solid red",
    position: "relative",
    height: theme.spacing(50),
    padding: "20px",
    flex: "0 0 40%",
    maxWidth: "40%",
    // "&:nth-child((NUMofCARDS)n + (cardPosition))
    //30 30 40, 40 20 40, 40 30 30
    "&:nth-child(9n + 1), &:nth-child(9n + 2), &:nth-child(9n + 8), &:nth-child(9n + 9)": {
      flex: "0 0 30%",
      maxWidth: "30%",
    },
    "&:nth-child(9n + 5)": {
      flex: "0 0 20%",
      maxWidth: "20%",
    },
  },
  cardContent: {
    width: "100%",
    height: "100%",
    margin: "0 auto",
    borderRadius: theme.spacing(4),
    border: "1px solid yellow",
    backgroundColor: "pink",
  },
  cardOpenLink: {
    position: "absolute",
    top: "0",
    left: "0",
    right: "0",
    bottom: "0",
  },
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
    const MotionBackdrop = motion.custom(Backdrop);

    return (
      <div className={classes.card}>
        <MotionCard
          className={classes.cardContent}
          layoutId={`card-container-${id}`}
          animate={{ opacity: isSelected ? 0 : 1, y: !isSelected && 0 }}
          transition={isSelected ? openSpring : closeSpring}>
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
        </MotionCard>
        {!isSelected && (
          <Link to={`/stories/${id}`} className={classes.cardOpenLink} />
        )}
      </div>
    );
  },
  (prev, next) => prev.isSelected === next.isSelected
);
