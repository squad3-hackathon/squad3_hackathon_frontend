import React from "react";
import styles from "./BackButton.module.css";

const BackButton = ({ children }) => {
  return <button className={styles.backButton}>{children}</button>;
};

export default BackButton;
