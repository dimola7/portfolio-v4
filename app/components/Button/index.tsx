import React from "react";
import styles from "./styles.module.css";
import { ButtonType } from "../types";
import { useRouter } from "next/navigation";

const Button = ({ text, color, bgColor, route }: ButtonType) => {
  const router = useRouter();

  return (
    <button
      className={styles.button}
      style={{
        color: color,
        backgroundColor: bgColor,
        border: `1px solid ${bgColor}`,
      }}
      type="button"
      onClick={() => router.push(route)}
    >
      {text}
    </button>
  );
};

export default Button;
