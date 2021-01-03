import React from "react";
import theme from "../../theme/theme";
//https://tablericons.com/
import PlayDate from "./svgs/Play_Date.svg";
import BoardingWithTraining from "./svgs/Boarding_with_Training.svg";
import DayBoarding from "./svgs/Day_Boarding.svg";
import GroupObedience from "./svgs/Group_Obedience.svg";
import PlayAndTrain from "./svgs/Play_and_Train.svg";
import PrivateInstruction from "./svgs/Private_Instruction.svg";
import Pawpaw from "./svgs/pawpaw.svg";

import ApproachAbout from "./svgs/approachAbout.svg";
import AccoladesAbout from "./svgs/accoladesAbout.svg";
import ServiceStatement from "./svgs/serviceStatement.svg";
import ContactForm from "./svgs/contactForm.svg";

const alertTriangle = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="icon icon-tabler icon-tabler-alert-triangle"
    width="44"
    height="44"
    viewBox="0 0 24 24"
    strokeWidth="1.5"
    stroke={theme.palette.secondary.main}
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M12 9v2m0 4v.01" />
    <path d="M5 19h14a2 2 0 0 0 1.84 -2.75l-7.1 -12.25a2 2 0 0 0 -3.5 0l-7.1 12.25a2 2 0 0 0 1.75 2.75" />
  </svg>
);

const boneCircle = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="icon icon-tabler icon-tabler-bone"
    width="44"
    height="44"
    viewBox="0 0 24 24"
    strokeWidth="1.5"
    stroke="black"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    {/* <circle cx="12" cy="12" r="9" /> */}
    <g transform="translate(6, 6) scale(0.5)">
      <path d="M15 3a3 3 0 0 1 3 3a3 3 0 1 1 -2.12 5.122l-4.758 4.758a3 3 0 1 1 -5.117 2.297l-.005 -.177l-.176 -.005a3 3 0 1 1 2.298 -5.115l4.758 -4.758a3 3 0 0 1 2.12 -5.122z" />
    </g>
  </svg>
);

const locationCircle = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="icon icon-tabler icon-tabler-live-view"
    width="44"
    height="44"
    viewBox="0 0 24 24"
    strokeWidth="1.5"
    stroke="black"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    {/* <circle cx="12" cy="12" r="9" /> */}
    <line x1="12" y1="11" x2="12" y2="11.01" />
    <g transform="translate(3, 3) scale(0.75)">
      <path d="M12 18l-3.5 -5a4 4 0 1 1 7 0l-3.5 5" />
    </g>
  </svg>
);

const checkCircle = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="icon icon-tabler icon-tabler-circle-check"
    width="44"
    height="44"
    viewBox="0 0 24 24"
    strokeWidth="1.5"
    stroke="black"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    {/* <circle cx="12" cy="12" r="9" /> */}
    <path d="M9 12l2 2l4 -4" />
  </svg>
);

const xCircle = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="icon icon-tabler icon-tabler-circle-x"
    width="44"
    height="44"
    viewBox="0 0 24 24"
    strokeWidth="1.5"
    stroke="black"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    {/* <circle cx="12" cy="12" r="9" /> */}
    <path d="M10 10l4 4m0 -4l-4 4" />
  </svg>
);

const infoCircle = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="icon icon-tabler icon-tabler-info-circle"
    width="44"
    height="44"
    viewBox="0 0 24 24"
    strokeWidth="1.5"
    stroke="black"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    {/* <circle cx="12" cy="12" r="9" /> */}
    <line x1="12" y1="8" x2="12.01" y2="8" />
    <polyline points="11 12 12 12 12 16 13 16" />
  </svg>
);

const oneToOne = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="icon icon-tabler icon-tabler-relation-one-to-one"
    width="44"
    height="44"
    viewBox="0 0 24 24"
    stroke-width="0.75"
    stroke="black"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="M8 10h1v4" />
    <path d="M15 10h1v4" />
    <line x1="12" y1="10.5" x2="12" y2="10.51" />
    <line x1="12" y1="13.5" x2="12" y2="13.51" />
  </svg>
);

