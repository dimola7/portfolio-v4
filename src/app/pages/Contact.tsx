import { useState } from "react";
import styled from "styled-components";
import Layout from "../components/Layout/Layout";
import PageCard from "../components/PageCard/PageCard";
import { FaGithub, FaLinkedinIn, FaCodepen } from "react-icons/fa";
import { ToastContainer } from "react-toastify";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {

  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("")

    const submitForm = (e:any) => {
        var url = "https://formspree.io/f/mpzbyjly";
        var request = new XMLHttpRequest();
        request.open('POST', url, true);

        // request failed
        request.onerror = function() {
          console.log("request failed")
        };
        
        request.send(new FormData(e.target));
        e.preventDefault();

        setName("")
        setEmail("")
        setMessage("")

        // request successful
        toast.success("Submitted!", {
          position: "top-center",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
      });
     }

  return (
    <Layout>
      <PageCard>
        <ToastContainer theme="dark"/>
        <ContactDiv>
          <h1>Contact</h1>
          <p>
            I'm currently open to opportunities, if you wanna get in touch, fill
            up the form below or send an{" "}
            <a href="mailto:adedimolaogidan@gmail.com">email</a> and let's talk
          </p>
          <form onSubmit={submitForm} className="contacts">
            <div className="inputflex">
              <div>
                <label htmlFor="name">Your Name</label>
                <input type="text" id="name" name="name" placeholder="name" value={name}
                  onChange={(e) => setName(e.target.value)} required/>
              </div>
              <div>
                <label htmlFor="email">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
            </div>
            <label>Message</label>
            <textarea
              id="message"
              name="message"
              cols={30}
              rows={10}
              placeholder="your message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            ></textarea>
            <div className="button">
              <button>Send Message</button>
            </div>
          </form>
        </ContactDiv>
        <CardFooter>
          <div>
            <a href="https://github.com/dimola7" target="_blank" rel="noreferrer">
              <FaGithub />
            </a>
            <p>Gibhub</p>
          </div>
          <div>
            <a
              href="https://www.linkedin.com/in/dimola-ogidan-4671b2a6/"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedinIn />
            </a>
            <p>LinkedIn</p>
          </div>
          <div>
            <a href="https://codepen.io/dimola" target="_blank" rel="noreferrer">
              <FaCodepen />
            </a>
            <p>CodePen</p>
          </div>
        </CardFooter>
      </PageCard>
    </Layout>
  );
};

const ContactDiv = styled.div`
  h1 {
    font-size: 1.3rem;
  }
  p {
    margin-bottom: 2rem;
    font-weight: 500;
    font-size: 1rem;
    a {
      color: #ffab00;
    }
  }
  label {
    display: block;
    font-weight: 600;
    margin-bottom: 10px;
  }
  input,
  textarea {
    border-radius: 4px;
    border: none;
    color: #000;
    margin-bottom: 20px;
    width: calc(100% - 5px);
    padding: 0.3rem;
    font-size: 1rem;
  }

  input {
    height: 3rem;
    margin-bottom: 2rem;
  }

  textarea {
    height: 150px;
  }
  button {
    height: 3rem;
    font-size: 1rem;
    font-weight: 600;
    border-radius: 4px;
    border: 1px solid #ffab00;
    cursor: pointer;
    transition: 0.4s;
    padding: 0.5rem;
    margin-top: 1.2rem;
    background-color: #ffab00;
    color: #252627;

    &:hover {
      color: #ffab00;
      background-color: transparent;
    }
  }
  .button {
    display: flex;
    justify-content: flex-end;
  }
  .inputflex {
    display: flex;
    gap: 1.5rem;
    flex-direction: column;
  }

  @media only screen and (min-width: 830px) {
    .contacts {
      display: grid;
      justify-content: center;
    }
    p {
      font-size: 1.1rem;
    }
    textarea {
      width: 42rem;
    }
    input {
      width: 20rem;
      resize: none;
      height: 3rem;
    }
    .inputflex {
      display: flex;
      gap: 1.5rem;
      flex-direction: row;
    }
    h1 {
      font-size: 2rem;
    }
  }
`;

const CardFooter = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin-top: 2rem;
  font-size: 25px;
  cursor: pointer;

  div{
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  p{
    font-size: 13px;
    margin-top: -2px;
  }
`;

export default Contact;
