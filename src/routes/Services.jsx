//service cards > inquiry(link to contact)
import React from "react";
import { makeStyles } from "@material-ui/core";
import * as c from "@material-ui/core";
import theme from "../theme/theme";
import { motion } from "framer-motion";
import FadeIn from "../utility/hooks/useFadeIn";
import icons from "../utility/icons/icons";
import ServiceCard from "../components/ServiceCard";
import serviceData from "../utility/servicesData";

const useStyles = makeStyles((theme) => ({
  section: {
    paddingTop: "10vh",
  },
  statementText: {
    backgroundImage: `url(${icons.Pawpaw})`,
    backgroundPosition: "90%",
    backgroundRepeat: "no-repeat",
    backgroundSize: "contain",
    margin: theme.spacing(24),
    minHeight: "30vh",
    [theme.breakpoints.down("md")]: {
      margin: `${theme.spacing(4)}px ${theme.spacing(2)}px`,
      textAlign: "center",
    },
  },
  serviceLine: {
    paddingLeft: theme.spacing(8),
    paddingRight: theme.spacing(8),
    [theme.breakpoints.down("md")]: {
      padding: `${theme.spacing(4)}px ${theme.spacing(2)}px`,
    },
    "& #serviceLineName": {
      padding: theme.spacing(4),
      fontWeight: 700,
      [theme.breakpoints.down("md")]: {
        padding: `${theme.spacing(4)}px ${theme.spacing(2)}px`,
        fontSize: "3rem",
      },
    },
    "& #cardsContainer": {
      [theme.breakpoints.down("md")]: {
        justifyContent: "center",
      },
    },
  },
}));

const Services = () => {
  const classes = useStyles();

  const statementText = (
    <section className={classes.statementText}>
      <FadeIn slide={50}>
        <c.Typography variant="h5">
          Here at{" "}
          <c.Typography
            component={"div"}
            variant="h4"
            style={theme.typography.wordEmphasisBlue}>
            Tails Wag Dog Training
          </c.Typography>
          , we believe that proper training is crucial in building a strong and
          respectful bond between you and your loyal, loving companion. We work
          with dogs of all ages, as{" "}
          <c.Typography
            component={"div"}
            variant="h4"
            style={theme.typography.wordEmphasisBlack}>
            no dog is too old to learn new tricks.
          </c.Typography>{" "}
          By using motivational, positive reinforcement training techniques
          Tails Wag teaches pet owners the best way to effectively communicate
          with your dog in their own language…canine! We strive to bring out the
          best of each dog and owner and appreciate your suggestions or theories
          regarding your dog's behavior. Our goal is to promote responsible dog
          ownership and educate owners with the tools needed to effectively
          build{" "}
          <c.Typography
            component={"div"}
            variant="h4"
            style={theme.typography.wordEmphasisBlack}>
            confidence
          </c.Typography>{" "}
          and{" "}
          <c.Typography
            component={"div"}
            variant="h4"
            style={theme.typography.wordEmphasisBlack}>
            obedience
          </c.Typography>
          , while strengthening the bond between you and your dog.
        </c.Typography>
      </FadeIn>
    </section>
  );

  const MotionGrid = motion.custom(c.Grid);
  //give service array, map cards
  const ServiceLine = ({ lineName, lineObj }) => {
    return (
      <c.Grid
        container
        direction="column"
        className={classes.serviceLine}
        id="serviceLineContainer">
        <c.Grid item>
          <c.Typography variant="h3" id="serviceLineName">
            {lineName}~
          </c.Typography>
        </c.Grid>
        <FadeIn slideUp={50}>
          <MotionGrid
            container
            item
            direction="row"
            justify="space-evenly"
            style={{ minHeight: "50vh" }}
            id="cardsContainer">
            {lineObj.map((obj) => (
              <ServiceCard lineObj={obj} key={obj.title} />
            ))}
          </MotionGrid>
        </FadeIn>
      </c.Grid>
    );
  };

  return (
    <div className={classes.section} id="Services">
      {statementText}
      <ServiceLine lineName="Training" lineObj={serviceData.training} />
      <ServiceLine lineName="Boarding" lineObj={serviceData.boarding} />
      <ServiceLine
        lineName="Returning Clients"
        lineObj={serviceData.returningClients}
      />
    </div>
  );
};

export default Services;
