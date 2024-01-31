import React from "react";
import styles from "./ButtonRegister.module.css";

const ButtonRegister = ({ children, ...props }) => {
  return (
    <button {...props} className={styles.button}>
      {children}
    </button>
  );
};

export default ButtonRegister;
