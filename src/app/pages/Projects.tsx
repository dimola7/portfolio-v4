import { Link } from "react-router-dom";
import Layout from "../components/Layout/Layout";
import PageCard from "../components/PageCard/PageCard";
import { projectData } from "../data/projects";
import styled from "styled-components";

const Projects = () => {
  return (
    <Layout>
      <PageCard>
        <Header>Projects</Header>
        <Text>Some of my recent works</Text>
        <ProjectsFlex>
          {projectData.map((project) => (
            <Link to={`/projects/${project.slug}`} key={project.id}>
              <ProjectCard>
                <ProjectImg src={project.image} alt="" />
                <p>{project.title}</p>
              </ProjectCard>
            </Link>
          ))}
        </ProjectsFlex>
      </PageCard>
    </Layout>
  );
};

export default Projects;

const Header = styled.h1`
  @media only screen and (max-width: 800px) {
    font-size: 1.3rem;
  }
`;

const Text = styled.p`
  font-size: 1.3rem;
  margin-top: 10px;
  margin-bottom: 20px;
  font-weight: 500;

  @media only screen and (max-width: 800px) {
    font-size: 1rem;
  }
`;
const ProjectsFlex = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 80px;
  justify-content: center;

  @media only screen and (max-width: 1430px) {
    margin: 0;
    gap: 20px;
  }
`;
const ProjectCard = styled.div`
  width: 500px;
  max-height: 350px;
  box-shadow: 0 0 1.2rem rgba(0, 0, 0, 0.25);
  border-radius: 4px;
  object-fit: contain;
  margin-bottom: 50px;
  transition: all 0.2s ease-in-out;
  text-align: center;
  font-family: "Acme", sans-serif;
  cursor: pointer;

  @media only screen and (max-width: 800px) {
    width: 95%;
  }

  &:hover {
    transform: scale(1.1);
  }
`;
const ProjectImg = styled.img`
  width: 100%;
  max-height: 287px;
`;
