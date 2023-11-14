import { useState } from "react";
import Link from "next/link";
import { FaBars } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import { NavData } from "../../data/navbar";
import styles from "./navbar.module.css";

const SideBar = () => {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <div className={styles.sideBar}>
      <FaBars onClick={showSidebar} size="25" className={styles.bars} />
      <nav className={sidebar ? styles.navMenuActive : styles.navMenu}>
        <ul className={styles.navMenuItems}>
          <Link href="#" className={styles.menuBars}>
            <AiOutlineClose onClick={() => setSidebar(false)} color="#fff" />
          </Link>
          {NavData.map((item, i) => (
            <li key={i} className={styles.navText}>
              <Link href={item.path}>
                {item.icon}
                <span>{item.title}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default SideBar;