const penAndRuler = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="icon icon-tabler icon-tabler-tools"
    width="44"
    height="44"
    viewBox="0 0 24 24"
    strokeWidth="0.75"
    stroke="black"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M3 21h4l13 -13a1.5 1.5 0 0 0 -4 -4l-13 13v4" />
    <line x1="14.5" y1="5.5" x2="18.5" y2="9.5" />
    <polyline points="12 8 7 3 3 7 8 12" />
    <line x1="7" y1="8" x2="5.5" y2="9.5" />
    <polyline points="16 12 21 17 17 21 12 16" />
    <line x1="16" y1="17" x2="14.5" y2="18.5" />
  </svg>
);

const clipboardCheck = ( //private instruction
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="icon icon-tabler icon-tabler-clipboard-check"
    width="44"
    height="44"
    viewBox="0 0 24 24"
    strokeWidth="0.75"
    stroke="black"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M9 5H7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2V7a2 2 0 0 0 -2 -2h-2" />
    <rect x="9" y="3" width="6" height="4" rx="2" />
    <path d="M9 14l2 2l4 -4" />
  </svg>
);

const moonAndStars = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="icon icon-tabler icon-tabler-moon-stars"
    width="44"
    height="44"
    viewBox="0 0 24 24"
    strokeWidth="0.75"
    stroke="black"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M12 3c0.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454z" />
    <path d="M17 4a2 2 0 0 0 2 2a2 2 0 0 0 -2 2a2 2 0 0 0 -2 -2a2 2 0 0 0 2 -2" />
    <path d="M19 11h2m-1 -1v2" />
  </svg>
);

const justSun = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="icon icon-tabler icon-tabler-sun"
    width="44"
    height="44"
    viewBox="0 0 24 24"
    strokeWidth="0.75"
    stroke="black"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <circle cx="12" cy="12" r="4" />
    <path d="M3 12h1m8 -9v1m8 8h1m-9 8v1m-6.4 -15.4l.7 .7m12.1 -.7l-.7 .7m0 11.4l.7 .7m-12.1 -.7l-.7 .7" />
  </svg>
);

