import React, { useEffect, useRef } from "react";
import * as c from "@material-ui/core";
import { motion, useAnimation } from "framer-motion";
import useInView from "./useInView";

const StaggerContainer = ({
  children,
  styles,
  spacing = 1,
  triggerPoint = 0.75,
  delay = 0,
  childrenDelay = 0.3,
}) => {
  //ref onto container
  const MotionGrid = motion.custom(c.Grid);
  const containerRef = useRef();
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

  const controls = useAnimation();
  useEffect(() => {
    inView === true &&
      setTimeout(() => {
        controls.start("end");
      }, delay);
  }, [inView]);

  return (
    <MotionGrid
      container
      spacing={spacing}
      ref={containerRef}
      style={styles}
      variants={loadingContainerVariants}
      initial="start"
      animate={controls}
    >
      {children}
    </MotionGrid>
  );
};

export default StaggerContainer;
