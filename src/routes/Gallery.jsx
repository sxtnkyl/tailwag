//masonry tiles > open to testimonials

import React from "react";

import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  section: {
    height: "100vh",
  },
}));

const Gallery = () => {
  const classes = useStyles();
  return <div className={classes.section}>Gallery section</div>;
};

export default Gallery;
