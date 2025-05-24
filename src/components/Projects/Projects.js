import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import EazyMove from "../../Assets/Projects/4_EazyMove.png";
import Parallel_and_Distributed_Computing from "../../Assets/Projects/6_PADC.png";
import Bypass_Broker from "../../Assets/Projects/3_Bypass_broker.png";
import Sustainable_cloud from "../../Assets/Projects/1_sustainable_cloud.png";
import ClubManagement from "../../Assets/Projects/5_Club.png";
import RxEase from "../../Assets/Projects/2_RxEase.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Sustainable_cloud}
              isBlog={false}
              title="Sustainable Cloud - Energy Aware Dynamic Resourse Management"
              description="Helps in prior prediction of server temperature so that scheduling can be done to reduce the workload of the server."
              ghLink="https://github.com/KJ-Khushi-Jain/Sustainable-Cloud-Computing/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={RxEase}
              isBlog={false}
              title="RxEase"
              description=" Developing an AI model to recognize and interpret doctors' handwriting using Image Processing.Implementing neural network techniques for accurate text prediction."
              ghLink="https://github.com/KJ-Khushi-Jain/RxEase"
              // demoLink="https://404.html"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Bypass_Broker}
              isBlog={false}
              title="Bypass Broker"
              description=" Developed a property listing platform that displays available hostel/PG/homestays based on user input,such as location, check-in/check-out dates, and occupancy type (student/parent). Integrated multiple payment gateways, automated bill notifications, and applied restriction filters to refine search results."
              ghLink="https://github.com/soumyajit4419/Editor.io"
              // demoLink="https://editor.soumya-jit.tech/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={EazyMove}
              isBlog={false}
              title="EazyMove"
              description=" Engineered a gesture-based system to control the cursor dynamically without a mouse.Smooth pointer movement, seamless selection via hand contractions, and three-finger swipe gestures for
 quick tab navigation."
              ghLink="https://github.com/KJ-Khushi-Jain/EazyMove"
              // demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ClubManagement}
              isBlog={false}
              title="Club Management"
              description="Developed a web-based portal to manage the operations of IIIT Kottayam’s cultural clubs, including
 Wildbeats and other clubs."
              ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Parallel_and_Distributed_Computing}
              isBlog={false}
              title="Parallel and Distributed Computing"
              description="Designed Parallel and Distributed Algorithms for Hash Join and Dijkstra's Algorithm reducing their time complexities.Also, these solutions where included as the part of our curriculum as a Manual."
              // ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
