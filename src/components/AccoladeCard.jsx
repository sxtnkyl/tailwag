import React from "react";
import * as c from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import theme from "../theme/theme";
import useFade from "../utility/hooks/useFade";
import icons from "../utility/icons/icons";

const useStyles = makeStyles((theme) => ({
  card: {
    filter: `drop-shadow(2px 2px 4px ${useFade(
      theme.palette.primary.dark,
      0.8
    )})`,
    padding: theme.spacing(2),
    borderTopRightRadius: theme.spacing(6),
    borderBottomLeftRadius: theme.spacing(4),
    display: "flex",
    flexDirection: "column",
    overflow: "visible",
    minHeight: "80px"
  },
  infoIcon: {
    position: "absolute",
    bottom: -15,
    right: -15,
    height: "44px",
    width: "44px",
    borderRadius: "50%",
    background:
      "linear-gradient(330deg, rgba(179, 229, 252, 1) 0%, rgba(33, 150, 243, 1) 100%)",
    padding: "0px",
  },
}));

//hover effect: skew opaque cards under card
const AccoladeCard = (props) => {
  const classes = useStyles();
  const { title, text, link } = props.accolade;

  return (
    <c.Grid item xs={5}>
      <c.Card className={classes.card}>
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
          rel="noopener noreferrer"
        >
          {icons.checkCircle}
        </c.IconButton>
      </c.Card>
    </c.Grid>
  );
};

export default AccoladeCard;
