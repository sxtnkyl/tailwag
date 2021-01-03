//masonry tiles > open to testimonials
import React from "react";

import * as c from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import { ListCard } from "../components/stories/Card/ListCard";
import { OpenCard } from "../components/stories/Card/OpenCard";

import { BrowserRouter as Router, Route } from "react-router-dom";
import { AnimatePresence, AnimateSharedLayout } from "framer-motion";
import FadeIn from "../utility/hooks/useFadeIn";
import storiesData from "../utility/storiesData";
import theme from "../theme/theme";
import icons from "../utility/icons/icons";

const useStyles = makeStyles((theme) => ({
  page: {
    minHeight: "100vh",
    paddingTop: "10vh",
    [theme.breakpoints.down("lg")]: {
      paddingTop: "3vh",
    },
  },
  statementText: {
    backgroundImage: `url(${icons.Pawpaw})`,
    backgroundPosition: "90%",
    backgroundRepeat: "no-repeat",
    backgroundSize: "contain",
    margin: theme.spacing(12),
    marginBottom: 0,
    minHeight: "30vh",
    [theme.breakpoints.down("md")]: {
      margin: `${theme.spacing(8)}px ${theme.spacing(4)}px`,
      textAlign: "center",
    },
  },
  listContainer: {
    display: "flex",
    flexWrap: "wrap",
    alignContent: "flex-start",
    padding: theme.spacing(12),
    marginBottom: "20vh",
    [theme.breakpoints.down("md")]: {
      padding: `${theme.spacing(4)}px ${theme.spacing(2)}px`,
    },
  },
}));

const Testimonials = () => {
  const classes = useStyles();

  const statementText = (
    <section className={classes.statementText}>
      <FadeIn slide={50}>
        <c.Typography variant="h5">
          <c.Typography
            component={"div"}
            variant="h4"
            style={theme.typography.wordEmphasisBlue}
          >
            Tails Wag Dog Training{" "}
          </c.Typography>
          has served hundreds of happy clients over the years and takes great
          pride in creating{" "}
          <c.Typography
            component={"div"}
            variant="h4"
            style={theme.typography.wordEmphasisBlack}
          >
            positive, long term relationships.
          </c.Typography>{" "}
          By spending more time with you and your canine partner, we develop a
          greater understanding for how to remedy underlying issues. Here's what
          some of our satisfied customers have to say!
        </c.Typography>
      </FadeIn>
    </section>
  );

  const List = ({ match }) => (
    <AnimateSharedLayout type="crossfade">
      <section className={classes.listContainer}>
        {storiesData.map((card) => (
          <ListCard
            key={card.id}
            isSelected={match.params.id === card.id}
            match={match}
            {...card}
          />
        ))}
      </section>
      <AnimatePresence>
        {match.params.id && <OpenCard paramsId={match.params.id} />}
      </AnimatePresence>
    </AnimateSharedLayout>
  );

  return (
    <div className={classes.page} id="Testimonials">
      {statementText}
      <Router>
        <Route path={["/testimonials/:id", "/testimonials"]} component={List} />
      </Router>
    </div>
  );
};

export default Testimonials;
