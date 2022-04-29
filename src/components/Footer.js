import classes from "./Footer.module.css";
import React from "react";

const Footer = () => {
  return (
    <footer className={classes.footer}>
      <h2>Data by TMDB Api</h2>
      <h2>Coded by Khaizter</h2>
    </footer>
  );
};

export default Footer;
