import React from "react";
import * as c from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import theme from "../theme/theme";
import useFade from "../utility/hooks/useFade";

const useStyles = makeStyles((theme) => ({
  card: {
    height: "500px",
    filter: `drop-shadow(2px 2px 4px ${useFade(
      theme.palette.primary.dark,
      0.8
    )})`,
    borderBottomLeftRadius: theme.spacing(8),
    borderTopRightRadius: theme.spacing(8),
    borderRadius: theme.spacing(2),
    overflow: "visible",
  },
  iconContainer: {
    height: "300px",
    width: "300px",
    background:
      "linear-gradient(30deg, rgba(179, 229, 252, 1) 0%, rgba(33, 150, 243, 0.75) 100%)",
    borderRadius: theme.spacing(2),
    transform: "translate(-20%, 100px) scale(1)",
  },
  icon: {
    width: "300px",
    height: "300px",
    transform: "translate(0)",
  },
}));

//hover effect: skew opaque cards under card
const ServiceCard = ({ lineObj }) => {
  const classes = useStyles();

  return (
    <c.Grid item xs={10} xl={5}>
      <c.Card className={classes.card}>
        <c.Grid container style={{ height: "100%" }}>
          <c.Grid item xs={4}>
            <div className={classes.iconContainer}>
              <c.CardMedia image={lineObj.icon} className={classes.icon} />
            </div>
          </c.Grid>
          <c.Grid item xs>
            <c.CardContent>
              <c.Typography
                variant="h4"
                style={{ alignSelf: "center", fontWeight: 700 }}
              >
                {lineObj.title}
              </c.Typography>
              <c.Typography
                variant="h5"
                style={{
                  color: theme.palette.primary.main,
                  alignSelf: "center",
                }}
              >
                {lineObj.rate} / {lineObj.interval}
              </c.Typography>
              <c.Typography variant="subtitle1">
                {lineObj.description}
              </c.Typography>
              <c.CardActions style={{ justifyContent: "flex-end" }}>
                {lineObj.chips.map((chip) => (
                  <c.Chip
                    key={chip.title}
                    variant="outlined"
                    label={chip.title}
                    icon={chip.icon}
                  />
                ))}
              </c.CardActions>
            </c.CardContent>
          </c.Grid>
        </c.Grid>
      </c.Card>
    </c.Grid>
  );
};

export default ServiceCard;
