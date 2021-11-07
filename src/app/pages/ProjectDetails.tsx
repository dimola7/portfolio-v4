import { useParams } from "react-router-dom";
import Layout from "../components/Layout/Layout";
import PageCard from "../components/PageCard/PageCard";

const ProjectDetails = () => {
  let { slug }: any = useParams();
  return (
    <Layout>
      <PageCard>
        <p>hmm {slug}</p>
      </PageCard>
    </Layout>
  );
};

export default ProjectDetails;
