import React from "react";
import * as c from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import theme from "../theme/theme";
import icons from "../utility/icons/icons";
import { motion } from "framer-motion";

const useStyles = makeStyles((theme) => ({
  card: {
    filter: theme.palette.shadows.loweredFilterShadow,
    padding: theme.spacing(2),
    borderTopRightRadius: theme.spacing(6),
    borderBottomLeftRadius: theme.spacing(4),
    display: "flex",
    flexDirection: "column",
    overflow: "visible",
    minHeight: "80px",
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
  },
}));

//hover effect: skew opaque cards under card
const AccoladeCard = (props) => {
  const classes = useStyles();
  const { title, text, link } = props.accolade;

  const MotionCard = motion.custom(c.Card);

  return (
    <c.Grid item xs={5}>
      <MotionCard
        className={classes.card}
        whileHover={{
          y: -10,
          filter: theme.palette.shadows.raisedFilterShadow,
        }}>
        <c.Typography variant="body1" style={theme.typography.wordEmphasisBlue}>
          {title}
        </c.Typography>
        <c.Typography variant="body2" style={{ fontFamily: "Open Sans" }}>
          {text}
        </c.Typography>
        <c.IconButton
          className={classes.infoIcon}
          href={link}
          target="_blank"
          rel="noopener noreferrer">
          {icons.checkCircle}
        </c.IconButton>
      </MotionCard>
    </c.Grid>
  );
};

export default AccoladeCard;
