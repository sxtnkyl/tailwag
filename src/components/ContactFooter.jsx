import React from "react";
import { makeStyles } from "@material-ui/core";
import useFade from "../utility/hooks/useFade";
import * as c from "@material-ui/core";
import theme from "../theme/theme";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import WaveTopper from "./WaveTopper";
import icons from "../utility/icons/icons";

const useStyles = makeStyles((theme) => ({
  footer: {
    height: "30vh",
    position: "relative",
    bottom: 0,
    boxShadow: `0px -1px 4px 4px ${useFade(theme.palette.primary.dark, 0.2)}`,
    [theme.breakpoints.down("md")]: {
      height: "25vh",
    },
  },
  infoContainer: {
    position: "absolute",
    top: 0,
    left: 0,
    height: "100%",
    width: "100%",
    padding: `${theme.spacing(2)}px ${theme.spacing(8)}px`,
    [theme.breakpoints.down("md")]: {
      padding: `${theme.spacing(2)}px ${theme.spacing(2)}px`,
    },
  },
  svgContainer: {
    height: "44px",
    width: "44px",
    margin: "22px",
    cursor: "pointer",
    [theme.breakpoints.down("md")]: {
      margin: "0px",
    },
  },
  svg: {
    height: "100%",
    width: "100%",
    background: theme.palette.primary.light,
    filter: theme.palette.shadows.pawShadow,
    borderRadius: theme.spacing(1),
  },
  divider: {
    height: "3px",
    backgroundColor: "black",
    [theme.breakpoints.down("md")]: {
      height: "0px",
    },
  },
}));

const Navbar = () => {
  const classes = useStyles();
  const MotionItem = motion.custom(c.Grid);

  const contactUs = (
    <c.Grid item style={{ textAlign: "center" }}>
      <c.Typography variant="h4">CONTACT US</c.Typography>
      <c.Divider className={classes.divider} />
      <c.Grid container justify="space-around">
        <MotionItem
          item
          className={classes.svgContainer}
          whileHover={{
            y: -5,
            filter: theme.palette.shadows.raisedFilterShadow,
          }}
        >
          <Link
            to="/contact"
            alt="conatct-page link"
            aria-label="contact-page link"
          >
            <c.SvgIcon
              className={classes.svg}
              viewBox="0 0 44 44"
              titleAccess="contact link"
            >
              {icons.email}
            </c.SvgIcon>
          </Link>
        </MotionItem>
        <MotionItem
          item
          className={classes.svgContainer}
          whileHover={{
            y: -5,
            filter: theme.palette.shadows.raisedFilterShadow,
          }}
        >
          <c.Link
            href="tel:+1-404-272-0985"
            target="_blank"
            rel="noopener noreferrer"
            alt="link to phone call"
            aria-label="phone link"
          >
            <c.SvgIcon
              className={classes.svg}
              viewBox="0 0 44 44"
              titleAccess="phone link"
            >
              {icons.phone}
            </c.SvgIcon>
          </c.Link>
        </MotionItem>
      </c.Grid>
    </c.Grid>
  );

  const followUs = (
    <c.Grid item style={{ textAlign: "center" }}>
      <c.Typography variant="h4">FOLLOW US</c.Typography>
      <c.Divider className={classes.divider} />
      <c.Grid container justify="space-around">
        <MotionItem
          item
          className={classes.svgContainer}
          whileHover={{
            y: -5,
            filter: theme.palette.shadows.raisedFilterShadow,
          }}
        >
          <c.Link
            href="https://www.facebook.com/TailsWagDogTraining/"
            target="_blank"
            rel="noopener noreferrer"
            alt="facebook link"
            aria-label="facebook link"
          >
            <c.SvgIcon
              className={classes.svg}
              viewBox="0 0 44 44"
              titleAccess="facebook link"
            >
              {icons.facebook}
            </c.SvgIcon>
          </c.Link>
        </MotionItem>
        <MotionItem
          item
          className={classes.svgContainer}
          whileHover={{
            y: -5,
            filter: theme.palette.shadows.raisedFilterShadow,
          }}
        >
          <c.Link
            href="https://www.instagram.com/tailswagdogtraining/"
            target="_blank"
            rel="noopener noreferrer"
            alt="instagram link"
            aria-label="instagram link"
          >
            <c.SvgIcon
              className={classes.svg}
              viewBox="0 0 44 44"
              titleAccess="instagram link"
            >
              {icons.instagram}
            </c.SvgIcon>
          </c.Link>
        </MotionItem>
      </c.Grid>
    </c.Grid>
  );

  return (
    <div className={classes.footer}>
      <WaveTopper position="absolute" />
      <c.Grid
        className={classes.infoContainer}
        container
        direction="row"
        justify="space-between"
      >
        {contactUs}
        {followUs}
      </c.Grid>
    </div>
  );
};

export default Navbar;
