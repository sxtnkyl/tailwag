import React from "react";
import * as c from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import theme from "../theme/theme";
import useFade from "../utility/hooks/useFade";

const useStyles = makeStyles((theme) => ({
  card: {
    minHeight: "300px",
    display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
    filter: `drop-shadow(2px 2px 4px ${useFade(
      theme.palette.primary.dark,
      0.8
    )})`,
    borderBottomLeftRadius: theme.spacing(16),
    borderTopRightRadius: theme.spacing(16),
    borderRadius: theme.spacing(2),
    overflow: "visible",
    padding: theme.spacing(4),
  },
  iconContainer: {
    // background:
    //   "linear-gradient(30deg, rgba(179, 229, 252, 1) 0%, rgba(33, 150, 243, 1) 100%)",
    borderRadius: "50%",
  },
}));

//hover effect: skew opaque cards under card
const ServiceCard = ({ lineObj }) => {
  const classes = useStyles();

  return (
    <c.Grid item xs={10} xl={5}>
      <c.Card className={classes.card}>
          <c.Grid container>

            <c.Grid item xs container direction="column" justify="flex-start" style={{paddingRight: theme.spacing(2)}}>
              <c.Typography
                variant="h4"
                style={{ fontWeight: 700, paddingBottom: theme.spacing(2) }}
              >
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
              <c.Typography variant="subtitle1">
                {lineObj.description}
              </c.Typography>
            </c.Grid>

            <c.Grid item xs={3}>
              <img src={lineObj.icon} alt={lineObj.title} className={classes.iconContainer} />
            </c.Grid>

          </c.Grid>
          
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
      </c.Card>
    </c.Grid>
  );
};

export default ServiceCard;
