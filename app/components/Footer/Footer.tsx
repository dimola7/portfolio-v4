import React from "react";
import Link from "next/link";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import styles from "./styles.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer_div}>
      <div className={styles.icon_div}>
        Get in touch. 
        <Link href="https://github.com/dimola7" target="_blank">
          <FaGithub />
        </Link>
        <Link
          href="https://www.linkedin.com/in/adedimola-ogidan"
          target="_blank"
        >
          <FaLinkedinIn />
        </Link>
        <Link
          href="mailto:adedimolaogidan@gmail.com"
        >
          <MdEmail />
        </Link>
      </div>
      <p>
        &copy; 2023 <span>Adedimola Ogidan</span> All Rights Reserved
      </p>
      <div className={styles.contact}></div>
    </footer>
  );
};

export default Footer;
