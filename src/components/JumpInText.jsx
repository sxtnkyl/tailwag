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

  const containerRef = useRef(); //ref onto container
  const inView = useInView(containerRef, triggerPoint);

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
      opacity: 0,
      y: 40,
    },
    end: {
      opacity: 1,
      y: 5,
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
  }, [inView, controls, delay]);

  return (
    <motion.div
      ref={containerRef}
      style={{ display: "flex", justifyContent: "space-around" }}
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
