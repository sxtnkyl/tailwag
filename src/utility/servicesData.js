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
      icon: icons.clipboardCheck,
      rate: 95,
      interval: "hour",
      description:
        "Private coaching for people who have behavioral issues with their dog or need more specialized, personal training. Some behavioral issues we commonly address and resolve are jumping, biting, mouthing, housebreaking, anxiety, aggression, and more. Tails Wag offers private flexible scheduling in order to help you identify and treat the source of the behavioral issues, while enabling you with the knowledge to prevent future incidents. After first hour, additional time is billed in 15 minute increments at same rate.",
      caption: "",
      chips: [
        {
          title: "free phone consultation",
          color: "blue",
          icon: icons.infoCircle,
        },
        {
          title: "flexible meeting location",
          color: "blue",
          icon: icons.locationCircle,
        },
        {
          title: "flexible scheduling",
          color: "blue",
          icon: icons.checkCircle,
        },
      ],
    },
    {
      title: "Board and Training",
      icon: icons.penAndRuler,
      rate: 120,
      interval: "day",
      description:
        "Board Training requires 1 Private Instruction lesson prior to scheduling. Your dog will stay in our home, and be trained throughout the day where household manners can be addressed in a home environment rather than a kennel. At the end of the scheduled stay, you will receive a turnover session to show what your dog has learned and how to reinforce good behavior while correcting mistakes.",
      caption: "",
      chips: [
        {
          title: "free phone consultation",
          color: "blue",
          icon: icons.infoCircle,
        },
        {
          title: "get take-home assignments",
          color: "blue",
          icon: icons.checkCircle,
        },
      ],
    },
  ],
  boarding: [
    {
      title: "Boarding",
      icon: icons.justSun,
      rate: 60,
      interval: "day",
      description:
        "Available to current and past training clients only. Your dog will stay in my home, in a loving family environment, where someone is home the majority of the time and always at night. Reservations required.",
      caption: "Available to current and past training clients only.",
      chips: [
        {
          title: "current/past clients only",
          color: "red",
          icon: icons.boneCircle,
        },
      ],
    },
    {
      title: "Play Dates",
      icon: icons.tennisBall,
      rate: 35,
      interval: "day",
      description:
        "Your dog will come for a fun day of play! Play dates are held in our home between the hours of 8:30 am and 6:30 pm Monday through Friday. Guests will have plenty of space and friends to run and play with on our enclosed 1/2-acre grounds. Reservations required.",
      caption: "Available to current and past training clients only.",
      chips: [
        {
          title: "current/past clients only",
          color: "red",
          icon: icons.boneCircle,
        },
      ],
    },
    {
      title: "Play and Train",
      icon: icons.groupTrain,
      rate: 75,
      interval: "day",
      description:
        "With hard work comes hard play! Play and Train dates are held in our home between the hours of 8:30am and 6:30pm, Monday through Friday. Guests will have plenty of space and friends to run and play with on our enclosed 1/2-acre grounds while receiving lessons throughout the day. Reservations required.",
      caption: "Available to current and past training clients only.",
      chips: [
        {
          title: "current/past clients only",
          color: "red",
          icon: icons.boneCircle,
        },
      ],
    },
  ],
};

export default serviceData;
