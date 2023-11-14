import React from 'react'
import Image from 'next/image'
import { isScreenWidthBelow } from '../../../utils';
import Button from '../Button';
import { APP_IMAGES } from '../../constants/gallery';
import styles from "./styles.module.css";
import { skills } from '../../data/skills';

const HomeHeader = () => {
    const width_800 = isScreenWidthBelow(800);
  return (
    <div className={styles.header}>
        <div className={styles.image_div}>
          <Image
            src={APP_IMAGES.me}
            alt="adedimola Ogidan"
            layout="responsive"
            width={402}
            height={500}
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
                height={width_800 ? 40 : 64}
                width={width_800 ? 40 : 64}
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
  )
}

export default HomeHeader