//initial render
//services icon line > mission statement

import React from "react";

import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  section: {
    height: "400vh",
  },
}));

const Home = () => {
  const classes = useStyles();
  return <div className={classes.section}>home section</div>;
};

export default Home;
