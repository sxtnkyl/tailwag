//service cards > inquiry(link to contact)

import React from "react";

import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  section: {
    height: "100vh",
  },
}));

const Services = () => {
  const classes = useStyles();
  return <div className={classes.section}>Services section</div>;
};

export default Services;
