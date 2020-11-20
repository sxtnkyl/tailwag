import { createMuiTheme, responsiveFontSizes } from "@material-ui/core/styles";
import { blue, red } from "@material-ui/core/colors";
import useFade from "../utility/hooks/useFade";

//page topPadding (under PageTitle) > 10vh
//default margin for lg screens > theme.spacing(12)
//text/PictureCard > text gets padding theme.spacing(6) in between, (8) below

let theme = createMuiTheme({
  palette: {
    primary: { main: blue[600] },
    secondary: { main: red[600] },
    background: {
      default: "#fff",
    },
    shadows: {
      loweredFilterShadow: `drop-shadow(2px 2px 4px ${useFade(
        blue[800],
        0.4
      )})`,
      raisedFilterShadow: `drop-shadow(2px 2px 4px ${useFade(blue[600], 0.8)})`,
      bottomShadow: `0px 2px 4px 4px ${useFade(blue[700], 0.5)}`,
      iconGradient:
        "linear-gradient(330deg, rgba(179, 229, 252, 1) 0%, rgba(33, 150, 243, 1) 100%)",
      pawShadow: `drop-shadow(2px 2px 4px ${useFade(blue[800], 0.8)})`,
    },
  },
  typography: {
    fontFamily: ["Gochi Hand", "Verdana", "Roboto", "Open Sans"].join(","),
    h1: {
      //banner
      fontSize: "8rem",
      fontWeight: 700,
      textShadow: `2px 2px 1px ${useFade(blue[900], 0.5)}`,
      color: "white",
    },
    h2: {
      //logo "tailwag"
      fontSize: "4.0rem",
      fontWeight: 800,
      textShadow: `2px 2px 1px ${useFade(blue[700], 0.5)}`,
    },
    h3: {
      //navbarItem, page section titles "Dedicated Expertise"
      fontWeight: 600,
      letterSpacing: "4px",
    },
    h4: {
      //logo:"dogtraining", ServiceCard/PictureCard: title, emphasisBlack
      fontWeight: 600,
    },
    h5: {
      //ServiceCard: rate, PictureCard: caption, section mission statements
      lineHeight: 1.5,
      wordSpacing: "4px",
    },
    h6: {},
    body1: {
      //accoladesCard
      letterSpacing: "1px",
    },
    subtitle1: {
      //ServiceCard: descrip
      fontFamily: "Open Sans",
      fontWeight: 600,
    },
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
  mixins: {
    formats: {
      centeredFlex: {
        justifyContent: "center",
        alignItems: "center",
        alignContent: "center",
        flexDirection: "column",
      },
      spaceAroundFlexRow: {
        justifyContent: "space-around",
        alignItems: "space-around",
        alignContent: "center",
        flexDirection: "row",
      },
      absoluteFull: {
        position: "absolute",
        top: "0",
        left: "0",
        right: "0",
        bottom: "0",
      },
      relative100: {
        position: "relative",
        height: "100%",
        width: "100%",
      },
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
