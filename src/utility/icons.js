import React from "react";
//https://tablericons.com/

//icons needed: paw, tailwag, doghouse,

const facebook = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    class="icon icon-tabler icon-tabler-brand-facebook"
    width="44"
    height="44"
    viewBox="0 0 24 24"
    stroke-width="1.5"
    stroke="#2c3e50"
    fill="none"
    stroke-linecap="round"
    stroke-linejoin="round"
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3" />
  </svg>
);

const instagram = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    class="icon icon-tabler icon-tabler-brand-instagram"
    width="44"
    height="44"
    viewBox="0 0 24 24"
    stroke-width="1.5"
    stroke="#2c3e50"
    fill="none"
    stroke-linecap="round"
    stroke-linejoin="round"
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <rect x="4" y="4" width="16" height="16" rx="4" />
    <circle cx="12" cy="12" r="3" />
    <line x1="16.5" y1="7.5" x2="16.5" y2="7.501" />
  </svg>
);

const phone = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    class="icon icon-tabler icon-tabler-phone-call"
    width="44"
    height="44"
    viewBox="0 0 24 24"
    stroke-width="1.5"
    stroke="#2c3e50"
    fill="none"
    stroke-linecap="round"
    stroke-linejoin="round"
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" />
    <path d="M15 7a2 2 0 0 1 2 2" />
    <path d="M15 3a6 6 0 0 1 6 6" />
  </svg>
);

const penAndRuler = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    class="icon icon-tabler icon-tabler-tools"
    width="44"
    height="44"
    viewBox="0 0 24 24"
    stroke-width="1.5"
    stroke="currentColor"
    fill="none"
    stroke-linecap="round"
    stroke-linejoin="round"
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

const icons = { facebook, instagram, phone, penAndRuler };
export default icons;
