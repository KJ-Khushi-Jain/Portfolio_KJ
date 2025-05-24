import React from "react";
import { Col, Row, OverlayTrigger, Tooltip } from "react-bootstrap";
import {
  DiGit,
  DiGithub,
} from "react-icons/di";
import {
  SiVisualstudiocode,
  SiPostman,
  SiDocker,
  SiKubernetes,
  SiGooglecloud,
} from "react-icons/si";

function Toolstack() {
  const tools = [
    { icon: <DiGit />, name: "Git" },
    { icon: <DiGithub />, name: "GitHub" },
    { icon: <SiDocker />, name: "Docker" },
    { icon: <SiKubernetes />, name: "Kubernetes" },
    { icon: <SiGooglecloud />, name: "Google Cloud Platform" },
    { icon: <SiVisualstudiocode />, name: "VS Code" },
    { icon: <SiPostman />, name: "Postman" }
  ];

  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {tools.map((tool, idx) => (
        <Col xs={4} md={2} className="tech-icons" key={idx}>
          <OverlayTrigger
            placement="top"
            overlay={<Tooltip id={`tooltip-${idx}`}>{tool.name}</Tooltip>}
          >
            <span>{tool.icon}</span>
          </OverlayTrigger>
        </Col>
      ))}
    </Row>
  );
}

export default Toolstack;
