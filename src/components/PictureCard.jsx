import React from "react";
import * as c from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import useFade from "../utility/hooks/useFade";

const useStyles = makeStyles((theme) => ({
  conatiner: {},
  card: {
    width: "auto",
    height: "80vh",
    background:
      "linear-gradient(130deg, rgba(179, 229, 252, 1) 0%, rgba(33, 150, 243, 0.75) 100%)",
    filter: theme.palette.shadows.raisedFilterShadow,
    borderBottomLeftRadius: theme.spacing(16),
    borderTopRightRadius: theme.spacing(16),
    borderRadius: theme.spacing(2),
    [theme.breakpoints.down("md")]: {
      height: "50%",
      borderBottomLeftRadius: theme.spacing(8),
      borderTopRightRadius: theme.spacing(2),
    },
  },
  media: {
    height: "75%",
    margin: theme.spacing(2),
    borderRadius: theme.spacing(2),
    borderBottomLeftRadius: theme.spacing(16),
    [theme.breakpoints.down("md")]: {
      borderBottomLeftRadius: theme.spacing(8),
    },
  },
  content: {
    height: "auto",
    alignItems: "flex-end",
    paddingRight: theme.spacing(4),
    [theme.breakpoints.down("md")]: {
      paddingRight: theme.spacing(2),
      paddingTop: theme.spacing(0),
    },
  },
}));

//hover effect: skew opaque cards under card
const PictureCard = ({
  pic,
  title = "Title Placeholder",
  caption = "caption placeholder",
}) => {
  const classes = useStyles();

  return (
    <c.Grid item xs container justify="center" alignItems="center">
      <c.Card className={classes.card}>
        <c.CardMedia className={classes.media} component="img" image={pic} />
        <c.CardContent className={classes.content}>
          <c.Typography variant="h4">{title}</c.Typography>
          <c.Typography variant="h5">{caption}</c.Typography>
        </c.CardContent>
      </c.Card>
    </c.Grid>
  );
};

export default PictureCard;
