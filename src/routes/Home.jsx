//brand experience > trainer CV
import icons from "../utility/icons/icons";
import React from "react";
import * as c from "@material-ui/core";
import theme from "../theme/theme";
import { makeStyles } from "@material-ui/core";
import { Link } from "react-router-dom";

import StaggerContainer from "../utility/hooks/useStaggerChildren";
import FadeIn from "../utility/hooks/useFadeIn";
import JumpInText from "../components/JumpInText";
import PictureCard from "../components/PictureCard";
import AccoladeCard from "../components/AccoladeCard";
import Izzy from "../images/izzy.jpg";
import Rocco from "../images/RoccoAward.jpg";

const useStyles = makeStyles((theme) => ({
  page: {
    minHeight: "100vh",
    paddingTop: "10vh",
    [theme.breakpoints.down("lg")]: {
      paddingTop: "3vh",
    },
    "& .MuiGrid-container": {
      [theme.breakpoints.down("lg")]: {
        justifyContent: "center",
      },
      [theme.breakpoints.down("md")]: {
        textAlign: "center",
      },
    },
  },
  approachContainer: {
    minHeight: "88vh",
    backgroundImage: `url(${icons.ApproachAbout})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "contain",
    padding: theme.spacing(12),
    [theme.breakpoints.down("lg")]: {
      padding: `${theme.spacing(8)}px ${theme.spacing(4)}px`,
    },
    [theme.breakpoints.down("md")]: {
      padding: `${theme.spacing(4)}px ${theme.spacing(2)}px`,
    },
    "& #historyText": {
      paddingRight: theme.spacing(6),
      [theme.breakpoints.down("md")]: {
        padding: `${theme.spacing(4)}px ${theme.spacing(2)}px`,
      },
      "& #getStarted": {
        color: "black",
        padding: theme.spacing(4),
        [theme.breakpoints.down("lg")]: {
          padding: theme.spacing(1),
        },
      },
    },
  },
  expertiseContainer: {
    minHeight: "88vh",
    backgroundImage: `url(${icons.AccoladesAbout})`,
    backgroundPosition: "right",
    backgroundRepeat: "no-repeat",
    backgroundSize: "contain",
    padding: theme.spacing(12),
    [theme.breakpoints.down("lg")]: {
      padding: `${theme.spacing(8)}px ${theme.spacing(4)}px`,
    },
    [theme.breakpoints.down("md")]: {
      padding: `${theme.spacing(4)}px ${theme.spacing(2)}px`,
    },
    "& #expertiseText": {
      paddingLeft: theme.spacing(6),
      [theme.breakpoints.down("md")]: {
        padding: `${theme.spacing(4)}px ${theme.spacing(2)}px`,
        order: -1,
      },
    },
    "& #provenResults": {
      paddingBottom: theme.spacing(4),
      [theme.breakpoints.down("md")]: {
        paddingBottom: theme.spacing(0),
      },
    },
    "& #expertiseStatement": {
      textAlign: "center",
      [theme.breakpoints.down("md")]: {
        paddingTop: theme.spacing(4),
      },
    },
  },
  accoladesContainer: {
    minHeight: "100vh",
    backgroundImage: `url(${icons.ApproachAbout})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "contain",
    padding: theme.spacing(12),
    marginBottom: "20vh",
    [theme.breakpoints.down("lg")]: {
      padding: theme.spacing(2),
    },
  },
}));

