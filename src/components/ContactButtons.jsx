import React from "react";
import { makeStyles } from "@material-ui/core";
import * as c from "@material-ui/core";
import theme from "../theme/theme";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

//stroke, background, hover bool

const useStyles = makeStyles((theme) => ({
  svgContainer: {
    height: "5vh",
    width: "5vh",
    cursor: "pointer",
    [theme.breakpoints.down("md")]: {
      margin: "0px",
    },
  },
  svg: {
    height: "100%",
    width: "100%",
    borderRadius: theme.spacing(1),
  },
}));

export const EmailButton = ({
  stroke = "white",
  background = "none",
  hover = true,
}) => {
  const classes = useStyles();
  const MotionItem = motion.custom(c.Grid);
  return (
    <MotionItem
      item
      className={classes.svgContainer}
      whileHover={
        hover && {
          y: -5,
          filter: theme.palette.shadows.raisedFilterShadow,
        }
      }
    >
      <Link
        to="/contact"
        alt="conatct-page link"
        aria-label="contact-page link"
      >
        <c.SvgIcon
          className={classes.svg}
          style={{ background: background }}
          component={"div"}
          titleAccess="contact link"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-mail"
            width="100%"
            height="100%"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke={stroke}
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <rect x="3" y="5" width="18" height="14" rx="2" />
            <polyline points="3 7 12 13 21 7" />
          </svg>
        </c.SvgIcon>
      </Link>
    </MotionItem>
  );
};

export const PhoneButton = ({
  stroke = "white",
  background = "none",
  hover = true,
}) => {
  const classes = useStyles();
  const MotionItem = motion.custom(c.Grid);
  return (
    <MotionItem
      item
      className={classes.svgContainer}
      whileHover={
        hover && {
          y: -5,
          filter: theme.palette.shadows.raisedFilterShadow,
        }
      }
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
          style={{ background: background }}
          component={"div"}
          titleAccess="phone link"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-phone-call"
            width="100%"
            height="100%"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke={stroke}
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" />
            <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" />
            <path d="M15 7a2 2 0 0 1 2 2" />
            <path d="M15 3a6 6 0 0 1 6 6" />
          </svg>
        </c.SvgIcon>
      </c.Link>
    </MotionItem>
  );
};

export const FacebookButton = ({
  stroke = "white",
  background = "none",
  hover = true,
}) => {
  const classes = useStyles();
  const MotionItem = motion.custom(c.Grid);
  return (
    <MotionItem
      item
      className={classes.svgContainer}
      whileHover={
        hover && {
          y: -5,
          filter: theme.palette.shadows.raisedFilterShadow,
        }
      }
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
          style={{ background: background }}
          component={"div"}
          titleAccess="facebook link"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-brand-facebook"
            width="100%"
            height="100%"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke={stroke}
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" />
            <path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3" />
          </svg>
        </c.SvgIcon>
      </c.Link>
    </MotionItem>
  );
};

export const InstaButton = ({
  stroke = "white",
  background = "none",
  hover = true,
}) => {
  const classes = useStyles();
  const MotionItem = motion.custom(c.Grid);
  return (
    <MotionItem
      item
      className={classes.svgContainer}
      whileHover={
        hover && {
          y: -5,
          filter: theme.palette.shadows.raisedFilterShadow,
        }
      }
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
          style={{ background: background }}
          component={"div"}
          titleAccess="instagram link"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-brand-instagram"
            width="100%"
            height="100%"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke={stroke}
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" />
            <rect x="4" y="4" width="16" height="16" rx="4" />
            <circle cx="12" cy="12" r="3" />
            <line x1="16.5" y1="7.5" x2="16.5" y2="7.501" />
          </svg>
        </c.SvgIcon>
      </c.Link>
    </MotionItem>
  );
};
