import React from "react";
import styles from "./styles.module.css";
import { projectData } from "../../../data/projects";
import { RightArrowIcon } from "../../../public/icons/RightArrowIcon";
import Image from "next/image";
import { APP_IMAGES } from "../../constants/gallery";

const Projects = () => {
  return (
    <div className={styles.projects}>
      <h1>Projects</h1>
      <p>Some of my recent work</p>

      <div className={styles.project_cards}>
        {projectData.map((project) => (
          <div className={styles.card} key={project.id}>
            <p>{project.title}</p>
            <h3>Brief description of the project and what you did</h3>
            <button>
              Learn More
              <RightArrowIcon />
            </button>
            <div className={styles.image_div}>
              <Image
                src={project.image}
                alt={project.title}
                // layout="responsive"
                width={453}
                height={251}
                objectFit="fill"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
