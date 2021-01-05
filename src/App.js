import React from "react";
import smoothscroll from "smoothscroll-polyfill";
import * as c from "@material-ui/core";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import theme from "./theme/theme";
import {
  AnimatedRoutes,
  RouteTransition,
} from "./components/animatedRoutes/RouteTransition";
import { AnimateSharedLayout } from "framer-motion";

import LargeNav from "./components/navbars/largeNav/index";
import SmallNav from "./components/navbars/smallNav/index";
import ContactFooter from "./components/ContactFooter";

import Services from "./routes/Services";
import Home from "./routes/Home";
import Testimonials from "./routes/Testimonials";
import Contact from "./routes/Contact";

function App() {
  //for safari browsers
  smoothscroll.polyfill();
  //screen width at about md(960px) = true;
  // const navExpanded = useMediaQuery(theme.breakpoints.up('md'));
  const navExpanded = useMediaQuery("@media (min-width:1091px)");

  return (
    <c.ThemeProvider theme={theme}>
      <c.Container maxWidth={false} disableGutters>
        <AnimateSharedLayout>
          {navExpanded ? <LargeNav /> : <SmallNav />}
          <AnimatedRoutes exitBeforeEnter>
            <RouteTransition exact path="/" slide={30}>
              <Home />
            </RouteTransition>
            <RouteTransition path="/services" slide={30}>
              <Services />
            </RouteTransition>
            <RouteTransition path="/testimonials" slide={30}>
              <Testimonials />
            </RouteTransition>
            <RouteTransition path="/contact" slide={30}>
              <Contact />
            </RouteTransition>
          </AnimatedRoutes>
          <ContactFooter />
        </AnimateSharedLayout>
      </c.Container>
    </c.ThemeProvider>
  );
}

export default App;
