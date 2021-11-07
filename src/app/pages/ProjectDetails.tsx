import { useParams } from "react-router-dom";
import { projectData } from "../data/projects";
import Layout from "../components/Layout/Layout";
import PageCard from "../components/PageCard/PageCard";

const ProjectDetails = () => {
  let { slug }: any = useParams();
  let project = projectData[slug];
  console.log(project);
  console.log(projectData);
  console.log(slug);
  return (
    <Layout>
      <PageCard>
        <p>ohh</p>
      </PageCard>
    </Layout>
  );
};

export default ProjectDetails;
