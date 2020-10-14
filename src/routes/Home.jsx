//services icon line > mission statement
import React from "react";
import { makeStyles } from "@material-ui/core";
import theme from "../theme/theme";
import WaveTopper from "../components/WaveTopper";

const useStyles = makeStyles((theme) => ({
  section: {
    height: "200vh",
  },
}));

const Home = () => {
  const classes = useStyles();

  const missionStatement = "";

  return (
    <div className={classes.section}>
      <WaveTopper opacity="none" layers={1} />
      <div
        style={{ height: "50vh", background: theme.palette.primary.light }}
      />
      {missionStatement}
      <WaveTopper inverted={false} opacity="none" layers={1} />
    </div>
  );
};

export default Home;
