import React from "react";
import styles from "./Input.module.css";

const Input = ({
  fieldset,
  onBlur,
  type,
  name,
  value,
  onChange,
  error,
  legend,
  isRequired,
}) => {
  return (
    <>
      <fieldset
        className={`${styles.fieldset} ${error ? styles.errorInput : ""}`}
      >
        <legend>
          {legend}
          {isRequired && <span> * </span>}
        </legend>
        <input
          id={name}
          name={name}
          type={type}
          value={value}
          onBlur={onBlur}
          onChange={onChange}
          className={`${styles.input} `}
        />
        {fieldset}
      </fieldset>
      {error && <p className={styles.error}>{error}</p>}
    </>
  );
};

export default Input;
