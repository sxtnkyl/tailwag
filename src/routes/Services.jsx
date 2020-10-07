//service cards > inquiry(link to contact)
import React from "react";
import { makeStyles } from "@material-ui/core";
import * as c from "@material-ui/core";
import theme from "../theme/theme";
import WaveTopper from "../components/WaveTopper";
import ServiceCard from "../components/ServiceCard";
import serviceData from "../utility/servicesData";

const useStyles = makeStyles((theme) => ({
  section: {},
  statementText: {
    paddingLeft: theme.spacing(24),
    paddingRight: theme.spacing(24),
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
    fontFamily: "Roboto",
  },
  wordEmphasisBlue: {
    fontFamily: "Gochi Hand",
    display: "inline",
    fontWeight: 700,
    color: theme.palette.primary.main,
  },
  wordEmphasisBlack: {
    fontFamily: "Gochi Hand",
    display: "inline",
    fontWeight: 400,
  },
  serviceLine: {
    paddingLeft: theme.spacing(8),
    paddingRight: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  serviceName: {
    padding: theme.spacing(4),
  },
}));

const Services = () => {
  const classes = useStyles();

  const statementText = (
    <c.Typography className={classes.statementText} variant="h5">
      Here at{" "}
      <c.Typography variant="h4" className={classes.wordEmphasisBlue}>
        Tails Wag Dog Training
      </c.Typography>
      , we believe that proper training is crucial in building a strong and
      respectful bond between you and your loyal, loving companion. We work with
      dogs of all ages,{" "}
      <c.Typography variant="h4" className={classes.wordEmphasisBlack}>
        as no dog is too old to learn new tricks.
      </c.Typography>{" "}
      By using motivational, positive reinforcement training techniques Tails
      Wag teaches pet owners the best way to effectively communicate with your
      dog in their own language…canine! We strive to bring out the best of each
      dog and owner and appreciate your suggestions or theories regarding your
      dog's behavior. Our goal is to promote responsible dog ownership and
      educate owners with the tools needed to effectively build{" "}
      <c.Typography variant="h4" className={classes.wordEmphasisBlack}>
        confidence
      </c.Typography>{" "}
      and{" "}
      <c.Typography variant="h4" className={classes.wordEmphasisBlack}>
        obedience
      </c.Typography>
      , while strengthening the bond between you and your dog.
    </c.Typography>
  );

  const servicesStatement = (
    <>
      <div style={{ height: "10vh" }} />
      <WaveTopper opacity="none" layers={1} />

      {statementText}
      <WaveTopper inverted={false} opacity="none" layers={1} />
    </>
  );

  //give service array, map cards
  const ServiceLine = ({ lineName, lineObj }) => {
    return (
      <c.Grid
        container
        direction="column"
        className={classes.serviceLine}
        id="serviceLineContainer"
      >
        <c.Grid item>
          <c.Typography variant="h2" className={classes.serviceName}>
            {lineName}~
          </c.Typography>
        </c.Grid>
        <c.Grid
          container
          item
          direction="row"
          justify="space-evenly"
          style={{ minHeight: "50vh" }}
          id="cardsContainer"
        >
          {lineObj.map((obj) => (
            <ServiceCard lineObj={obj} key={obj.title} />
          ))}
        </c.Grid>
      </c.Grid>
    );
  };

  return (
    <div className={classes.section}>
      {servicesStatement}
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
