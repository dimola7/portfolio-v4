"use client";
import { useRef, useEffect } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import Layout from "./components/Layout/Layout";
import Footer from "./components/Footer/Footer";
import styles from "./page.module.css";
import { APP_IMAGES } from "./constants/gallery";
import Image from "next/image";

export default function Home() {
  const introRef = useRef<any | null>(null);

  // useEffect(() => {
  //   if (introRef.current) {
  //     gsap.from(introRef.current, {
  //       opacity: 0,
  //       duration: 1,
  //       y: -50,
  //       stagger: 0.2,
  //     });
  //   }
  // }, []);
  return (
    <Layout>
      <div className={styles.header}>
        <div className={styles.image}>
          <div>
            <Image
              src={APP_IMAGES.me}
              alt={"adedimola Ogidan"}
              height={500}
              width={330}
              objectFit="cover"
            />
          </div>
        </div>
        <div ref={introRef} className={styles.left}>
          <h2>
            Hi, <br /> I'm <span>Adedimola Ogidan</span>,{" "}
          </h2>
          <h3>Software Engineer.</h3>
          <p>JavaScript / TypeScript / React / NextJS</p>
          <Link href="/projects" passHref className={styles.button}>
            My projects
          </Link>
        </div>
      </div>
      <Footer />
    </Layout>
  );
}
