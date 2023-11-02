import { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Layout from "../app/components/Layout/Layout";
import Footer from "../app/components/Footer/Footer";
import { Span } from "../app/components/styles/text.styles";
import { gsap } from "gsap";

const Home = () => {
  const introRef = useRef<any | null>(null);

  useEffect(() => {
    gsap.from(introRef.current, {
      opacity: 0,
      duration: 1,
      y: -50,
      stagger: 0.2,
    });
  }, []);
  return (
    <Layout>
      <Header>
        <div ref={introRef}>
          <h2>
            Hi, <br /> I'm <Span color="#ffab00">Adedimola Ogidan</Span>,{" "}
          </h2>
          <h3>Software Engineer.</h3>
          <p>JavaScript / TypeScript / React / NextJS</p>
          <Button to="/projects">My projects</Button>
        </div>
      </Header>
      <Footer />
    </Layout>
  );
};

export default Home;

const Header = styled.section`
  display: grid;
  align-items: center;
  margin: 80px 0;

  @media screen and (min-width: 1200px) {
    grid-template-columns: 1fr 1fr;
    grid-gap: 40px;
    margin: 150px 0;
  }
  @media screen and (min-width: 800px) {
    margin: 130px 0;
  }

  h2 {
    font-size: 1.8rem;

    @media screen and (min-width: 600px) {
      font-size: 2.5rem;
      font-weight: 900;
    }
  }
  h3 {
    font-size: 1.3rem;
    font-weight: 500;
    margin-top: 20px;

    @media screen and (min-width: 600px) {
      font-size: 2rem;
    }
  }
  p {
    letter-spacing: 3px;
    word-spacing: 10px;
    font-size: 0.8rem;
    font-weight: 600;
  }
`;

const Button = styled(Link)`
  margin-top: 20px;
  padding: 10px 22px;
  background-color: none;
  border: 3px solid #ffab00;
  border-radius: 8px;
  color: #ffab00;
  font-size: 0.8rem;
  letter-spacing: 2px;
  position: relative;
  overflow: hidden;
  transition: 0.5s;
  display: inline-block;
  text-decoration: none;
  font-weight: 500;

  &:hover {
    color: #fff;
    text-decoration: none;
  }

  &::before {
    content: "";
    background-color: #ffab00;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 0%;
    z-index: -1;
    transition: 0.5s;
  }

  &:hover::before {
    height: 100%;
  }
  @media screen and (min-width: 660px) {
    padding: 12px 25px;
  }
`;
