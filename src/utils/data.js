import React from "react";

/* import React Icons  */
import {
  BsBasket2,
  BsPerson,
  BsFacebook,
  BsInstagram,
  BsEnvelope,
} from "react-icons/bs";

import julie from "../assets/julie.webp";
import david from "../assets/dave.webp";

/* Links for the navbar */
export const links = [
  { id: 1, text: "accueil", url: "/" },
  { id: 2, text: "la distillerie", url: "/about" },
  { id: 3, text: "nos produits", url: "/products" },
];

/* Social Links */
export const socialLinks = [
  {
    id: 1,
    url: "https://www.facebook.com/Cest-Nous-Gin-1048316498579754/",
    icon: <BsFacebook />,
  },
  {
    id: 2,
    url: "https://www.instagram.com/distilleriecestnous/",
    icon: <BsInstagram />,
  },
  {
    id: 3,
    url: "#",
    icon: <BsEnvelope />,
  },
];

/* Bio */
export const bio = [
  {
    id: 1,
    founderName: "Julie",
    bio: "Après avoir étudié l'hôtellerie, la restauration & la sommellerie, Julie a travaillé pour plusieurs établissements en Normandie avant de se rendre en Angleterre. Au delà d'une langue, elle a découvert la culture du gin.",
    quote: "G&T time everyone ! ",
    img: julie,
  },
  {
    id: 1,
    founderName: "David",
    bio: "Après ses études, David a évolué dans le management hôtelier dans la région du Buckinghamshire et à Londres. En s'installant en France, il a réalisé que la scène britannique du gin lui manquait.",
    quote:
      "After arriving in France we noticed a lack of craft micro distilleries in France. With experience in hospitality and with a sommelier on the team we decided to create our own spirits! ",
    img: david,
  },
];
/* Products */
export const products = [];
