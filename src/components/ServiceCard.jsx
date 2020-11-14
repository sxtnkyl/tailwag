import React from "react";
import * as c from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import theme from "../theme/theme";
import { motion } from "framer-motion";

const useStyles = makeStyles((theme) => ({
  card: {
    minHeight: "300px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    filter: theme.palette.shadows.loweredFilterShadow,
    borderBottomLeftRadius: theme.spacing(10),
    borderTopRightRadius: theme.spacing(10),
    borderRadius: theme.spacing(2),
    overflow: "visible",
    padding: theme.spacing(4),
    [theme.breakpoints.down("md")]: {
      minHeight: "150px",
      borderBottomLeftRadius: theme.spacing(8),
      borderTopRightRadius: theme.spacing(2),
      margin: `${theme.spacing(4)}px ${theme.spacing(0)}px`,
      padding: `${theme.spacing(4)}px ${theme.spacing(2)}px`,
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
    [theme.breakpoints.down("lg")]: {
      height: "50%",
      width: "50%",
      float: "right",
    },
  },
  chipsContainer: {
    justifyContent: "flex-end",
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
      alignItems: "flex-end",
    },
    "& #chip": {
      margin: theme.spacing(1),
    },
  },
}));

//hover effect: skew opaque cards under card
const ServiceCard = ({ lineObj }) => {
  const classes = useStyles();
  const MotionCard = motion.custom(c.Card);

  return (
    <c.Grid item xs={12} lg={5}>
      <MotionCard
        className={classes.card}
        whileHover={{
          y: -10,
          filter: theme.palette.shadows.raisedFilterShadow,
        }}>
        <c.Grid container>
          <c.Grid
            item
            xs
            container
            direction="column"
            justify="flex-start"
            id="titlePriceDescripContainer">
            <c.Typography variant="h4" id="cardTitle">
              {lineObj.title}
            </c.Typography>
            <c.Typography
              variant="h5"
              style={{
                color: theme.palette.primary.main,
              }}>
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

        <c.CardActions className={classes.chipsContainer}>
          {lineObj.chips.map((chip) => (
            <c.Chip
              id="chip"
              key={chip.title}
              variant="outlined"
              label={chip.title}
              icon={chip.icon}
            />
          ))}
        </c.CardActions>
      </MotionCard>
    </c.Grid>
  );
};

export default ServiceCard;
