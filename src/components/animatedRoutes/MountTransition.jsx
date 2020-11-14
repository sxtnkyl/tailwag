import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

///keyframes > scrollToTop > opacity/slide
//useViewportScroll

export const MountTransition = ({
  children,
  scale = 1,
  slide = 0,
  slideUp = 0,
}) => {
  const controls = useAnimation();
  const sequence = async () => {
    await controls.start({ opacity: 1, x: 0, y: 0 });
    return await window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  sequence();

  return (
    <motion.div
      exit={{ opacity: 0, x: slide, y: slideUp }}
      initial={{ opacity: 0, x: slide, y: slideUp }}
      animate={controls}
      transition={{ duration: 0.35 }}>
      {children}
    </motion.div>
  );
};
