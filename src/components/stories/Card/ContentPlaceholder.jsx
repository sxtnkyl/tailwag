import * as React from "react";
import { motion, useInvertedScale } from "framer-motion";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  contentContainer: {
    padding: "460px 35px 35px 35px",
    maxWidth: "700px",
    width: "90vw",
  },
}));

export const ContentPlaceholder = React.memo(() => {
  const classes = useStyles();
  const inverted = useInvertedScale();
  return (
    <motion.div
      className={classes.contentContainer}
      style={{ ...inverted, originY: 0, originX: 0 }}>
      placeholder placeholder placeholder placeholder placeholder placeholder
      placeholderplaceholder placeholder placeholder placeholder placeholder
    </motion.div>
  );
});
