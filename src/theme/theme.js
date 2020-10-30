import { createMuiTheme, responsiveFontSizes } from "@material-ui/core/styles";
import { blue, red } from "@material-ui/core/colors";
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
    fontFamily: ["Gochi Hand", "Roboto", "Open Sans"].join(","),
    h1: {
      fontSize: "8rem",
      fontWeight: 700,
      textShadow: `2px 2px 1px ${useFade(blue[900], 0.5)}`,
      color: blue[50],
    },
    //logo "tailwag"
    h2: {
      fontSize: "4.0rem",
      fontWeight: 900,
      textShadow: `2px 2px 1px ${useFade(blue[700], 0.5)}`,
    },
    //navbarItem
    h3: {},
    //logo:"dogtraining", ServiceCard/PictureCard: title,
    h4: { fontWeight: 500 },
    //ServiceCard: rate, PictureCard: caption
    h5: {
      lineHeight: 2,
      fontWeight: 500,
    },
    //section mission statements,
    h6: {},
    //ServiceCard: descrip
    subtitle1: { fontFamily: "Open Sans", fontWeight: 600 },
    wordEmphasisBlue: {
      fontFamily: "Gochi Hand",
      display: "inline",
      fontWeight: 700,
      color: blue[600],
    },
    wordEmphasisBlack: {
      fontFamily: "Gochi Hand",
      display: "inline",
    },
  },
  overrides: {
    MuiAppBar: {
      root: { top: 0 },
      colorPrimary: {
        backgroundColor: "transparent",
      },
    },
    MuiBackdrop: {
      root: {
        zIndex: 1,
      },
    },
    MuiCardContent: {
      root: {
        // height: "100% !important",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      },
    },
    MuiPaper: {
      elevation4: {
        boxShadow: `0px 0px`,
      },
    },
    MuiTextField: {
      root: {
        margin: "8px",
        alignSelf: "center",
      },
    },
    MuiFormControl: {
      root: {
        margin: "8px",
        width: "100%",
        alignSelf: "center",
      },
    },
  },
});

//https://material-ui.com/customization/typography/#responsive-font-sizes
theme = responsiveFontSizes(theme);

export default theme;
