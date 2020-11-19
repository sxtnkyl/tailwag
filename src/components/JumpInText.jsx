import React, { useEffect, useRef } from "react";
import * as c from "@material-ui/core";
import { motion, useAnimation } from "framer-motion";
import useInView from "../utility/hooks/useInView";

const FadeIn = ({
  textString,
  typography = "body1",
  triggerPoint = 0.75,
  delay = 0,
  childrenDelay = 0.3,
}) => {
  const stringArr = textString.split(/(\s+)/);
  const MotionLetter = motion.custom(c.Typography);
  //ref onto container
  const containerRef = useRef();
  const inView = useInView(containerRef, triggerPoint);

  const loadingContainer = {
    display: "flex",
    justifyContent: "space-around",
  };

  const loadingContainerVariants = {
    start: {
      transition: {
        staggerChildren: childrenDelay,
      },
    },
    end: {
      transition: {
        staggerChildren: childrenDelay,
      },
    },
  };

  const loadingCircleVariants = {
    start: {
      y: 0,
    },
    end: {
      opacity: 1,
      y: 20,
      transition: {
        type: "spring",
        duration: 1,
      },
    },
  };

  const controls = useAnimation();
  useEffect(() => {
    inView === true &&
      setTimeout(() => {
        controls.start("end");
      }, delay);
  }, [inView]);

  return (
    <motion.div
      ref={containerRef}
      style={loadingContainer}
      variants={loadingContainerVariants}
      initial="start"
      animate={controls}>
      {stringArr.map((letter, index) => (
        <MotionLetter
          style={{ opacity: 0, paddingRight: "8px" }}
          variant={typography}
          variants={loadingCircleVariants}
          key={index}>
          {letter}
        </MotionLetter>
      ))}
    </motion.div>
  );
};

export default FadeIn;
