import React from "react";

import * as c from "@material-ui/core";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import theme from "./theme/theme";
import {
  AnimatedRoutes,
  RouteTransition,
} from "./components/animatedRoutes/RouteTransition";

//App structure: navbars > current route > contact footer
import LargeNav from "./components/navbars/largeNav/index";
import SmallNav from "./components/navbars/smallNav/index";

import Services from "./routes/Services";
import Home from "./routes/Home";
import Stories from "./routes/Stories";
import Contact from "./routes/Contact";

import ContactFooter from "./components/ContactFooter";

function App() {
  //screen width greater than 960 = true;
  const navExpanded = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <c.ThemeProvider theme={theme}>
      <c.Container maxWidth="false" disableGutters>
        {navExpanded ? <LargeNav /> : <SmallNav />}
        <AnimatedRoutes exitBeforeEnter>
          <RouteTransition exact path="/" slide={30}>
            <Home />
          </RouteTransition>
          <RouteTransition path="/services" slide={30}>
            <Services />
          </RouteTransition>
          <RouteTransition path="/stories" slide={30}>
            <Stories />
          </RouteTransition>
          <RouteTransition path="/contact" slide={30}>
            <Contact />
          </RouteTransition>
        </AnimatedRoutes>
        <ContactFooter />
      </c.Container>
    </c.ThemeProvider>
  );
}

export default App;
