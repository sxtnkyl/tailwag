//brand experience > trainer CV
import icons from "../utility/icons/icons";
import React from "react";
import * as c from "@material-ui/core";
import theme from "../theme/theme";
import { makeStyles } from "@material-ui/core";
import PictureCard from "../components/PictureCard";
import AccoladeCard from "../components/AccoladeCard";
import Izzy from "../images/izzy.jpg";
import Rocco from "../images/RoccoAward.jpg";

const useStyles = makeStyles((theme) => ({
  section: {
    minHeight: "100vh",
    paddingTop: "10vh",
  },
  approachContainer: {
    minHeight: "100vh",
    backgroundImage: `url(${icons.ApproachAbout})`,
    backgroundPosition: "",
    backgroundRepeat: "no-repeat",
    backgroundSize: "contain",
    paddingLeft: theme.spacing(8),
    paddingRight: theme.spacing(8),
  },
  accoladesContainer: {
    minHeight: "100vh",
    backgroundImage: `url(${icons.AccoladesAbout})`,
    backgroundPosition: "right",
    backgroundRepeat: "no-repeat",
    backgroundSize: "contain",
    paddingLeft: theme.spacing(8),
    paddingRight: theme.spacing(8),
  },
  accoladesText: {
    paddingTop: "5%",
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
    title: "2018-2019 Canine behaviorist expert speaker",
    text:
      "expert insight on children and dog safety, responsible dog ownership, and service dogs for the disabled",
    link: "",
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
    <div className={classes.section} id="About">
      <c.Grid container className={classes.approachContainer}>
        <c.Grid item xs container justify="center" alignItems="center">
          <c.Typography variant="h6" style={{ fontFamily: "Open Sans" }}>
            "
            <c.Typography
              component={"div"}
              variant="h4"
              style={theme.typography.wordEmphasisBlue}>
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
              style={theme.typography.wordEmphasisBlack}>
              every dog
            </c.Typography>{" "}
            is capable of achieving a life of confidence and respect. I have the
            ability to work with difficult to read dogs, and have a successful
            rehabilitation rate with rescues from a shaded past. In order to
            help pet owners in their quest for a happy, well trained dog,
            experience is invaluable and I have plenty of it-{" "}
            <c.Typography
              component={"div"}
              variant="h4"
              style={theme.typography.wordEmphasisBlack}>
              so let's get started!
            </c.Typography>
            "
          </c.Typography>
        </c.Grid>
        <PictureCard
          pic={Izzy}
          title="Alexandra Wright"
          caption="Dog Whisperer"
        />
      </c.Grid>
      <c.Grid container className={classes.accoladesContainer}>
        <PictureCard
          pic={Rocco}
          title="Rocco- the German Shepherd"
          caption="(award winning goodboy)"
        />
        <c.Grid container item xs direction="column" justify="center">
          <c.Typography
            variant="h3"
            style={{ paddingBottom: theme.spacing(2) }}>
            Dedicated Expertise- Proven Results.
          </c.Typography>
          <c.Typography variant="h6" style={{ fontFamily: "Open Sans" }}>
            From winning medals to community involvement, Tails Wag is dedicated
            in strengthening the bond with our four-legged friends. Here are
            some my notable accomplishments.
          </c.Typography>
          <c.Grid
            container
            justify="space-around"
            alignContent="space-around"
            spacing={4}
            style={{ marginTop: theme.spacing(4) }}>
            {accolades.map((a, index) => (
              <AccoladeCard key={index} accolade={a} />
            ))}
          </c.Grid>
        </c.Grid>
      </c.Grid>
    </div>
  );
};

export default About;
