import React from "react";
import TempImg from "../images/ollieSnoot.jpg";
import { makeStyles } from "@material-ui/core";
import useFade from "../utility/hooks/useFade";

const useStyles = makeStyles((theme) => ({
  image: {
    height: "30vh",
    background: `url(${TempImg}) no-repeat center center`,
    // backgroundSize: "cover",
    WebkitBackgroundSize: "cover",
    // MozBackgroundSize: "cover",
    // OBackgroundSize: "cover",
    borderBottomLeftRadius: "50% 20%",
    borderBottomRightRadius: "50% 20%",
  },
  banner: {
    height: "100%",
    width: "100%",
    borderBottomLeftRadius: "50% 20%",
    borderBottomRightRadius: "50% 20%",
    boxShadow: theme.palette.shadows.bottomShadow,
  },
}));

const Banner = () => {
  const classes = useStyles();
  return (
    <div className={classes.image}>
      <div className={classes.banner} />
    </div>
  );
};

export default Banner;
