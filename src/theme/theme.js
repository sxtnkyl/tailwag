import { createMuiTheme, responsiveFontSizes } from "@material-ui/core/styles";
import { blue, red, indigo } from "@material-ui/core/colors";
import useFade from "../utility/hooks/useFade";

//lightblue300-lb100
//blue and red100

let theme = createMuiTheme({
  palette: {
    primary: { main: blue[600] },
    secondary: { main: red[600] },
    background: {
      default: "#fff",
    },
    shadows: {
      bottomShadow: `0px 2px 4px 4px ${useFade(blue[700], 0.5)}`,
    },
  },
  typography: {
    fontFamily: ["Gochi Hand", "Roboto"].join(","),
    //logo "tailwag"
    h2: {
      fontSize: "4.0rem",
      fontWeight: 900,
      textShadow: `2px 2px 1px ${useFade(blue[700], 0.5)}`,
    },
    //navbarItem
    h3: {},
    //logo "dogtraining"
    h4: {},
    //section mission statements
    h5: {
      lineHeight: 2,
    },
  },
  overrides: {
    MuiAppBar: {
      root: { top: 0 },
      colorPrimary: {
        backgroundColor: "transparent",
      },
    },
    MuiCardContent: {
      root: {
        height: "100% !important",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-evenly",
      },
    },
    MuiPaper: {
      elevation4: {
        boxShadow: `0px 0px`,
      },
    },
  },
});

//https://material-ui.com/customization/typography/#responsive-font-sizes
theme = responsiveFontSizes(theme);

export default theme;
