import React from "react";
import * as c from "@material-ui/core";
import theme from "../theme/theme";
import icons from "../utility/icons/icons";
import { motion } from "framer-motion";

const useStyles = c.makeStyles((theme) => ({
  card: {
    position: "relative",
    filter: theme.palette.shadows.loweredFilterShadow,
    padding: theme.spacing(4),
    borderTopRightRadius: theme.spacing(6),
    borderBottomLeftRadius: theme.spacing(4),
    display: "flex",
    flexDirection: "column",
    overflow: "visible",
    minHeight: "80px",
    width: "100%",
    [theme.breakpoints.down("md")]: {
      padding: theme.spacing(2),
    },
  },
  infoIcon: {
    position: "absolute",
    bottom: 0,
    right: 0,
    height: "44px",
    width: "44px",
    borderRadius: "50%",
    padding: "0px",
    [theme.breakpoints.down("md")]: {
      right: "-5px",
    },
  },
}));

const AccoladeCard = (props) => {
  const classes = useStyles();
  const { title, text, link, date } = props.accolade;

  const MotionGrid = motion.custom(c.Grid);
  const MotionCard = motion.custom(c.Card);
  const MotionIcon = motion.custom(c.IconButton);

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
      lg={6}
      sm={10}
      xs={12}
      style={{ opacity: 0 }}
      variants={loadingVariants}>
      <MotionCard
        className={classes.card}
        whileHover={{
          filter: theme.palette.shadows.raisedFilterShadow,
        }}>
        <c.Typography variant="h5" style={theme.typography.wordEmphasisBlue}>
          {title}
        </c.Typography>
        <c.Typography
          variant="body1"
          style={{
            fontFamily: "Open Sans",
            fontWeight: 700,
            paddingBottom: theme.spacing(1),
          }}>
          {text}
        </c.Typography>
        <c.Typography variant="body1" style={{ fontFamily: "Open Sans" }}>
          {date}
        </c.Typography>
        <MotionIcon
          aria-label={title}
          className={classes.infoIcon}
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{
            y: -5,
          }}>
          {icons.infoCircle}
        </MotionIcon>
      </MotionCard>
    </MotionGrid>
  );
};

export default AccoladeCard;
