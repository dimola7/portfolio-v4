import { useParams, Link } from "react-router-dom";
import { projectData } from "../data/projects";
import Layout from "../components/Layout/Layout";
import PageCard from "../components/PageCard/PageCard";
import styled from "styled-components";

const ProjectDetails = () => {
  let { slug }: any = useParams();

  let projects = projectData.filter((project) => project.slug === slug);
  let project = projects[0];

  return (
    <Layout>
      <PageCard>
        <Back to="/projects">
          <p>Back</p>
        </Back>
        <ProjectDiv>
          <div>
            <Img src={project.image} alt="" />
          </div>
          <div>
            <h2>{project.title}</h2>
            <p>{project.description}</p>
            <p>
              <span>Technologies used:</span> {project.stacks}
            </p>
            <Buttons>
              {project.url ? (
                <a href={project.url} target="_blank" rel="noreferrer">
                  <button>View Site</button>
                </a>
              ) : (
                <button>Coming soon</button>
              )}
              {project.github && (
                <a href={project.github} target="_blank" rel="noreferrer">
                  <button>Github</button>
                </a>
              )}
            </Buttons>
          </div>
        </ProjectDiv>
      </PageCard>
    </Layout>
  );
};

export default ProjectDetails;

const Back = styled(Link)`
  p {
    margin-bottom: 40px;
  }
`;

const ProjectDiv = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;

  @media only screen and (max-width: 1300px) {
    grid-template-columns: 1fr;
    grid-gap: 10px;
  }

  span {
    font-weight: 600;
  }
`;

const Buttons = styled.div`
  display: flex;
  gap: 5px;

  button {
    width: 180px;
    height: 40px;
    background-color: #ffab00;
    color: #252627;
    border: none;
    border-radius: 4px;
    font-weight: 500;
    font-size: 16px;
    cursor: pointer;

    &:hover {
      background-color: transparent;
      color: #ffab00;
      border: 1px solid #ffab00;
    }

    @media only screen and (max-width: 800px) {
      width: 120px;
      height: 40px;
    }
  }
`;

const Img = styled.img`
  width: 500px;

  @media only screen and (max-width: 800px) {
    width: 300px;
  }
`;
