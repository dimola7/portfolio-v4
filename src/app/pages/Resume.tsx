import Layout from "../components/Layout/Layout";
import PageCard from "../components/PageCard/PageCard";
import { experienceData, educationData } from "../data/résumé";
import styled from "styled-components";

const Resume = () => {
  return (
    <Layout>
      <PageCard>
        <Header>Résumé</Header>
        <HeaderDiv>
          <p>Learn more about my skills, qualifications and experiences.</p>
        </HeaderDiv>
        <ContentDiv>
          <div className="content">
            <div className="left-content">
              <h2>Work Experience</h2>
              <p>PRESENT & PREVIOUS JOBS</p>
            </div>
            <div className="right-content">
              <WorkDiv>
                {experienceData.map((experience) => (
                  <div className="work" key={experience.id}>
                    <p className="work__timeline">
                      {experience.timeline.from} - {experience.timeline.to}
                    </p>
                    <h3>{experience.role}</h3>
                    <p className="company">{experience.company}</p>
                    <p className="summary">{experience.summary} </p>
                  </div>
                ))}
              </WorkDiv>
            </div>
          </div>

          <div className="content">
            <div className="left-content">
              <h2>Education</h2>
              <p>ACADEMIC CAREER</p>
            </div>
            <div className="right-content">
              <EducationDiv>
                {educationData.map((education) => (
                  <div key={education.id}>
                    <h3>{education.degree}</h3>
                    <p className="school">{education.school}</p>
                    <p className="timeline">
                      {education.timeline.from} - {education.timeline.to}
                    </p>
                  </div>
                ))}
              </EducationDiv>
            </div>
          </div>
        </ContentDiv>
      </PageCard>
    </Layout>
  );
};

export default Resume;

const Header = styled.h1`
  margin-bottom: 30px;
  
  @media only screen and (max-width: 800px) {
    font-size: 1.3rem;
  }
`;

const HeaderDiv = styled.header`
  margin-bottom: 40px;

  p {
    margin-top: 0;
    font-size: 1.2em;
    font-weight: 500;

    @media only screen and (max-width: 800px) {
      font-size: 1rem;
    }
  }
`;
const ContentDiv = styled.div`
  .content {
    display: flex;
    align-items: flex-start;
    margin-bottom: 60px;

    :first-of-type {
      flex-shrink: 0;
    }

    @media only screen and (max-width: 800px) {
      flex-direction: column;
    }
  }
  p {
    font-size: 1rem;
  }
  h2 {
    @media only screen and (max-width: 500px) {
      font-size: 1.3rem;
    }
  }
  .left-content {
    margin-right: 20px;
    width: calc(35% - 20px);
    max-width: 350px;

    @media only screen and (max-width: 800px) {
      width: 100%;
    }
  }
  .right-content {
    width: 65%;
    position: relative;

    @media only screen and (max-width: 800px) {
      width: 100%;
    }
  }
`;

const WorkDiv = styled.div`
  .work {
    margin-bottom: 30px;
    margin-top: 15px;
  }
  h3 {
    font-size: 1.3em;
    color: #fff;
    margin: 0;
    text-transform: uppercase;

    @media only screen and (max-width: 500px) {
      font-size: 1.1em;
    }
  }
  .work__timeline {
    color: #ffab00;
  }
  .company {
    color: #D3D3D3;
    font-size: 1em;
    font-weight: 600;
    margin: 0;
    margin-top: 3px;
  }
  .timeline {
    color: #ffab00;
    font-size: 1.1em;
    margin: 0;
    margin-bottom: 5px;
  }
  .summary {
    white-space: pre-wrap;
    line-height: 24px;
    margin-top: 10px;
  }
  @media only screen and (max-width: 500px) {
    font-size: 1em;
  }
`;

const EducationDiv = styled.div`
  div {
    position: relative;
    margin-bottom: 40px;
  }

  h3 {
    margin: 0 0 5px;
    color: #c5bab5;
    text-transform: uppercase;
    font-size: 1.3em;
  }
  .timeline {
    display: inline-block;
    background: rgba(214, 228, 28, 0.3);
    padding: 10px;
    font-weight: bolder;
    border-radius: 5px;
    margin-bottom: 0;
    margin-top: 10px;
    font-size: 0.8em;
    color: #fff;
  }
  .school {
    font-style: italic;
    margin: 0;
  }

  @media only screen and (max-width: 500px) {
    h3 {
      font-size: 1.1em;
    }
  }
`;
