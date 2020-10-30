import React from "react";
import { motion } from "framer-motion";

export const MountTransition = ({
  children,
  scale = 1,
  slide = 0,
  slideUp = 0,
}) => (
  <motion.div
    exit={{ opacity: 0, x: slide, y: slideUp }}
    initial={{ opacity: 0, x: slide, y: slideUp }}
    animate={{ opacity: 1, x: 0, y: 0 }}
    transition={{ duration: 0.35 }}>
    {children}
  </motion.div>
);
