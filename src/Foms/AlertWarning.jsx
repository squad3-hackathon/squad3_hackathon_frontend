import React from "react";
import styles from "./AlertWarning.module.css";
import { WarningIcon } from "@chakra-ui/icons";

const AlertWarning = () => {
  return (
    <span className={styles.AlertWarning}>
      <WarningIcon style={{ marginRight: "1rem" }} />
      Ocorreu um erro ao tentar realizar o cadastro
    </span>
  );
};

export default AlertWarning;
