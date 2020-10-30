import React from "react";
import { makeStyles } from "@material-ui/core";
import * as c from "@material-ui/core";
import { ReactComponent as Paw } from "../utility/icons/svgs/pawpaw.svg";
import WaveTopper from "../components/WaveTopper";
import useFade from "../utility/hooks/useFade";

const useStyles = makeStyles((theme) => ({
  container: {
    height: "30vh",
    position: "relative",
    bottom: 0,
    background: theme.palette.primary.light,
  },
  title: {
    position: "absolute",
    top: 0,
    left: 0,
    height: "100%",
    width: "100%",
    zIndex: 10,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  pawLeft: {
    transform: "scale(0.5) rotate(-30deg)",
    filter: `drop-shadow(2px 2px 4px ${useFade(
      theme.palette.primary.dark,
      0.8
    )})`,
  },
  pawRight: {
    transform: "scale(0.5) rotate(30deg)",
    filter: `drop-shadow(2px 2px 4px ${useFade(
      theme.palette.primary.dark,
      0.8
    )})`,
  },
}));

const PageTitle = ({ location }) => {
  const classes = useStyles();

  const currentPageTitle = location.pathname.includes("stories")
    ? "STORIES"
    : location.pathname.substring(1, location.pathname.length).toUpperCase();

  const title = (
    <div className={classes.title}>
      <c.Button disabled startIcon={<Paw />} className={classes.pawLeft} />
      <c.Typography variant="h1">
        {currentPageTitle.length > 0 ? currentPageTitle : "WELCOME"}
      </c.Typography>
      <c.Button disabled startIcon={<Paw />} className={classes.pawRight} />
    </div>
  );

  return (
    <div className={classes.container}>
      <WaveTopper layers={1} inverted={false} />
      {title}
      <WaveTopper position="absolute" layers={1} />
    </div>
  );
};

export default PageTitle;
