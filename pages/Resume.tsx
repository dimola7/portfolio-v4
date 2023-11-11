import Layout from "../app/components/Layout/Layout";
import { experienceData, educationData } from "../data/résumé";
import styles from "../styles/resume.module.css";

const Resume = () => {
  return (
    <Layout>
        <h1 className={styles.header}>Résumé</h1>
        <header className={styles.headerDiv}>
          <p>Learn more about my skills, qualifications and experiences.</p>
        </header>
        <div className={styles.contentDiv}>
          <div className={styles.content}>
            <div className={styles.leftContent}>
              <h2>Work Experience</h2>
              <p>PRESENT & PREVIOUS JOBS</p>
            </div>
            <div className={styles.rightContent}>
              <div className={styles.workDiv}>
                {experienceData.map((experience) => (
                  <div className={styles.work} key={experience.id}>
                    <p className={styles.work__timeline}>
                      {experience.timeline.from} - {experience.timeline.to}
                    </p>
                    <h3>{experience.role}</h3>
                    <p className={styles.company}>{experience.company}</p>
                    <p className={styles.summary}>{experience.summary} </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className={styles.content}>
            <div className={styles.leftContent}>
              <h2>Education</h2>
              <p>ACADEMIC CAREER</p>
            </div>
            <div className={styles.rightContent}>
              <div className={styles.educationDiv}>
                {educationData.map((education) => (
                  <div key={education.id}>
                    <h3>{education.degree}</h3>
                    <p className={styles.school}>{education.school}</p>
                    <p className={styles.timeline}>
                      {education.timeline.from} - {education.timeline.to}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
    </Layout>
  );
};

export default Resume;




