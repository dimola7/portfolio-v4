import {ReactNode} from "react";
import Styled from "styled-components";
import ParticlesBackground from "../ParticlesBackground";
import Navbar from "../Navbar/Navbar";
import "../../../App.css";

interface Props {
  children: ReactNode
}

const Layout = ({ children }: Props) => {
  return (
    <div style={{ maxHeight: "100vh" }}>
      <ParticlesBackground />
      <LayoutContainer>
        <Navbar />
        <div>{children}</div>
      </LayoutContainer>
    </div>
  );
};

export default Layout;

const LayoutContainer = Styled.div`
  margin: 0 1rem;

  @media screen and (min-width: 1000px) {
    margin: 0 6rem;
  }

  @media screen and (max-width: 999px) and (min-width: 660px) {
    margin: 0 4rem;
  }
`;
