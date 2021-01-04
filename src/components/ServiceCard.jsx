import React from "react";
import * as c from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import theme from "../theme/theme";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  card: {
    minHeight: "50vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    filter: theme.palette.shadows.loweredFilterShadow,
    borderBottomLeftRadius: theme.spacing(10),
    borderTopRightRadius: theme.spacing(10),
    borderRadius: theme.spacing(2),
    overflow: "visible",
    padding: theme.spacing(4),
    [theme.breakpoints.down("sm")]: {
      minHeight: "150px",
      borderBottomLeftRadius: theme.spacing(8),
      borderTopRightRadius: theme.spacing(2),
      padding: theme.spacing(2),
    },
    "& #titlePriceDescripContainer": {
      paddingRight: theme.spacing(2),
      [theme.breakpoints.down("md")]: {
        justifyContent: "center",
        paddingRight: theme.spacing(0),
      },
    },
    "& #cardTitle": {
      fontSize: "2rem",
      fontWeight: 700,
      paddingBottom: theme.spacing(2),
    },
    "& #serviceDescrip": {
      [theme.breakpoints.down("md")]: {
        fontSize: "0.9rem",
      },
    },
    "& #svgGridItem": {
      [theme.breakpoints.down("sm")]: {
        flexBasis: "0%",
      },
    },
  },
  iconContainer: {
    height: "100%",
    width: "100%",
    [theme.breakpoints.down("md")]: {
      height: "50%",
      width: "50%",
      float: "right",
    },
  },
  chipsContainer: {
    justifyContent: "flex-end",
    padding: "0px",
    paddingTop: theme.spacing(2),
    "& a": {
      margin: theme.spacing(1),
      [theme.breakpoints.down("md")]: {
        marginRight: "0px",
      },
    },
  },
}));

const ServiceCard = ({ lineObj }) => {
  const classes = useStyles();
  const MotionCard = motion.custom(c.Card);
  const chipRow = useMediaQuery("@media (min-width:700px)");

  return (
    <c.Grid item xs={12} lg={6}>
      <MotionCard
        className={classes.card}
        whileHover={{
          y: -10,
          filter: theme.palette.shadows.raisedFilterShadow,
        }}
      >
        <c.Grid container>
          <c.Grid
            item
            xs
            container
            direction="column"
            justify="flex-start"
            id="titlePriceDescripContainer"
          >
            <c.Typography variant="h4" id="cardTitle">
              {lineObj.title}
            </c.Typography>
            <c.Typography
              variant="h5"
              style={{
                color: theme.palette.primary.main,
              }}
            >
              {lineObj.rate} / {lineObj.interval}
            </c.Typography>
            <c.Typography variant="subtitle1" id="serviceDescrip">
              {lineObj.description}
            </c.Typography>
          </c.Grid>

          <c.Grid item xs={3} id="svgGridItem">
            <c.SvgIcon viewBox="0 0 44 44" className={classes.iconContainer}>
              {lineObj.icon}
            </c.SvgIcon>
          </c.Grid>
        </c.Grid>

        <c.CardActions
          className={classes.chipsContainer}
          style={{
            flexDirection: !chipRow && "column",
            alignItems: !chipRow && "flex-end",
          }}
        >
          {lineObj.chips.map((chip) => (
            <c.Chip
              id={`${lineObj.title}/${chip.title}`}
              key={chip.title}
              variant="outlined"
              label={chip.title}
              icon={chip.icon}
              clickable={
                chip.title === "free phone consultation" ? true : false
              }
              component={Link}
              to="/contact"
            />
          ))}
        </c.CardActions>
      </MotionCard>
    </c.Grid>
  );
};

export default ServiceCard;
