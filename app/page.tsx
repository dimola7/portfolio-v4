"use client";
// import { useRef, useEffect } from "react";
// import Link from "next/link";
// import { gsap } from "gsap";
import Layout from "./components/Layout/Layout";
import styles from "./page.module.css";
import { APP_IMAGES } from "./constants/gallery";
import Image from "next/image";
import { skills } from "../data/skills";
import Button from "./components/Button";

export default function Home() {
  // const introRef = useRef<any | null>(null);

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
        <div>
          <Image
            src={APP_IMAGES.me}
            alt={"adedimola Ogidan"}
            height={500}
            width={402}
            objectFit="cover"
          />
        </div>
        <div className={styles.headerContent}>
          <h1>
            Hello! I’m <span>Adedimola Ogidan</span>
          </h1>
          <h2>{"<Software Engineer />"}</h2>
          <p className={styles.stack}>
            JavaScript / TypeScript / React / NextJS
          </p>
          <h3>About Me</h3>
          <p>
            I am creative Frontend Engineer based in Lagos, Nigeria. I develop
            responsive, pixel-perfect websites, web applications, and innovative
            web-based solutions.{" "}
          </p>
          <p>
            While my primary expertise lies in frontend development, I also
            possess valuable hands-on experience with backend development.
          </p>
          <p>Here's a glimpse into my development toolkit:</p>
          <div className={styles.skills}>
            {skills.map((icon: any, i: any) => (
              <Image
                src={icon.icon}
                alt={icon.alt}
                title={icon.title}
                height={64}
                width={64}
                key={i}
              />
            ))}
          </div>
          <div className={styles.buttons}>
            <Button
              text={"Get in touch"}
              color={"#000114"}
              bgColor={"#00FFE5"}
              route="/NotFound"
            />
            <Button
              text={"View my resume"}
              color={"#EEEFF1"}
              bgColor={"#171724"}
              route="/resume"
            />
          </div>
        </div>
      </div>
    </Layout>
  );
}
