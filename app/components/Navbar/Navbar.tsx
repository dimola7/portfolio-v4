import Link from "next/link";
import SideBar from "./SideBar";
import { NavData } from "../../../data/navbar";
import styles from "./navbar.module.css";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();

  return (
    <nav className={styles.nav}>
      <h1 className={styles.logo}>Adedimola</h1>
      <div className={styles.linkFlex}>
        {NavData.map((item, i) => (
          <Link
            href={item.path}
            key={i}
            className={`${styles.navLinks} ${
              pathname === item.path ? styles.active : ""
            }`}
          >
            {item.title}
          </Link>
        ))}
      </div>
      <SideBar />
    </nav>
  );
};

export default Navbar;
