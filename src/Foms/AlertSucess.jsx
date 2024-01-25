import React from "react";
import styles from "./AlertSucess.module.css";
import { CheckCircleIcon, WarningIcon } from "@chakra-ui/icons";

const alertSucess = () => {
  return (
    <span className={styles.alertSucess}>
      <CheckCircleIcon style={{ marginRight: "1rem" }} />
      Cadastro feito com sucesso
    </span>
  );
};

export default alertSucess;
