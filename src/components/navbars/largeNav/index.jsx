import React from "react";
import Logo from "./Logo";
import Navbar from "./Navbar";
import PageTitle from "./PageTitle";
import Banner from "../Banner";
import WaveTopper from "../../../components/WaveTopper";
import * as c from "@material-ui/core";
import theme from "../../../theme/theme";
import { makeStyles } from "@material-ui/core";
import { useLocation } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  container: {
    height: "100vh",
    background: "white",
  },
  navContainer: {
    background: theme.palette.primary.main,
    height: "20%",
  },
  pawRight: {
    transform: "scale(0.5) rotate(30deg)",
    filter: theme.palette.shadows.pawShadow,
    fontSize: "20rem",
  },
  welcomeText: {
    height: "30%",
    textAlign: "center",
    padding: `${theme.spacing(0)}px ${theme.spacing(8)}px`,
  },
}));

const LargeNav = () => {
  const classes = useStyles();
  const location = useLocation();

  return (
    <c.Grid container direction="column" className={classes.container}>
      <c.Grid
        item
        container
        justify="space-between"
        className={classes.navContainer}
      >
        <c.Grid item md={3}>
          <Logo justify={"flex-start"} />
        </c.Grid>

        <c.Grid item md={6} container alignContent="flex-start">
          <Navbar />
        </c.Grid>

        <c.Grid
          item
          md={3}
          container
          direction="column"
          alignItems="flex-end"
          style={{ padding: theme.spacing(1) }}
        >
          <PageTitle location={location} />
        </c.Grid>
      </c.Grid>

      <WaveTopper layers={3} inverted={false} />

      <c.Grid
        item
        className={classes.welcomeText}
        container
        alignContent="center"
      >
        <c.Typography variant="h3" style={theme.typography.wordEmphasisBlack}>
          Welcome to{" "}
          <span style={theme.typography.wordEmphasisBlue}>
            Tails Wag Dog Training
          </span>
          , your source for effective, motivational dog training services!
        </c.Typography>
      </c.Grid>

      <Banner location={location} />
    </c.Grid>
  );
};

export default LargeNav;
