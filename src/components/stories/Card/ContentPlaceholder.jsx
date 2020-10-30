import * as React from "react";
import { motion, useInvertedScale } from "framer-motion";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  contentContainer: {
    padding: theme.spacing(4),
    maxWidth: "700px",
    width: "90vw",
    backgroundColor: "teal",
  },
}));

export const ContentPlaceholder = React.memo(({ testimonial }) => {
  const classes = useStyles();
  const inverted = useInvertedScale();
  return (
    <motion.div className={classes.contentContainer} animate>
      {testimonial}
    </motion.div>
  );
});
