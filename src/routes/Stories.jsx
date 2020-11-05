//masonry tiles > open to testimonials
import React, { useState, useEffect } from "react";

import * as c from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import { ListCard } from "../components/stories/Card/ListCard";
import { OpenCard } from "../components/stories/Card/OpenCard";

import { BrowserRouter as Router, Route } from "react-router-dom";
import { AnimatePresence, AnimateSharedLayout } from "framer-motion";
import storiesData from "../utility/storiesData";
import { openSpring, closeSpring } from "../utility/animations";

const useStyles = makeStyles((theme) => ({
  section: {
    minHeight: "100vh",
    paddingTop: "10vh",
  },
  listContainer: {
    display: "flex",
    flexWrap: "wrap",
    alignContent: "flex-start",
    padding: theme.spacing(8),
  },
}));

const Stories = ({ match, location, history }) => {
  const classes = useStyles();

  const List = ({ match }) => (
    <AnimateSharedLayout type="crossfade">
      <div className={classes.listContainer}>
        {storiesData.map((card) => (
          <ListCard
            key={card.id}
            isSelected={match.params.id === card.id}
            match={match}
            {...card}
          />
        ))}
      </div>
      <AnimatePresence>
        {match.params.id && <OpenCard paramsId={match.params.id} />}
      </AnimatePresence>
    </AnimateSharedLayout>
  );

  return (
    <div className={classes.section} id="Stories">
      <Router>
        <Route path={["/stories/:id", "/stories"]} component={List} />
      </Router>
    </div>
  );
};

export default Stories;
