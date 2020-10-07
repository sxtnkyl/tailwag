import React from "react";

import * as c from "@material-ui/core";
import theme from "./theme/theme";

//App structure navbar>banner > current route > contact footer
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import ContactFooter from "./components/ContactFooter";

import Home from "./routes/Home";
import Services from "./routes/Services";
import About from "./routes/About";
import Gallery from "./routes/Gallery";
import Contact from "./routes/Contact";

function App() {
  //pass in route
  // const image = useBannerImage();

  return (
    <c.ThemeProvider theme={theme}>
      <c.Container maxWidth="xl" disableGutters>
        <Banner />
        <Navbar />
        <About />
        <ContactFooter />
      </c.Container>
    </c.ThemeProvider>
  );
}

export default App;
