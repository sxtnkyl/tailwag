import React from "react";
import * as c from "@material-ui/core";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  card: {
    width: "100%",
    height: "80vh",
    background:
      "linear-gradient(130deg, rgba(179, 229, 252, 1) 0%, rgba(33, 150, 243, 0.75) 100%)",
    filter: theme.palette.shadows.raisedFilterShadow,
    borderBottomLeftRadius: theme.spacing(16),
    borderTopRightRadius: theme.spacing(16),
    borderRadius: theme.spacing(2),
    [theme.breakpoints.down("md")]: {
      borderBottomLeftRadius: theme.spacing(8),
      borderTopRightRadius: theme.spacing(2),
    },
    [theme.breakpoints.down("xs")]: {
      height: "60vh",
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
    [theme.breakpoints.down("sm")]: {
      paddingRight: theme.spacing(2),
      paddingTop: theme.spacing(0),
    },
  },
}));

const PictureCard = ({
  pic,
  title = "Title Placeholder",
  caption = "caption placeholder",
}) => {
  const classes = useStyles();

  return (
    <c.Card className={classes.card}>
      <c.CardMedia
        className={classes.media}
        component="img"
        alt="picture-card"
        image={pic}
      />
      <c.CardContent className={classes.content}>
        <c.Typography variant="h4">{title}</c.Typography>
        <c.Typography variant="h5">{caption}</c.Typography>
      </c.CardContent>
    </c.Card>
  );
};

export default PictureCard;
