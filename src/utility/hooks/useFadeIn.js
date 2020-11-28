import React, { useRef } from "react";
import { motion } from "framer-motion";
import useInView from "../hooks/useInView";

const FadeIn = ({
  children,
  triggerPoint = 0.25,
  opacity = 0,
  scale = 1,
  slide = 0,
  slideUp = 0,
  delay = 0.5,
}) => {
  const ref = useRef();
  const inView = useInView(ref, triggerPoint);

  const variants = {
    hidden: {
      x: slide,
      y: slideUp,
      scale: scale,
      opacity: opacity,
    },
    show: {
      x: 0,
      y: 0,
      scale: 1,
      opacity: 1,
    },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "show" : "hidden"}
      exit="hidden"
      transition={{ delay: delay }}
      variants={variants}
    >
      {children}
    </motion.div>
  );
};

export default FadeIn;
