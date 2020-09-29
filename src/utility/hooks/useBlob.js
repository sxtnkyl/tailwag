import React from "react";
import { makeStyles } from "@material-ui/core";
import useFade from "./useFade";
import { motion } from "framer-motion";

const useStyles = makeStyles((theme) => ({
  svg: {
    gridArea: "1/1",
    zIndex: 1,
    filter: `drop-shadow(2px 2px 4px ${useFade(
      theme.palette.primary.dark,
      0.8
    )})`,
  },
}));

const useBlob = (fill, opacity = 1, pathObj, scale = 1) => {
  const { viewBox, d } = pathObj;
  const classes = useStyles();
  const transformValue = `translate(100 100), scale(${scale})`;

  return (
    <svg
      className={classes.svg}
      xmlns="http://www.w3.org/2000/svg"
      viewBox={viewBox}
      preserveAspectRatio="none"
      height="100%"
      width="100%"
    >
      <motion.path
        fill={fill}
        fillOpacity={opacity}
        d={d}
        transform={transformValue}
      ></motion.path>
    </svg>
  );
};

export default useBlob;
