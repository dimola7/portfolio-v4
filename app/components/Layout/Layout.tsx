import { ReactNode } from "react";
import ParticlesBackground from "../ParticlesBackground";
import Navbar from "../Navbar/Navbar";
import "./layout.css";
import styles from "./layout.module.css";
import Footer from "../Footer/Footer";

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
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
