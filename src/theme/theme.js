import { createMuiTheme, responsiveFontSizes } from "@material-ui/core/styles";
import { blue, red, indigo } from "@material-ui/core/colors";
import useFade from "../utility/hooks/useFade";

//lightblue300-lb100
//blue and red100

const defaultTheme = createMuiTheme({
  palette: {
    primary: {
      main: blue[500],
      contrastText: "white",
    },
    secondary: {
      main: red[500],
    },
    text: {
      primary: "#064271",
    },
  },
  shape: {
    borderRadius: 2,
  },
});

let theme = createMuiTheme({
  palette: {
    primary: defaultTheme.palette.primary,
    secondary: defaultTheme.palette.secondary,
    textShadow: defaultTheme.palette.textShadow,
  },
  spacing: defaultTheme.spacing,
  typography: {
    fontFamily: ["Gochi Hand", "Roboto"].join(","),
    h2: {
      fontSize: "4.0rem",
      fontWeight: 900,
      textShadow: `2px 2px 1px ${useFade(
        defaultTheme.palette.primary.dark,
        0.4
      )}`,
      color: red[50],
    },
    h3: {
      color: red[50],
    },
    h4: {
      color: "#064271",
    },
  },
  overrides: {
    MuiAppBar: {
      root: { top: 0 },
      colorPrimary: {
        backgroundColor: "transparent",
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