const accolades = [
  {
    title: "Raised multi-award winning dog, Rocco",
    text:
      "1st place- United Schutzhund Clubs of America’s SE Regional Conformation Championship, G1 rating- Working Dog Association’s SE Regional Conformation Championship",
    link: "https://www.atlantamagazine.com/",
  },
  {
    title: "2018-2019 Canine behaviorist expert speaker",
    text:
      "expert insight on children and dog safety, responsible dog ownership, and service dogs for the disabled",
    link: "",
  },
  {
    title: "1999-2001 President of the Greater Atlanta Schutzhund Association",
    text:
      "high quality tracking, obedience and protection training based on positive reinforcement",
    link: "https://www.gasaworkingdogs.com/",
  },
  {
    title: "American Kennel Club certified evaluator",
    text:
      "awarded 13 Canine Good Citizen Awards in first annual American Kennel Club’s Responsible Dog Ownership Day",
    link: "https://www.akc.org/sports/responsible-dog-ownership-days/",
  },
  {
    title:
      "Founded German Shepherds training model for Coffee County, Georgia Sheriff’s Department",
    text: "producing nationally certified police dogs",
    link: "https://uspcak9.memberclicks.net/about",
  },
  {
    title: "2003-2004 Piedmont Park Off-Leash Dog Area sponsor and speaker",
    text:
      "requested guest speaker on remediation of bahavioral problems and aggression",
    link: "https://www.piedmontpark.org/dog-parks/",
  },
  {
    title:
      "2014-2016 Americans with Disabilities Act service dog trainer and speaker",
    text: "educating the public on ADA service animal laws",
    link: "https://www.servicedogcertifications.org/ada-service-dog-laws/",
  },
  {
    title: "2009 Voted “Best Dog Trainer in Atlanta” by Atlanta Magazine",
    text: "an Atlanta staple for in-depth service journalism",
    link: "https://www.atlantamagazine.com/",
  },
];

const About = () => {
  const classes = useStyles();
  return (
    <div className={classes.page} id="About">
      <c.Grid container className={classes.approachContainer} justify="center">
        <c.Grid
          item
          md={12}
          lg={6}
          container
          justify="center"
          alignContent="center"
          alignItems="center"
          id="historyText"
        >
          <c.Typography variant="h5" id="historyContent">
            <c.Typography
              component={"div"}
              variant="h4"
              style={theme.typography.wordEmphasisBlue}
            >
              Tails Wag Dog Training, Inc.
            </c.Typography>{" "}
            has been family owned and operated since 1998, serving hundreds of
            satisfied clients. With experience training over 120 different
            breeds of dogs, I have the tools and experience to work with a
            variety of temperments and breed specific traits. I firmly believe
            that with the proper patience and understanding,{" "}
            <c.Typography
              component={"div"}
              variant="h4"
              style={theme.typography.wordEmphasisBlack}
            >
              every dog
            </c.Typography>{" "}
            is capable of achieving a life of confidence and respect. I have the
            ability to work with difficult to read dogs, and have a successful
            rehabilitation rate with rescues from a shaded past. In order to
            help pet owners in their quest for a happy, well trained dog,
            experience is invaluable and I have plenty of it...
          </c.Typography>
          <Link to={`/contact`} id="getStarted">
            <JumpInText
              textString="...so let's get started!"
              typography="h4"
              delay={3000}
            />
          </Link>
        </c.Grid>
        <c.Grid item md={10} lg={5}>
          <FadeIn slide={50}>
            <PictureCard
              pic={Izzy}
              title="Alexandra Wright"
              caption="Canine Behavioral Specialist"
            />
          </FadeIn>
        </c.Grid>
      </c.Grid>
      <c.Grid container className={classes.expertiseContainer} justify="center">
        <c.Grid item md={10} lg={5}>
          <FadeIn slide={-50}>
            <PictureCard
              pic={Rocco}
              title="Rocco- the German Shepherd"
              caption="(award winning goodboy)"
            />
          </FadeIn>
        </c.Grid>
        <c.Grid
          item
          md={12}
          lg={6}
          container
          justify="center"
          alignContent="center"
          alignItems="center"
          id="expertiseText"
        >
          <c.Typography variant="h3">Dedicated Expertise-</c.Typography>
          <c.Typography variant="h3" id="provenResults">
            Proven Results.
          </c.Typography>
          <c.Typography variant="h5" id="expertiseStatement">
            From winning medals to community involvement, Tails Wag is dedicated
            in strengthening the bond with our four-legged friends. Here are
            some my notable accomplishments.
          </c.Typography>
        </c.Grid>
      </c.Grid>
      <c.Grid container className={classes.accoladesContainer} justify="center">
        <StaggerContainer
          delay={250}
          triggerPoint={0.25}
          styles={theme.mixins.formats.spaceAroundFlexRow}
          spacing={4}
        >
          {accolades.map((a, index) => (
            <AccoladeCard key={index} accolade={a} />
          ))}
        </StaggerContainer>
      </c.Grid>
    </div>
  );
};

export default About;
