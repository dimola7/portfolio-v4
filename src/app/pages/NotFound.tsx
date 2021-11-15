import Layout from "../components/Layout/Layout";
import PageCard from "../components/PageCard/PageCard";
import styled from "styled-components";

const NotFound = () => {
  return (
    <Layout>
      <PageCard>
        <Bad>
          <h1>
            404 <br /> not found
          </h1>
        </Bad>
      </PageCard>
    </Layout>
  );
};

export default NotFound;

const Bad = styled.div`
  display: grid;
  place-content: center;
`;
