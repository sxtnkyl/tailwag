import * as React from "react";
import { memo, useRef } from "react";
import { motion, useMotionValue } from "framer-motion";
import { Link } from "react-router-dom";

import * as c from "@material-ui/core";
import { makeStyles } from "@material-ui/core";

// import { CardData } from "../types";
import { ContentPlaceholder } from "./ContentPlaceholder";
import { Title } from "./Title";
import { Image } from "./Image";
import { openSpring, closeSpring } from "./animations";

import { useInvertedBorderRadius } from "../utils/useInvertedBorderRadius";
import { useScrollConstraints } from "../utils/useScrollConstraints";
import { useWheelScroll } from "../utils/useWheelScroll";

const useStyles = makeStyles((theme) => ({
  section: {
    minHeight: "100vh",
  },
  card: {
    position: "relative",
    padding: "25px",
    height: "460px",
    flex: "0 0 40%",
    maxWidth: "40%",
  },
  cardContent: {
    pointerEvents: "auto",
    position: "relative",
    borderRadius: "20px",
    background: "#1c1c1e",
    overflow: "hidden",
    width: "100%",
    height: "100%",
    margin: "0 auto",
  },
  cardContentContainer: {
    width: "100%",
    height: "100%",
    position: "relative",
    display: "block",
    pointerEvents: "none",
  },
  cardContentContainerOpen: {
    top: "0",
    left: "0",
    right: "0",
    position: "fixed",
    zIndex: "1",
    overflow: "hidden",
    padding: "40px 0",
  },
  cardOpenLink: {
    position: "absolute",
    top: "0",
    left: "0",
    right: "0",
    bottom: "0",
  },
}));

// Distance in pixels a user has to scroll a card down before we recognise
// a swipe-to dismiss action.
const dismissDistance = 150;

export const Card = memo(
  ({
    isSelected,
    id,
    title,
    category,
    history,
    match,
    pointOfInterest,
    backgroundColor,
  }) => {
    const classes = useStyles();
    const y = useMotionValue(0);
    const zIndex = useMotionValue(isSelected ? 2 : 0);

    // Maintain the visual border radius when we perform the layoutTransition by inverting its scaleX/Y
    const inverted = useInvertedBorderRadius(20);

    // We'll use the opened card element to calculate the scroll constraints
    const cardRef = useRef(null);
    const constraints = useScrollConstraints(cardRef, isSelected);

    function checkSwipeToDismiss() {
      y.get() > dismissDistance && history.push("/");
    }

    function checkZIndex(latest) {
      if (isSelected) {
        zIndex.set(2);
      } else if (!isSelected && latest.scaleX < 1.01) {
        zIndex.set(0);
      }
    }

    // When this card is selected, attach a wheel event listener
    const containerRef = useRef(null);
    useWheelScroll(
      containerRef,
      y,
      constraints,
      checkSwipeToDismiss,
      isSelected
    );

    return (
      <c.Grid item ref={containerRef} className={classes.card}>
        <c.Card
          className={
            isSelected
              ? classes.cardContentContainerOpen
              : classes.cardContentContainer
          }>
          <motion.div
            ref={cardRef}
            className={classes.cardContent}
            style={{ ...inverted, zIndex, y }}
            layoutTransition={isSelected ? openSpring : closeSpring}
            drag={isSelected ? "y" : false}
            dragConstraints={constraints}
            onDrag={checkSwipeToDismiss}
            onUpdate={checkZIndex}>
            <Image
              id={id}
              isSelected={isSelected}
              pointOfInterest={pointOfInterest}
              backgroundColor={backgroundColor}
            />
            <Title title={title} category={category} isSelected={isSelected} />
            <ContentPlaceholder />
          </motion.div>
        </c.Card>

        <Link
          to={!isSelected && `${match.url}/${id}`}
          className={classes.cardOpenLink}
        />
      </c.Grid>
    );
  },
  (prev, next) => prev.isSelected === next.isSelected
);
