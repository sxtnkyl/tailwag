//brand experience > trainer CV

import React from "react";

import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  section: {
    minHeight: "100vh",
  },
}));

const About = () => {
  const classes = useStyles();
  return <div className={classes.section}>About section</div>;
};

export default About;
