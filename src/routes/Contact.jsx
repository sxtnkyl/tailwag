import React, { useState, useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import { motion } from "framer-motion";
import { makeStyles } from "@material-ui/core";
import * as c from "@material-ui/core";
import theme from "../theme/theme";
import FadeIn from "../utility/hooks/useFadeIn";
import useFade from "../utility/hooks/useFade";
import icons from "../utility/icons/icons";
import { ReactComponent as Pawpaw } from "../utility/icons/svgs/pawpaw.svg";

const useStyles = makeStyles((theme) => ({
  page: {
    minHeight: "100vh",
    marginTop: "10vh",
    backgroundImage: `url(${icons.ContactForm})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    padding: theme.spacing(12),
    [theme.breakpoints.down("md")]: {
      padding: `${theme.spacing(4)}px ${theme.spacing(2)}px`,
      textAlign: "center",
      marginBottom: "10vh",
    },
  },
  container: {
    [theme.breakpoints.down("md")]: {
      flexDirection: "column-reverse",
    },
    "& #textArea": {
      paddingLeft: theme.spacing(6),
      paddingBottom: theme.spacing(8),
      [theme.breakpoints.down("md")]: {
        padding: theme.spacing(0),
      },
    },
  },
  form: {
    [theme.breakpoints.down("md")]: {
      marginTop: theme.spacing(4),
    },
  },
  formSection: {
    background: "white",
    height: "90%",
    marginLeft: theme.spacing(2),
    marginTop: theme.spacing(2),
    paddingRight: theme.spacing(6),
    paddingLeft: theme.spacing(4),
    borderRadius: theme.spacing(2),
    borderBottomLeftRadius: theme.spacing(16),
    "& h4": {
      paddingBottom: theme.spacing(2),
    },
    [theme.breakpoints.down("md")]: {
      borderBottomLeftRadius: theme.spacing(8),
      borderTopRightRadius: theme.spacing(2),
      padding: `${theme.spacing(2)}px ${theme.spacing(0)}px`,
      "& .MuiCardContent-root": {
        paddingLeft: "0px",
      },
      "& .MuiGrid-item": {
        padding: "0px 8px",
      },
    },
  },
  card: {
    minHeight: "80vh",
    background:
      "linear-gradient(130deg, rgba(179, 229, 252, 1) 0%, rgba(33, 150, 243, 0.75) 100%)",
    filter: `drop-shadow(2px 2px 4px ${useFade(
      theme.palette.primary.dark,
      0.8
    )})`,
    borderBottomLeftRadius: theme.spacing(16),
    borderTopRightRadius: theme.spacing(8),
    borderRadius: theme.spacing(2),
    [theme.breakpoints.down("md")]: {
      borderBottomLeftRadius: theme.spacing(8),
      borderTopRightRadius: theme.spacing(2),
    },
  },
}));

const defaultValues = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  dogName: "",
  dogGender: "",
  dogBreed: "",
  dogAge: "",
  spayedNuetered: "",
  additionalDetails: "",
  commonIssues: [],
  services: [],
};

const Contact = () => {
  const classes = useStyles();
  const MotionSubmit = motion.custom(c.Button);

  const { handleSubmit, control } = useForm({ defaultValues });
  const [submitted, setSubmitted] = useState(true);
  const [sending, setSending] = useState(false);
  useEffect(() => {
    //signals successful submit for 30 seconds
    setTimeout(() => {
      setSubmitted(false);
    }, 10000);
  }, [submitted]);

  const submitActions = async (e, data) => {
    let url = "some aws sms endpoint";
    const formData = data;
    setSending(true);
    e.preventDefault();

    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Origin: "some future domain",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
        setSending(false);
        setSubmitted(true);
      })
      .catch((error) => {
        console.error("frontend Error:", error);
      });
  };

  const form = (
    <form
      onSubmit={handleSubmit((data) => submitActions(data))}
      className={classes.form}>
      <c.Card className={classes.card}>
        <div className={classes.formSection}>
          <c.CardContent id="formGroup-Client">
            <c.Typography variant="h4">Client Info</c.Typography>
            <c.Grid container spacing={2}>
              <c.Grid item xs={12} lg={6}>
                <Controller
                  as={
                    <c.TextField
                      label="First Name"
                      variant="outlined"
                      size="small"
                    />
                  }
                  name="firstName"
                  control={control}
                />
              </c.Grid>
              <c.Grid item xs={12} lg={6}>
                <Controller
                  as={
                    <c.TextField
                      label="Last Name"
                      variant="outlined"
                      size="small"
                    />
                  }
                  name="lastName"
                  control={control}
                />
              </c.Grid>

              <c.Grid item xs={12} lg={6}>
                <Controller
                  as={
                    <c.TextField
                      label="Email"
                      variant="outlined"
                      size="small"
                    />
                  }
                  name="email"
                  control={control}
                />
              </c.Grid>
              <c.Grid item xs={12} lg={6}>
                <Controller
                  as={
                    <c.TextField
                      label="Phone Number"
                      variant="outlined"
                      size="small"
                    />
                  }
                  name="phone"
                  control={control}
                />
              </c.Grid>
            </c.Grid>
          </c.CardContent>

          <c.CardContent id="formGroup-Doggy">
            <c.Typography variant="h4">Doggy Details</c.Typography>
            <c.Grid container spacing={2}>
              <c.Grid item xs={12} lg={4}>
                <Controller
                  as={
                    <c.TextField
                      label="Dog's Name"
                      variant="outlined"
                      size="small"
                    />
                  }
                  name="dogName"
                  control={control}
                />
              </c.Grid>
              <c.Grid item xs={12} lg={4}>
                <Controller
                  as={
                    <c.TextField
                      label="My Dog's Age Is..."
                      variant="outlined"
                      size="small"
                    />
                  }
                  name="dogAge"
                  control={control}
                />
              </c.Grid>
              <c.Grid item xs={12} lg={4}>
                <Controller
                  as={
                    <c.TextField
                      label="My Dog's Breed Is..."
                      variant="outlined"
                      size="small"
                    />
                  }
                  name="dogBreed"
                  control={control}
                />
              </c.Grid>
              <c.Grid item xs={12} lg={6}>
                <c.FormControl variant="outlined" size="small">
                  <c.InputLabel htmlFor="dogGender">
                    My Dog's Gender Is...
                  </c.InputLabel>
                  <Controller
                    as={
                      <c.Select label="My Dog's Gender Is...">
                        <c.MenuItem value="male">Male</c.MenuItem>
                        <c.MenuItem value="female">Female</c.MenuItem>
                      </c.Select>
                    }
                    name="dogGender"
                    control={control}
                  />
                </c.FormControl>
              </c.Grid>
              <c.Grid item xs={12} lg={6}>
                <c.FormControl variant="outlined" size="small">
                  <c.InputLabel htmlFor="Spayed/Nuetered">
                    My Dog Is Spayed/Neutered...
                  </c.InputLabel>
                  <Controller
                    as={
                      <c.Select
                        label="My Dog Is Spayed/Neutered..."
                        name="spayedNeutered">
                        <c.MenuItem value="yes">Yes</c.MenuItem>
                        <c.MenuItem value="no">No</c.MenuItem>
                      </c.Select>
                    }
                    name="spayedNuetered"
                    control={control}
                  />
                </c.FormControl>
              </c.Grid>

              <c.Grid item xs={12} lg={6}>
                <c.FormControl variant="outlined" size="small">
                  <c.InputLabel htmlFor="suggestedIssues">
                    I'm interested in these services...
                  </c.InputLabel>
                  <Controller
                    as={
                      <c.Select
                        label="I'm interested in these services..."
                        multiple={true}>
                        <c.MenuItem value={[]}></c.MenuItem>
                        <c.MenuItem value="privateInstruction">
                          Private Instruction
                        </c.MenuItem>
                        <c.MenuItem value="boardAndTraining">
                          Board and Training
                        </c.MenuItem>
                        <c.MenuItem value="dayBoarding">
                          Day Boarding
                        </c.MenuItem>
                        <c.MenuItem value="nightBoarding">
                          Night Boarding
                        </c.MenuItem>
                        <c.MenuItem value="playDates">Play Dates</c.MenuItem>
                        <c.MenuItem value="playAndTrain">
                          Play and Training
                        </c.MenuItem>
                      </c.Select>
                    }
                    name="commonIssues"
                    control={control}
                  />
                </c.FormControl>
              </c.Grid>
              <c.Grid item xs={12} lg={6}>
                <c.FormControl variant="outlined" size="small">
                  <c.InputLabel htmlFor="suggestedIssues">
                    My Dog Needs Help With...
                  </c.InputLabel>
                  <Controller
                    as={
                      <c.Select
                        label="My Dog Needs Help With..."
                        multiple={true}>
                        <c.MenuItem value={[]}></c.MenuItem>
                        <c.MenuItem value="puppyTraining">
                          Puppy Training
                        </c.MenuItem>
                        <c.MenuItem value="houseBreaking">
                          House Breaking
                        </c.MenuItem>
                        <c.MenuItem value="socialization">
                          Socialization
                        </c.MenuItem>
                        <c.MenuItem value="obedience">Obedience</c.MenuItem>
                        <c.MenuItem value="aggresionModification">
                          Aggression Modification
                        </c.MenuItem>
                      </c.Select>
                    }
                    name="commonIssues"
                    control={control}
                  />
                </c.FormControl>
              </c.Grid>
            </c.Grid>
          </c.CardContent>

          <c.CardContent id="formGroup-Additional">
            <c.Typography variant="h4">Addition Details</c.Typography>
            <c.Grid container>
              <c.Grid item xs>
                <Controller
                  as={
                    <c.TextField
                      placeholder="Tell us about your dog, or how we can help!"
                      variant="outlined"
                      size="small"
                      multiline
                    />
                  }
                  name="additionalDetails"
                  control={control}
                />
              </c.Grid>
            </c.Grid>
          </c.CardContent>
          <c.CardContent id="submitButton">
            <MotionSubmit
              whileHover={{ fontWeight: 700 }}
              type="submit"
              variant="outlined"
              disabled={sending}
              style={{
                alignSelf: "flex-end",
                height: "50px",
                width: "100px",
              }}
              endIcon={<Pawpaw />}
              color="primary">
              SUBMIT
            </MotionSubmit>
          </c.CardContent>
        </div>
      </c.Card>
    </form>
  );

  return (
    <div className={classes.page}>
      <c.Grid container className={classes.container}>
        <c.Grid id="form-container" container item xs justify="center">
          <FadeIn slide={-50}>{form}</FadeIn>
        </c.Grid>
        <c.Grid
          id="text-container"
          item
          xs
          container
          style={theme.mixins.formats.centeredFlex}>
          <c.Grid item id="textArea">
            <c.Typography variant="h5">
              I find simple phone calls are the best path to productive
              connections with future clients, where we can discuss your dog and
              get to know each other a bit more. Feel free to call at your
              convenience on my cell phone below, or fill out our contact form
              to get a quick response.
            </c.Typography>
          </c.Grid>
          <c.Grid container item style={theme.mixins.formats.centeredFlex}>
            <c.Grid item>
              <c.Typography
                component={"div"}
                variant="h3"
                style={theme.typography.wordEmphasisBlue}>
                Give us a call!
              </c.Typography>
            </c.Grid>
            <c.Grid item>
              <FadeIn slide={50} delay={1.25}>
                <c.Typography
                  component={"div"}
                  variant="h3"
                  style={theme.typography.wordEmphasisBlack}>
                  <c.Link
                    href="tel:+1-404-272-0985"
                    target="_blank"
                    rel="noopener noreferrer"
                    alt="link to phone call">
                    (404) 272-0985
                  </c.Link>
                </c.Typography>
              </FadeIn>
            </c.Grid>
          </c.Grid>
        </c.Grid>
      </c.Grid>
    </div>
  );
};

export default Contact;
