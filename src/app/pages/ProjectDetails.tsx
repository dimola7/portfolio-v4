import { useParams } from "react-router-dom";

const ProjectDetails = () => {
  let { slug }: any = useParams();
  return (
    <div>
      <p>hmm {slug}</p>
    </div>
  );
};

export default ProjectDetails;
