import React from "react";
import TempImg from "../images/About.jpg";
import { makeStyles } from "@material-ui/core";
import useFade from "../utility/hooks/useFade";

const useStyles = makeStyles((theme) => ({
  image: {
    height: "40vh",
    background: `url(${TempImg}) no-repeat center center`,
    backgroundSize: "cover",
    WebkitBackgroundSize: "cover",
    MozBackgroundSize: "cover",
    OBackgroundSize: "cover",
    borderBottomLeftRadius: "50% 20%",
    borderBottomRightRadius: "50% 20%",
  },
  banner: {
    height: "100%",
    width: "100%",
    backgroundColor: useFade(theme.palette.primary.main, 0),
    borderBottomLeftRadius: "50% 20%",
    borderBottomRightRadius: "50% 20%",
    boxShadow: `0px 2px 4px 4px ${useFade(theme.palette.primary.dark, 0.5)}`,
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
