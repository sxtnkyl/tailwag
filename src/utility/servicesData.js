import icons from "./icons";
//JSON data for tiles
//private instruction > board(daylong) w/ training > board(daylong) no training > play date >  play and train > group obedience > service dog training

// const item: {
//   title: String,
//   icon: JSX,
//   cost: Number,
//   description: String,
//   caption: String
// }

export default services = {
  privateInstruction: {
    title: "Private Instruction",
    icon: icons.penAndRuler,
    rate: 95,
    interval: "hour",
    description:
      "Private coaching for people who have behavioral issues with their dog or need more personal training.  Some examples of behavioral issues are jumping, biting, mouthing, housebreaking, anxiety, aggression, and more.  Tails Wag offers private flexible scheduling.",
    caption:
      "additional time billed in 15 minute increments at the same rate. Trip charges assessed for long distances",
  },
};
