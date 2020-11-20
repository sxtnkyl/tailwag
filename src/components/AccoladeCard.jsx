import React from "react";
import * as c from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import theme from "../theme/theme";
import icons from "../utility/icons/icons";
import { motion } from "framer-motion";

const useStyles = makeStyles((theme) => ({
  card: {
    filter: theme.palette.shadows.loweredFilterShadow,
    padding: theme.spacing(4),
    borderTopRightRadius: theme.spacing(6),
    borderBottomLeftRadius: theme.spacing(4),
    display: "flex",
    flexDirection: "column",
    overflow: "visible",
    minHeight: "80px",
    [theme.breakpoints.down("md")]: {
      padding: theme.spacing(2),
    },
  },
  infoIcon: {
    position: "absolute",
    bottom: -15,
    right: -15,
    height: "44px",
    width: "44px",
    borderRadius: "50%",
    background: theme.palette.shadows.iconGradient,
    padding: "0px",
    [theme.breakpoints.down("md")]: {
      right: "-5px",
    },
  },
}));

//hover effect: skew opaque cards under card
const AccoladeCard = (props) => {
  const classes = useStyles();
  const { title, text, link } = props.accolade;

  const MotionGrid = motion.custom(c.Grid);
  const MotionCard = motion.custom(c.Card);

  const loadingVariants = {
    start: {
      y: 0,
    },
    end: {
      opacity: 1,
      y: 20,
      transition: {
        type: "spring",
        duration: 1,
      },
    },
  };

  return (
    <MotionGrid
      item
      lg={5}
      md={10}
      style={{ opacity: 0 }}
      variants={loadingVariants}>
      <MotionCard
        className={classes.card}
        whileHover={{
          y: -10,
          filter: theme.palette.shadows.raisedFilterShadow,
        }}>
        <c.Typography variant="h5" style={theme.typography.wordEmphasisBlue}>
          {title}
        </c.Typography>
        <c.Typography variant="body1" style={{ fontFamily: "Open Sans" }}>
          {text}
        </c.Typography>
        <c.IconButton
          aria-label={title}
          className={classes.infoIcon}
          href={link}
          target="_blank"
          rel="noopener noreferrer">
          {icons.checkCircle}
        </c.IconButton>
      </MotionCard>
    </MotionGrid>
  );
};

export default AccoladeCard;