const groupTrain = (
  <svg viewBox="0 0 80 80" fill="none" strokeWidth="2">
    <path
      d="M55.8 64H24.2C22.4327 64 21 62.5674 21 60.8V59.593C21 55.0229 23.8269 50.9294 28.1007 49.3107C35.7678 46.4068 44.2322 46.4068 51.8993 49.3107C56.1731 50.9294 59 55.0229 59 59.593V60.8C59 62.5674 57.5673 64 55.8 64Z"
      stroke="black"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M35.1413 39.0779C38.1874 40.6591 41.8125 40.6591 44.8586 39.0779C47.6603 37.6236 49.6632 34.9907 50.3172 31.9025L50.5218 30.936C51.193 27.7662 50.4741 24.4607 48.5471 21.856L48.2168 21.4096C46.2893 18.8044 43.2406 17.2676 40 17.2676C36.7593 17.2676 33.7106 18.8044 31.7832 21.4096L31.4529 21.856C29.5258 24.4607 28.8069 27.7662 29.4781 30.936L29.6828 31.9025C30.3367 34.9907 32.3396 37.6236 35.1413 39.0779Z"
      stroke="black"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M8 56.1332C8 57.1642 8.83574 57.9999 9.86667 57.9999H21.1155C21.6204 54.5443 23.7464 51.5219 26.8385 49.8813C26.5463 49.7119 26.238 49.5643 25.9154 49.4412C21.4618 47.7416 16.5382 47.7416 12.0846 49.4412C9.625 50.3798 8 52.7392 8 55.3718V56.1332Z"
      stroke="black"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M24.9667 39.3064C24.592 41.0891 23.4398 42.611 21.8256 43.4552C20.0555 44.381 17.9442 44.381 16.1741 43.4552C14.5599 42.611 13.4077 41.0891 13.0331 39.3064L12.9032 38.6883C12.5176 36.8535 12.9314 34.9414 14.041 33.4302L14.2514 33.1436C15.3613 31.6321 17.1246 30.7393 18.9999 30.7393C20.8752 30.7393 22.6384 31.6321 23.7483 33.1436L23.9587 33.4302C25.0684 34.9414 25.4821 36.8535 25.0965 38.6883L24.9667 39.3064Z"
      stroke="black"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M70.1332 57.9999H58.8844C58.3797 54.5443 56.2537 51.5218 53.1616 49.8812C53.4537 49.7118 53.7619 49.5643 54.0845 49.4412C58.5382 47.7416 63.4617 47.7416 67.9153 49.4412C70.3749 50.3798 71.9999 52.7392 71.9999 55.3719V56.1332C71.9999 57.1642 71.1642 57.9999 70.1332 57.9999Z"
      stroke="black"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M55.0331 39.3064C55.4077 41.0891 56.5599 42.611 58.1741 43.4552C59.9442 44.381 62.0555 44.381 63.8256 43.4552C65.4398 42.611 66.592 41.0891 66.9667 39.3064L67.0965 38.6883C67.4821 36.8535 67.0684 34.9414 65.9587 33.4302L65.7483 33.1436C64.6384 31.6321 62.8752 30.7393 60.9999 30.7393C59.1246 30.7393 57.3613 31.6321 56.2514 33.1436L56.041 33.4302C54.9314 34.9414 54.5176 36.8535 54.9032 38.6883L55.0331 39.3064Z"
      stroke="black"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const medicalClipboard = (
  <svg viewBox="0 0 80 80" fill="none">
    <path
      d="M22 13H30C30 15.2091 31.7909 17 34 17H46C48.2091 17 50 15.2091 50 13H58C60.2091 13 62 14.7909 62 17V65C62 67.2091 60.2091 69 58 69H22C19.7909 69 18 67.2091 18 65V17C18 14.7909 19.7909 13 22 13Z"
      stroke="black"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M30 13C30 10.7909 31.7909 9 34 9H46C48.2091 9 50 10.7909 50 13C50 15.2091 48.2091 17 46 17H34C31.7909 17 30 15.2091 30 13Z"
      stroke="black"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M37 8C37 7.44772 37.4477 7 38 7H42C42.5523 7 43 7.44772 43 8C43 8.55228 42.5523 9 42 9H38C37.4477 9 37 8.55228 37 8Z"
      stroke="black"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M35.9999 52.3078C35.9999 53.4123 36.8954 54.3078 37.9999 54.3078H41.9999C43.1045 54.3078 43.9999 53.4123 43.9999 52.3078L43.9999 46.0385C43.9999 46.0174 44.0171 46.0002 44.0383 46.0002H50.3075C51.4121 46.0002 52.3075 45.1048 52.3075 44.0002V40.0002C52.3075 38.8956 51.4121 38.0002 50.3075 38.0002H44.0385C44.0172 38.0002 43.9999 37.9829 43.9999 37.9616L44 31.6924C44 30.5878 43.1045 29.6924 42 29.6924L38 29.6924C36.8954 29.6924 36 30.5878 36 31.6924L35.9999 37.9616C35.9999 37.9829 35.9827 38.0002 35.9614 38.0002H29.6921C28.5876 38.0002 27.6921 38.8956 27.6921 40.0002L27.6921 44.0002C27.6921 45.1048 28.5876 46.0002 29.6921 46.0002L35.9616 46.0002C35.9828 46.0002 35.9999 46.0174 35.9999 46.0385V52.3078Z"
      stroke="black"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const tennisBall = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="icon icon-tabler icon-tabler-ball-tennis"
    width="44"
    height="44"
    viewBox="0 0 24 24"
    strokeWidth="0.75"
    stroke="black"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <circle cx="12" cy="12" r="9" />
    <path d="M6 5.3a9 9 0 0 1 0 13.4" />
    <path d="M18 5.3a9 9 0 0 0 0 13.4" />
  </svg>
);

const icons = {
  penAndRuler,
  PlayDate,
  BoardingWithTraining,
  DayBoarding,
  GroupObedience,
  PlayAndTrain,
  PrivateInstruction,
  Pawpaw,
  alertTriangle,
  boneCircle,
  locationCircle,
  checkCircle,
  xCircle,
  infoCircle,
  ApproachAbout,
  AccoladesAbout,
  ServiceStatement,
  ContactForm,
  oneToOne,
  clipboardCheck,
  moonAndStars,
  justSun,
  groupTrain,
  medicalClipboard,
  tennisBall,
};
export default icons;
