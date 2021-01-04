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
    [theme.breakpoints.down("lg")]: {
      marginTop: "3vh",
      textAlign: "center",
      marginBottom: "10vh",
    },
    "& .MuiGrid-container": {
      [theme.breakpoints.down("lg")]: {
        justifyContent: "center",
      },
    },
  },
  container: {
    minHeight: "88vh",
    padding: theme.spacing(12),
    [theme.breakpoints.down("lg")]: {
      padding: `${theme.spacing(8)}px ${theme.spacing(4)}px`,
    },
    [theme.breakpoints.down("md")]: {
      padding: `${theme.spacing(4)}px ${theme.spacing(2)}px`,
    },
    "& #textArea": {
      paddingLeft: theme.spacing(6),
      [theme.breakpoints.down("md")]: {
        order: -1,
        padding: `${theme.spacing(4)}px ${theme.spacing(2)}px`,
      },
    },
    "& #textAreaContent": {
      paddingBottom: theme.spacing(4),
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
  actionButtons: {
    width: "50%",
    marginTop: theme.spacing(2),
    color: "black",
    background: theme.palette.secondary.main,
    filter: theme.palette.shadows.loweredFilterShadow,
    padding: theme.spacing(1),
    [theme.breakpoints.down("md")]: {
      width: "30%",
    },
    [theme.breakpoints.down("sm")]: {
      width: "50%",
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
  requestedServices: [],
  commonIssues: [],
  additionalDetails: "",
};

const Contact = () => {
  const classes = useStyles();
  const MotionButton = motion.custom(c.Button);
  const MotionSubmit = motion.custom(c.Button);

  const { handleSubmit, control, errors } = useForm({ defaultValues });
  const [submitted, setSubmitted] = useState(true);
  const [sending, setSending] = useState(false);
  useEffect(() => {
    //signals successful submit for 30 seconds
    setTimeout(() => {
      setSubmitted(false);
    }, 5000);
  }, [submitted]);

  const submitActions = async (data) => {
    // let url = "some aws sms endpoint";
    setSending(true);
    console.log(data);
    // fetch(url, {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //     Origin: "some future domain",
    //   },
    //   body: JSON.stringify(data),
    // })
    //   .then((response) => response.json())
    //   .then((data) => {
    //     console.log("Success:", data);
    //     setSubmitted(true);
    //   })
    //   .catch((error) => {
    //     console.error("frontend Error:", error);
    //   });
  };

  const onError = (errors) => {
    console.log(errors);
    const phone = document.getElementById("formGroup-Client");
    phone.scrollIntoView({ behavior: "smooth" });
  };

  const form = (
    <form
      onSubmit={handleSubmit(submitActions, onError)}
      className={classes.form}
    >
      <c.Card className={classes.card}>
        <div className={classes.formSection}>
          <c.CardContent id="formGroup-Client">
            <c.Typography variant="h4">Client Info</c.Typography>
            <c.Grid container spacing={2}>
              <c.Grid item xs={12} lg={6}>
                <Controller
                  as={
                    <c.TextField
                      id="firstName"
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
                      id="lastName"
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
                      id="phoneNumber"
                      label="Phone Number"
                      variant="outlined"
                      size="small"
                    />
                  }
                  name="phone"
                  control={control}
                  rules={{
                    required: true,
                  }}
                />
                {errors.phone && (
                  <c.Typography
                    variant="button"
                    component={"span"}
                    style={{ color: theme.palette.secondary.main }}
                  >
                    *phone number is required
                  </c.Typography>
                )}
              </c.Grid>

              <c.Grid item xs={12} lg={6}>
                <Controller
                  as={
                    <c.TextField
                      id="email"
                      label="Email"
                      variant="outlined"
                      size="small"
                    />
                  }
                  name="email"
                  control={control}
                />
              </c.Grid>
            </c.Grid>
          </c.CardContent>

          <c.CardContent id="formGroup-Doggy">
            <c.Typography variant="h4">Dog Info</c.Typography>
            <c.Grid container spacing={2}>
              <c.Grid item xs={12} lg={4}>
                <Controller
                  as={
                    <c.TextField
                      id="dogName"
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
                      id="dogAge"
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
                      id="dogBreed"
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
                        name="spayedNeutered"
                      >
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
                  <c.InputLabel htmlFor="services">
                    I'm interested in these services...
                  </c.InputLabel>
                  <Controller
                    as={
                      <c.Select
                        label="I'm interested in these services..."
                        multiple={true}
                      >
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
                    name="requestedServices"
                    control={control}
                  />
                </c.FormControl>
              </c.Grid>
              <c.Grid item xs={12} lg={6}>
                <c.FormControl variant="outlined" size="small">
                  <c.InputLabel htmlFor="commonIssues">
                    My Dog Needs Help With...
                  </c.InputLabel>
                  <Controller
                    as={
                      <c.Select
                        label="My Dog Needs Help With..."
                        multiple={true}
                      >
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
                      id="additionalInfo"
                      label="Tell us about your dog!"
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
              color="primary"
            >
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
        <c.Grid id="form-container" container item md={10} lg={7}>
          <FadeIn slide={-50} triggerPoint={0.1}>
            {form}
          </FadeIn>
        </c.Grid>
        <c.Grid
          item
          container
          md={12}
          lg={5}
          justify="center"
          alignContent="center"
          alignItems="center"
          id="textArea"
        >
          <c.Typography variant="h5" id="textAreaContent">
            I find simple phone calls are the best path to productive
            connections with future clients, where we can discuss your dog and
            get to know each other a bit more. Feel free to call at your
            convenience on my cell phone below, or fill out our contact form to
            get a quick response.
          </c.Typography>
          <c.Typography
            component={"div"}
            variant="h3"
            style={{
              ...theme.typography.wordEmphasisBlack,
              marginBottom: theme.spacing(2),
              width: "100%",
            }}
          >
            Get in touch quickly!
          </c.Typography>
          <MotionButton
            className={classes.actionButtons}
            variant="outlined"
            fullWidth
            whileHover={{
              y: -5,
            }}
          >
            <c.Link
              href="tel:+1-404-272-0985"
              target="_blank"
              rel="noopener noreferrer"
              alt="link to phone call"
              style={{ textDecoration: "none", color: "black" }}
            >
              <c.Typography variant="h5">(404) 272-0985</c.Typography>
            </c.Link>
          </MotionButton>
        </c.Grid>
      </c.Grid>
    </div>
  );
};

export default Contact;
