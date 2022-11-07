import { gsap } from "gsap";
import Styled from "styled-components";
import { FaGithub, FaTwitter, FaLinkedinIn, FaGitlab } from "react-icons/fa";
import { Text, Span } from "../styles/text.styles";

interface Props {
  backgroundColor: string;
}

const Footer = () => {
  const onEnter = ({ currentTarget }: any) => {
    gsap.to(currentTarget, { rotation: "+=360" });
  };
  const onLeave = ({ currentTarget }: any) => {
    gsap.to(currentTarget, { rotation: "-360" });
  };

  return (
    <FooterDiv>
      <IconDiv className="social-network social-circle">
        <IconList>
          <IconLink
            href="https://gitlab.com/dimola"
            backgroundColor="#fc6d26"
            target="_blank"
          >
            <FaGitlab onMouseEnter={onEnter} onMouseLeave={onLeave} />
          </IconLink>
        </IconList>
        <IconList>
          <IconLink
            href="https://www.linkedin.com/in/adedimola-ogidan"
            backgroundColor="#007bb7"
            target="_blank"
          >
            <FaLinkedinIn onMouseEnter={onEnter} onMouseLeave={onLeave} />
          </IconLink>
        </IconList>
        <IconList>
          <IconLink
            href="https://github.com/dimola7"
            backgroundColor="#2d3436"
            target="_blank"
          >
            <FaGithub onMouseEnter={onEnter} onMouseLeave={onLeave} />
          </IconLink>
        </IconList>
        <IconList>
          <IconLink
            href="https://twitter.com/dimola_"
            backgroundColor="#44bcdd"
            target="_blank"
          >
            <FaTwitter onMouseEnter={onEnter} onMouseLeave={onLeave} />
          </IconLink>
        </IconList>
      </IconDiv>

      <Text
        color="#bbb"
      >
        Adedimola Ogidan <Span color="#ffab00">&copy; 2021</Span>
      </Text>
    </FooterDiv>
  );
};

export default Footer;

const FooterDiv = Styled.footer`
  display: grid;
  grid-template-columns: 1fr 7fr;
  justify-content: start;
  align-items: center;
  height: 3.5rem;
  margin-left: 0;
  margin-top: auto;
  position: absolute;
  bottom: 0;
  
  @media screen and (max-width: 660px) {
    grid-template-columns: 1fr;
    margin: auto;
    left: 0;
    right: 0;
}
  }
`;
const IconDiv = Styled.div`
  display: flex;
  justify-content: center;
  gap: 7px;
`;
export const IconList = Styled.div`
  line-height: 35px;
`;
const IconLink = Styled.a<Props>`
  background-color: #fff;
  display: inline-block;
  position: relative;
  margin: 0 auto 0 auto;
  -moz-border-radius: 50%;
  -webkit-border-radius: 50%;
  border-radius: 50%;
  text-align: center;
  width: 30px;
  height: 30px;
  font-size: 15px;

  * {
    fill: #595959;
  }

  &:hover {
    background-color: ${(props: any) => props.backgroundColor};

    * {
      fill: #fff;
    }
  }
`;
