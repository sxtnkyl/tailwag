import React from "react";

import * as c from "@material-ui/core";
import theme from "./theme/theme";

import { Route, Switch } from "react-router";
import { BrowserRouter as Router, Link, useLocation } from "react-router-dom";

//App structure navbar>banner>pageTitle > current route > contact footer
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import PageTitle from "./components/PageTitle";
import ContactFooter from "./components/ContactFooter";

import Home from "./routes/Home";
import Services from "./routes/Services";
import About from "./routes/About";
import Stories from "./routes/Stories";
import Contact from "./routes/Contact";

function App() {
  //pass in route
  // const image = useBannerImage();
  const location = useLocation();

  return (
    <c.ThemeProvider theme={theme}>
      <c.Container maxWidth="xl" disableGutters>
        <Banner />
        <Navbar />
        <PageTitle location={location} />
        <Switch>
          <Route exact path="/" component={About} />
          <Route path="/services" component={Services} />
          <Route path="/stories" component={Stories} />
          <Route path="/contact" component={Contact} />
        </Switch>
        <ContactFooter />
      </c.Container>
    </c.ThemeProvider>
  );
}

export default App;
