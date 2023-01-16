import React from "react";

/* import React Icons  */
import {
  BsBasket2,
  BsPerson,
  BsFacebook,
  BsInstagram,
  BsEnvelope,
} from "react-icons/bs";

/* Links for the navbar */
export const links = [
  { id: 1, text: "accueil", url: "/" },
  { id: 2, text: "la distillerie", url: "/about" },
  { id: 3, text: "nos produits", url: "/about" },
];
export const navButtons = [
  { id: 1, text: "panier", icon: <BsBasket2 /> },
  { id: 1, text: "se connecter", icon: <BsPerson /> },
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

/* Products */
export const products = [];
