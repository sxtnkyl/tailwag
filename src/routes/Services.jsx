//service cards > inquiry(link to contact)
import React from "react";
import { makeStyles } from "@material-ui/core";
import * as c from "@material-ui/core";
import theme from "../theme/theme";
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
    paddingLeft: theme.spacing(24),
    paddingRight: theme.spacing(24),
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
    fontFamily: "Open Sans",
    height: "30vh",
  },
  serviceLine: {
    paddingLeft: theme.spacing(8),
    paddingRight: theme.spacing(8),
  },
}));

const Services = () => {
  const classes = useStyles();

  const statementText = (
    <section className={classes.statementText}>
      <c.Typography variant="h6">
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
        By using motivational, positive reinforcement training techniques Tails
        Wag teaches pet owners the best way to effectively communicate with your
        dog in their own language…canine! We strive to bring out the best of
        each dog and owner and appreciate your suggestions or theories regarding
        your dog's behavior. Our goal is to promote responsible dog ownership
        and educate owners with the tools needed to effectively build{" "}
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
    </section>
  );

  //give service array, map cards
  const ServiceLine = ({ lineName, lineObj }) => {
    return (
      <c.Grid
        container
        direction="column"
        className={classes.serviceLine}
        id="serviceLineContainer">
        <c.Grid item>
          <c.Typography variant="h3" style={{ padding: theme.spacing(4) }}>
            {lineName}~
          </c.Typography>
        </c.Grid>
        <c.Grid
          container
          item
          direction="row"
          justify="space-evenly"
          style={{ minHeight: "50vh" }}
          id="cardsContainer">
          {lineObj.map((obj) => (
            <ServiceCard lineObj={obj} key={obj.title} />
          ))}
        </c.Grid>
      </c.Grid>
    );
  };

  return (
    <div className={classes.section}>
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
