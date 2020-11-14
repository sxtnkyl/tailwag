import React, { useEffect } from "react";

import * as c from "@material-ui/core";
import theme from "./theme/theme";

import { Route, Switch } from "react-router";
import {
  AnimatedRoutes,
  RouteTransition,
} from "./components/animatedRoutes/RouteTransition";
import { BrowserRouter as Router, Link, useLocation } from "react-router-dom";

//App structure navbar>banner>pageTitle > current route > contact footer
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import PageTitle from "./components/PageTitle";
import ContactFooter from "./components/ContactFooter";

import Services from "./routes/Services";
import About from "./routes/About";
import Stories from "./routes/Stories";
import Contact from "./routes/Contact";

function App() {
  const location = useLocation();

  return (
    <c.ThemeProvider theme={theme}>
      <c.Container maxWidth="xl" disableGutters>
        {/* <Banner location={location} />
        <Navbar />
        <PageTitle location={location} /> */}
        <AnimatedRoutes exitBeforeEnter>
          <RouteTransition exact path="/" slide={30}>
            <About />
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
