import styled from "styled-components";

const PageCard = ({ children }: any) => {
  return <Card>{children}</Card>;
};

export default PageCard;

const Card = styled.div`
  background-color: #3d3d3d;
  box-shadow: 0 0 1.2rem rgba(0, 0, 0, 0.25);
  padding: 50px;
  position: relative;
  z-index: 1;
  height: 540px;
  overflow-y: auto;
`;
