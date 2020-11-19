import React from "react";
import { AnimatePresence } from "framer-motion";
import { Route, Router, useHistory } from "react-router-dom";
import { MountTransition } from "./MountTransition";

export const RouteTransition = ({
  children,
  exact = false,
  path = "",
  slide = 0,
  slideUp = 0,
  ...rest
}) => (
  <Route exact={exact} path={path} {...rest}>
    <MountTransition slide={slide} slideUp={slideUp}>
      {children}
    </MountTransition>
  </Route>
);

export const AnimatedRoutes = ({
  children,
  exitBeforeEnter = true,
  initial = false,
}) => {
  const history = useHistory();
  return (
    <AnimatePresence exitBeforeEnter={exitBeforeEnter} initial={initial}>
      <Router history={history} key={history.pathname}>
        {children}
      </Router>
    </AnimatePresence>
  );
};
