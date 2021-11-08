import { useParams } from "react-router-dom";
import { projectData } from "../data/projects";
import Layout from "../components/Layout/Layout";
import PageCard from "../components/PageCard/PageCard";

const ProjectDetails = () => {
  let { slug }: any = useParams();

  var projects = projectData.filter(function (project) {
    return project.slug === slug;
  });
  console.log(projects);

  return (
    <Layout>
      <PageCard>
        <p>{projects[0].title}</p>
      </PageCard>
    </Layout>
  );
};

export default ProjectDetails;
