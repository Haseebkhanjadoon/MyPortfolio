import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/img1.png";
import projImg3 from "../assets/img/img3.png";
import projImg6 from "../assets/img/img6.png";
import projImg7 from "../assets/img/img7.png";
import projImg8 from "../assets/img/img8.png";
import projImg9 from "../assets/img/img9.png";
import projImg5 from "../assets/img/img5.png";
import projImg4 from "../assets/img/img4.png";
import projImg10 from "../assets/img/img10.png";
import projImg11 from "../assets/img/img11.png";
import projImg12 from "../assets/img/img12.png";
import projImg13 from "../assets/img/img13.png";
import ems1 from "../assets/img/ems1.png";
import ems2 from "../assets/img/ems2.png";
import ems3 from "../assets/img/ems3.png";
import ems4 from "../assets/img/ems4.png";
import ems5 from "../assets/img/ems5.png";
import ems6 from "../assets/img/ems6.png";
import ems7 from "../assets/img/ems7.png";
import ems8 from "../assets/img/ems8.png";
import ems9 from "../assets/img/ems9.png";
import ems10 from "../assets/img/ems10.png";
import atn1 from "../assets/img/atn1.png";
import atn2 from "../assets/img/atn2.png";
import atn3 from "../assets/img/atn3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Glaucoma Detection ",
      description: "Web Application",
      imgUrl: projImg1,
    },
    {
      title: "Glaucoma Detection ",
      description: "Web Application",
      imgUrl: projImg3,
    },
    {
      title: "Glaucoma Detection ",
      description: "Web Application",
      imgUrl: projImg6,
    },
    {
      title: "Glaucoma Detection ",
      description: "Web Application",
      imgUrl: projImg7,
    },
    {
      title: "Glaucoma Detection ",
      description: "Web Application",
      imgUrl: projImg8,
    },
    {
      title: "Glaucoma Detection ",
      description: "Web Application",
      imgUrl: projImg9,
    },
    {
      title: "Glaucoma Detection ",
      description: "Web Application",
      imgUrl: projImg5,
    },
    {
      title: "Glaucoma Detection ",
      description: "Web Application",
      imgUrl: projImg4,
    },
    {
      title: "Glaucoma Detection ",
      description: "Web Application",
      imgUrl: projImg10,
    },
    {
      title: "Glaucoma Detection ",
      description: "Web Application",
      imgUrl: projImg12,
    },
    {
      title: "Glaucoma Detection ",
      description: "Web Application",
      imgUrl: projImg13,
    },
    {
      title: "Glaucoma Detection ",
      description: "Web Application",
      imgUrl: projImg11,
    },
  ];

  const emsProjects = [
    {
      title: "EMS ",
      description: "Employee Management System",
      imgUrl: ems1,
    },
    {
      title: "EMS ",
      description: "Employee Management System",
      imgUrl: ems2,
    },
    {
      title: "EMS ",
      description: "Employee Management System",
      imgUrl: ems3,
    },
    {
      title: "EMS ",
      description: "Employee Management System",
      imgUrl: ems4,
    },
    {
      title: "EMS ",
      description: "Employee Management System",
      imgUrl: ems5,
    },
    {
      title: "EMS ",
      description: "Employee Management System",
      imgUrl: ems6,
    },
    {
      title: "EMS ",
      description: "Employee Management System",
      imgUrl: ems7,
    },
    {
      title: "EMS ",
      description: "Employee Management System",
      imgUrl: ems8,
    },
    {
      title: "EMS ",
      description: "Employee Management System",
      imgUrl: ems9,
    },
    {
      title: "EMS ",
      description: "Employee Management System",
      imgUrl: ems10,
    },
  ];

  const atnProjects = [
    {
      title: "AMS ",
      description: "Attendance Management System",
      imgUrl: atn1,
    },
    {
      title: "AMS ",
      description: "Attendance Management System",
      imgUrl: atn2,
    },
    {
      title: "AMS ",
      description: "Attendance Management System",
      imgUrl: atn3,
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
                <h2>Projects</h2>
                <p>
                  "Showcasing a diverse range of projects highlighting my expertise in front-end development, responsive design, and seamless back-end integration. Each project reflects my passion for creating innovative and user-friendly solutions."
                </p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Project 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Project 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Project 3</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {projects.map((project, index) => {
                          return (
                            <ProjectCard
                              key={index}
                              {...project}
                            />
                          );
                        })}
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <Row>
                        {emsProjects.map((project, index) => {
                          return (
                            <ProjectCard
                              key={index}
                              {...project}
                            />
                          );
                        })}
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <Row>
                        {atnProjects.map((project, index) => {
                          return (
                            <ProjectCard
                              key={index}
                              {...project}
                            />
                          );
                        })}
                      </Row>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>
              }
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="Background" />
    </section>
  );
};
