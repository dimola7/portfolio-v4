import React from "react";
import styles from "./styles.module.css";
import { ButtonType } from "../types";

const Button = ({ text, color, bgColor }: ButtonType) => {
  return (
    <button
      className={styles.button}
      style={{
        color: color,
        backgroundColor: bgColor,
        border: `1px solid ${bgColor}`,
      }}
    >
      {text}
    </button>
  );
};

export default Button;
