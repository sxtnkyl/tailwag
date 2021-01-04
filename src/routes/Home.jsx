//brand experience > trainer CV
import icons from "../utility/icons/icons";
import React, { useState } from "react";
import * as c from "@material-ui/core";
import theme from "../theme/theme";
import { makeStyles } from "@material-ui/core";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
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
        padding: `${theme.spacing(4)}px ${theme.spacing(6)}px`,
      },
      [theme.breakpoints.down("sm")]: {
        padding: `${theme.spacing(4)}px ${theme.spacing(2)}px`,
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
    [theme.breakpoints.down("md")]: {
      padding: theme.spacing(2),
    },
  },
  actionButtons: {
    marginTop: theme.spacing(2),
    color: "black",
    background: theme.palette.secondary.main,
    filter: theme.palette.shadows.loweredFilterShadow,
    padding: theme.spacing(1),
  },
}));

const accolades = [
  {
    date: "2018-2019",
    title: "Canine behaviorist expert speaker",
    text:
      "expert insight on children and dog safety, responsible dog ownership, and service dogs for the disabled",
    link: "",
  },
  {
    date: "2014-2016",
    title: "Americans with Disabilities Act trainer and speaker",
    text: "educating the public on ADA service animal laws",
    link: "https://www.servicedogcertifications.org/ada-service-dog-laws/",
  },
  {
    date: "2009",
    title: "Voted “Best Dog Trainer in Atlanta” by Atlanta Magazine",
    text: "an Atlanta staple for in-depth service journalism",
    link: "https://www.atlantamagazine.com/",
  },
  {
    date: "2003-2004",
    title: "Piedmont Park Off-Leash Dog Area sponsor and speaker",
    text:
      "requested guest speaker on remediation of behavioral problems and aggression",
    link: "https://www.piedmontpark.org/dog-parks/",
  },
  {
    date: "1999-2001",
    title: "President of the Greater Atlanta Schutzhund Association",
    text:
      "high quality tracking, obedience and protection training based on positive reinforcement",
    link: "https://www.gasaworkingdogs.com/",
  },
  {
    date: "",
    title: "Raised award winning dog, Rocco",
    text:
      "1st place- United Schutzhund Clubs of America’s SE Regional Conformation Championship, G1 rating- Working Dog Association’s SE Regional Conformation Championship",
    link: "https://www.atlantamagazine.com/",
  },
  {
    date: "",
    title: "American Kennel Club certified evaluator",
    text:
      "awarded 13 Canine Good Citizen Awards in first annual American Kennel Club’s Responsible Dog Ownership Day",
    link: "https://www.akc.org/sports/responsible-dog-ownership-days/",
  },
  {
    date: "",
    title:
      "Founded German Shepherds training model for Coffee County, Georgia Sheriff’s Department",
    text: "producing nationally certified police dogs",
    link: "https://uspcak9.memberclicks.net/about",
  },
];

const About = () => {
  const classes = useStyles();
  const MotionButton = motion.custom(c.Button);
  const MotionGrid = motion.custom(c.Grid);
  const [expanded, toggleExpanded] = useState(false);

  const expandAccolades = () => {
    toggleExpanded(!expanded);
    setTimeout(() => {
      const scroll = document.getElementById("accolades");
      expanded === false && scroll.scrollIntoView({ behavior: "smooth" });
    }, 1000);
  };

  return (
    <div className={classes.page} id="About">
      <c.Grid
        container
        className={classes.approachContainer}
        alignItems="center"
        justify="center"
      >
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
            has been family owned and operated since 1998,{" "}
            <c.Typography
              component={"div"}
              variant="h4"
              style={theme.typography.wordEmphasisBlack}
            >
              offering professional, effective training services based on
              humane, motivational techniques.
            </c.Typography>{" "}
            Having experience training over 160 different breeds of dogs, I have
            the tools and experience for working with a variety of temperments
            and breed specific traits. I firmly believe that with the proper
            patience and understanding, every household is capable of achieving
            positive and mutual relationships with their dog. I have the ability
            to work with difficult to read dogs, and have a successful
            rehabilitation rate with rescues from a shaded past. In order to
            help pet owners in their quest for a happy, well trained dog,
            experience is invaluable and I have plenty of it...
          </c.Typography>
          <MotionButton
            className={classes.actionButtons}
            variant="outlined"
            color="primary"
            whileHover={{
              y: -5,
            }}
          >
            <Link to={`/contact`}>
              <JumpInText
                textString="...so let's get started!"
                typography="h5"
                delay={1500}
              />
            </Link>
          </MotionButton>
        </c.Grid>
        <c.Grid item xs={12} sm={8} md={6} lg={5}>
          <FadeIn slide={50}>
            <PictureCard
              pic={Rocco}
              title="Alexandra Wright"
              caption="Canine Behavioral Specialist"
            />
          </FadeIn>
        </c.Grid>
      </c.Grid>
      <c.Grid
        container
        className={classes.expertiseContainer}
        alignItems="center"
        justify="center"
      >
        <c.Grid item xs={12} sm={8} md={6} lg={5}>
          <FadeIn slide={-50}>
            <PictureCard
              pic={Izzy}
              title="German Shepherd Enthusiast"
              caption="With Extensive Breed Expertise"
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
            From winning medals to community involvement, Tails Wag Dog Training
            is dedicated in strengthening the bond with our four-legged friends.
          </c.Typography>
          <MotionButton
            className={classes.actionButtons}
            variant="outlined"
            onClick={() => expandAccolades()}
            whileHover={{
              y: -5,
            }}
          >
            <c.Typography variant="h5">Expand Accomplishments</c.Typography>
          </MotionButton>
        </c.Grid>
      </c.Grid>
      <AnimatePresence exitBeforeEnter>
        {expanded && (
          <MotionGrid
            id="accolades"
            container
            className={classes.accoladesContainer}
            justify="center"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
          >
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
          </MotionGrid>
        )}
      </AnimatePresence>
    </div>
  );
};

export default About;
