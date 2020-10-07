import React from "react";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  patternsContent: {
    height: "-webkit-fill-available",
  },
});

const useWavePath = (opacity, pathObj) => {
  const { viewBox, d } = pathObj;
  const classes = useStyles();
  return (
    <svg
      className={classes.patternsContent}
      xmlns="http://www.w3.org/2000/svg"
      viewBox={viewBox}
      width="100%"
      preserveAspectRatio="none"
    >
      <path fill={fill} fillOpacity={opacity} d={d}></path>
    </svg>
  );
};

export default useWavePath;
