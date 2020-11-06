//masonry tiles > open to testimonials
import React, { useState, useEffect } from "react";

import * as c from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import { ListCard } from "../components/stories/Card/ListCard";
import { OpenCard } from "../components/stories/Card/OpenCard";

import { BrowserRouter as Router, Route } from "react-router-dom";
import { AnimatePresence, AnimateSharedLayout } from "framer-motion";
import storiesData from "../utility/storiesData";
import theme from "../theme/theme";
import icons from "../utility/icons/icons";

const useStyles = makeStyles((theme) => ({
  section: {
    minHeight: "100vh",
    paddingTop: "10vh",
  },
  statementText: {
    backgroundImage: `url(${icons.Pawpaw})`,
    backgroundPosition: "90%",
    backgroundRepeat: "no-repeat",
    backgroundSize: "contain",
    margin: theme.spacing(24),
    marginBottom: 0,
    minHeight: "30vh",
  },
  listContainer: {
    display: "flex",
    flexWrap: "wrap",
    alignContent: "flex-start",
    padding: `${theme.spacing(24)}px ${theme.spacing(12)}px`,
    marginBottom: "20vh",
  },
}));

const Stories = ({ match, location, history }) => {
  const classes = useStyles();

  const statementText = (
    <section className={classes.statementText}>
      <c.Typography variant="h5">
        <c.Typography
          component={"div"}
          variant="h4"
          style={theme.typography.wordEmphasisBlue}>
          Tails Wag Dog Training{" "}
        </c.Typography>
        has served hundreds of happy clients over the years and takes great
        pride in creating these{" "}
        <c.Typography
          component={"div"}
          variant="h4"
          style={theme.typography.wordEmphasisBlack}>
          positive, long term relationships.
        </c.Typography>{" "}
        By spending more time with you and your canine partner, we develop a
        greater understanding for how to remedy underlying issues. Here's what
        some of our satisfied customers have to say!
      </c.Typography>
    </section>
  );

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
      {statementText}
      <Router>
        <Route path={["/stories/:id", "/stories"]} component={List} />
      </Router>
    </div>
  );
};

export default Stories;
