//map locator > connection statement > contact form
// https://www.youtube.com/watch?v=-mFXqOaqgZk&ab_channel=BillLuo

import React from "react";
import { useForm, Controller } from "react-hook-form";
import { makeStyles } from "@material-ui/core";
import * as c from "@material-ui/core";
import theme from "../theme/theme";
import useFade from "../utility/hooks/useFade";
import icons from "../utility/icons/icons";
import { ReactComponent as Pawpaw } from "../utility/icons/svgs/pawpaw.svg";

const useStyles = makeStyles((theme) => ({
  section: {
    minHeight: "100vh",
    marginTop: "10vh",
    backgroundImage: `url(${icons.ContactForm})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  },
  container: {},
  card: {
    height: "80vh",
    background:
      "linear-gradient(130deg, rgba(179, 229, 252, 1) 0%, rgba(33, 150, 243, 0.75) 100%)",
    filter: `drop-shadow(2px 2px 4px ${useFade(
      theme.palette.primary.dark,
      0.8
    )})`,
    borderBottomLeftRadius: theme.spacing(16),
    borderTopRightRadius: theme.spacing(8),
    borderRadius: theme.spacing(2),
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
};

const Contact = () => {
  const classes = useStyles();
  const { handleSubmit, control } = useForm({ defaultValues });

  const form = (
    <form
      onSubmit={handleSubmit((data) => console.log(data))}
      className={classes.form}>
      <c.Card className={classes.card}>
        <div className={classes.formSection}>
          <c.CardContent id="formGroup">
            <c.Typography
              variant="h4"
              style={{ paddingBottom: theme.spacing(2) }}>
              Client Info
            </c.Typography>
            <c.Grid container spacing={4}>
              <c.Grid item xs>
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
              <c.Grid item xs>
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
            </c.Grid>

            <c.Grid container spacing={4}>
              <c.Grid item xs>
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
              <c.Grid item xs>
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

          <c.CardContent id="formGroup">
            <c.Typography
              variant="h4"
              style={{ paddingBottom: theme.spacing(2) }}>
              Doggy Details
            </c.Typography>
            <c.Grid container spacing={4}>
              <c.Grid item xs>
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
              <c.Grid item xs>
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
              <c.Grid item xs>
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
            </c.Grid>

            <c.Grid container spacing={4}>
              <c.Grid item xs>
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
              <c.Grid item xs>
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
            </c.Grid>
            <c.Grid container>
              <c.Grid item xs>
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

          <c.CardContent id="formGroup">
            <c.Typography
              variant="h4"
              style={{ paddingBottom: theme.spacing(2) }}>
              Addition Details
            </c.Typography>
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
            <c.Button
              type="submit"
              variant="outlined"
              style={{ alignSelf: "flex-end", height: "50px", width: "100px" }}
              endIcon={<Pawpaw />}
              color="primary">
              SUBMIT
            </c.Button>
          </c.CardContent>
        </div>
      </c.Card>
    </form>
  );

  return (
    <div className={classes.section}>
      <c.Grid container className={classes.container}>
        <c.Grid container item xs justify="center">
          {form}
        </c.Grid>
        <c.Grid
          id="findMe"
          item
          xs
          container
          justify="center"
          alignContent="center"
          alignItems="center"
          direction="column"
          style={{ paddingRight: theme.spacing(4) }}>
          <c.Grid
            item
            style={{
              paddingLeft: theme.spacing(16),
              paddingRight: theme.spacing(16),
              paddingBottom: theme.spacing(8),
            }}>
            <c.Typography variant="h6" style={{ fontFamily: "Open Sans" }}>
              I find simple phone calls are the best path to productive
              connections with future clients, where we can discuss your dog and
              get to know each other a bit more. Feel free to call at your
              convenience on my cell phone below, or fill out our contact form
              to get a quick response.
            </c.Typography>
          </c.Grid>
          <c.Grid
            container
            item
            direction="column"
            justify="center"
            alignContent="center">
            <c.Grid item>
              <c.Typography
                component={"div"}
                variant="h4"
                style={theme.typography.wordEmphasisBlue}>
                Give us a call!
              </c.Typography>
            </c.Grid>
            <c.Grid item>
              <c.Typography
                variant="h4"
                style={theme.typography.wordEmphasisBlack}>
                (404) 272-0985
              </c.Typography>
            </c.Grid>
          </c.Grid>
        </c.Grid>
      </c.Grid>
    </div>
  );
};

export default Contact;
