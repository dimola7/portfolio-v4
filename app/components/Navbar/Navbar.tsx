import Link from "next/link";
import SideBar from "./SideBar";
import { NavData } from "../../../data/navbar";
import styles from "./navbar.module.css";

const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <h1 className={styles.logo}>Adedimola</h1>
      <div className={styles.linkFlex}>
        {NavData.map((item, i) => (
          <Link href={item.path} key={i} className={styles.navLinks}>
            {item.title}
          </Link>
        ))}
      </div>
      <SideBar />
    </nav>
  );
};

export default Navbar;