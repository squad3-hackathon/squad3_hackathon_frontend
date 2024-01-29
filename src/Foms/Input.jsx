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
  placeholder,
}) => {
  return (
    <>
      <fieldset className={styles.fieldset}>
        <legend>{legend}</legend>
        <input
          id={name}
          name={name}
          type={type}
          value={value}
          onBlur={onBlur}
          placeholder={placeholder}
          onChange={onChange}
          className={styles.input}
        />
        {fieldset}
      </fieldset>
      {error && <p className={styles.error}>{error}</p>}
    </>
  );
};

export default Input;
