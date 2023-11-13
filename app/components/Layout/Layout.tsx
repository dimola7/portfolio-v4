import { ReactNode } from "react";
import ParticlesBackground from "../ParticlesBackground";
import Navbar from "../Navbar/Navbar";
import "./layout.css";
import styles from "./layout.module.css";

interface Props {
  children: ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <div className="container">
      {/* <ParticlesBackground /> */}
      <div className={styles.layoutContainer}>
        <Navbar />
        <div>{children}</div>
      </div>
    </div>
  );
};

export default Layout;
