import React from "react";
import icons from "./icons/icons";
//JSON data for tiles
//private instruction > board(daylong) w/ training > board(daylong) no training > play date >  play and train > group obedience > service dog training

// const item: {
//   title: String,
//   icon: JSX,
//   rate: Number
//   description: String,
//   caption: String,
//   chips: OBJ
// }

//chips: arr of objs > {title: "", color: "", icon: ""}

const serviceData = {
  training: [
    {
      title: "Private Instruction",
      icon: icons.PrivateInstruction,
      rate: 95,
      interval: "hour",
      description:
        "Private coaching for people who have behavioral issues with their dog or need more specialized, personal training. Some behavioral issues we commonly address and resolve are jumping, biting, mouthing, housebreaking, anxiety, aggression, and more. Tails Wag offers private flexible scheduling in order to help you identify and treat the source of the behavioral issues, while enabling you with the knowldge to prevent future incidents.",
      caption:
        "Additional time billed in 15 minute increments at the same rate. Trip charges assessed for long distances.",
      chips: [
        {
          title: "free phone consultation",
          color: "blue",
          icon: icons.infoCircle,
        },
      ],
    },
    {
      title: "Board and Training",
      icon: icons.BoardingWithTraining,
      rate: 120,
      interval: "day",
      description:
        "Board Training requires 1 Private Instruction lesson prior to scheduling. Your dog will stay in our home, and be trained throughout the day where household manners can be addressed in a home environment rather than a kennel. At the end of the scheduled stay, you will receive a turnover session to show what your dog has learned and how to reinforce good behavior while correcting mistakes. You will be sent home with a written assessment specific to your dog with homework assignments for success in your home.",
      caption: "",
      chips: [
        {
          title: "free phone consultation",
          color: "blue",
          icon: icons.infoCircle,
        },
        { title: "not nightly", color: "red", icon: icons.xCircle },
      ],
    },
  ],
  boarding: [
    {
      title: "Day Boarding",
      icon: icons.DayBoarding,
      rate: 60,
      interval: "day",
      description:
        "Your dog will stay in my home, in a loving family environment, where someone is home the majority of the time and always at night. Reservations required.",
      caption: "Available to current and past training clients only.",
      chips: [{ title: "not nightly", color: "red", icon: icons.xCircle }],
    },
    {
      title: "Night Boarding",
      icon: icons.DayBoarding,
      rate: 60,
      interval: "night",
      description:
        "Your dog will stay in my home, in a loving family environment, where someone is home the majority of the time and always at night. Reservations required.",
      caption: "Available to current and past training clients only.",
      chips: [{ title: "nightly", color: "blue", icon: icons.checkCircle }],
    },
  ],
  returningClients: [
    {
      title: "Play Dates",
      icon: icons.PlayDate,
      rate: 35,
      interval: "day",
      description:
        "Your dog will come for a fun day of play! Play dates are held in our home between the hours of 8:30 am and 6:30 pm Monday through Friday. Guests will have plenty of space and friends to run and play with on our enclosed 1/2 acre grounds. Reservations required.",
      caption: "Available to current and past training clients only.",
      chips: [
        { title: "returning pups", color: "blue", icon: icons.checkCircle },
      ],
    },
    {
      title: "Play and Train",
      icon: icons.PlayAndTrain,
      rate: 75,
      interval: "day",
      description:
        "With hard work come hard play! Play and Train dates are held in our home between the hours of 8:30 am and 6:30 pm Monday through Friday. Guests will have plenty of space and friends to run and play with on our enclosed 1/2 acre grounds while receiving lessons throughout the day. Reservations required.",
      caption: "Available to current and past training clients only.",
      chips: [
        { title: "returning pups", color: "blue", icon: icons.checkCircle },
      ],
    },
  ],
};

export default serviceData;
