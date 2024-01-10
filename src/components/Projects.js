import { Container, Row, Col } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import screenshot from "../assets/img/scrrenshot.png"
import { FaGoogle, FaReact, FaGithub, FaLink } from "react-icons/fa6";
import { SiTailwindcss } from "react-icons/si";

export const Projects = () => {

  const projects = [
    {
      title: "Google Clone",
      description: "Information Search Platform",
      imgUrl: screenshot,
      tech: [<FaGoogle />, <FaReact />, <FaGithub />, <SiTailwindcss />, <FaLink />],
      link: "https://google-clone-madhukar.vercel.app/"
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <Row>
                    <Col size={7} className="mx-auto">
                      <h2>Projects</h2>
                      <p>In this section, you'll discover a collection of projects that I've personally developed. Explore each project by clicking on it to delve into its details and witness my work firsthand.</p>
                    </Col>
                  </Row>
                  <Row>
                    {
                      projects.map((project, index) => {
                        return (
                          <ProjectCard
                            key={index}
                            {...project}
                          />
                        )
                      })
                    }
                  </Row>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}