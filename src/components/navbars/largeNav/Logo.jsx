import React from "react";

import { makeStyles } from "@material-ui/core";
import theme from "../../../theme/theme";
import * as c from "@material-ui/core";
import useMediaQuery from "@material-ui/core/useMediaQuery";

import { motion } from "framer-motion";
import { ReactComponent as LogoDog } from "../../../utility/icons/svgs/logoDog.svg";

const useStyles = makeStyles((theme) => ({
  container: {
    padding: theme.spacing(1),
  },
  logoLeft: {
    height: "100%",
    width: "100%",
    borderRadius: "50%",
    backgroundColor: theme.palette.secondary.main,
  },
  topText: {
    paddingLeft: "8px",
    [theme.breakpoints.down("lg")]: {
      fontSize: "2.5rem",
    },
    [theme.breakpoints.down("md")]: {
      fontSize: "2rem",
    },
  },
  botText: {
    fontFamily: "Roboto",
    paddingLeft: "8px",
    [theme.breakpoints.down("lg")]: {
      fontSize: "1.6rem",
    },
    [theme.breakpoints.down("md")]: {
      fontSize: "1.1rem",
    },
  },
}));

const Logo = ({
  fontColor = "white",
  logoBorder = "3px solid white",
  justify = "space-evenly",
}) => {
  const classes = useStyles();
  const GridItem = motion.custom(c.Grid);

  const dogSvg = (
    <c.SvgIcon className={classes.logoLeft} style={{ border: logoBorder }}>
      <LogoDog />
    </c.SvgIcon>
  );

  const showLogo = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <GridItem container justify={justify} className={classes.container}>
      {showLogo && (
        <c.Grid item md={3}>
          {dogSvg}
        </c.Grid>
      )}
      <c.Grid
        item
        xs={12}
        md={7}
        lg={9}
        container
        direction="column"
        justify="center"
        style={{
          textAlign: !showLogo && "center",
          paddingBottom: !showLogo && theme.spacing(2),
        }}
      >
        <c.Typography
          variant="h1"
          className={classes.topText}
          style={{ color: fontColor }}
        >
          TAILS WAG
        </c.Typography>
        <c.Typography
          variant="h1"
          className={classes.botText}
          style={{ color: fontColor }}
        >
          DOG TRAINING
        </c.Typography>
      </c.Grid>
    </GridItem>
  );
};

export default Logo;
