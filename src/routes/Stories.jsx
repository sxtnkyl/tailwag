//masonry tiles > open to testimonials
import React from "react";
import * as c from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import { Card } from "../components/stories/Card/Card";
import storiesData from "../utility/storiesData";
import { motion } from "framer-motion";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  section: {
    minHeight: "100vh",
  },
  cardList: {
    height: "100%",
    width: "100%",
    display: "flex",
    flexWrap: "wrap",
    alignContent: "flex-start",
  },
}));

const Stories = ({ match, history }) => {
  const classes = useStyles();

  const CardList = () => (
    <Router>
      <Route path={[`${match.url}/:id`, `${match.url}`]} component={List} />
    </Router>
  );

  const List = ({ match, history }) => {
    return (
      <c.Grid className={classes.cardList}>
        {storiesData.map((card) => (
          <Card
            key={card.id}
            isSelected={match.params.id === card.id}
            history={history}
            match={match}
            {...card}
          />
        ))}
        <Link to="/stories">
          <c.Backdrop open={match.path === "/stories/:id"} />
        </Link>
      </c.Grid>
    );
  };

  return (
    <div className={classes.section} id="Stories">
      <CardList />
    </div>
  );
};

export default Stories;
