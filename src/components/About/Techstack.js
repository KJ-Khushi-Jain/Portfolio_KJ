import React from "react";
import { Col, Row, OverlayTrigger, Tooltip } from "react-bootstrap";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiJava,
  DiHtml5,
  DiCss3,
} from "react-icons/di";
import {
  SiC,
  SiTensorflow,
  SiPytorch,
  SiKeras,
  SiOpencv,
  SiScikitlearn,
  SiPandas,
  SiNumpy,
  SiDjango,
  SiMysql,
  SiSqlite,
  SiFlutter,
  SiDart,
} from "react-icons/si";
import { CgCPlusPlus } from "react-icons/cg";

function Techstack() {
  const techs = [
    { icon: <SiC />, name: "C" },
    { icon: <CgCPlusPlus />, name: "C++" },
    { icon: <DiPython />, name: "Python" },
    { icon: <DiJava />, name: "Java" },
    { icon: <SiTensorflow />, name: "TensorFlow" },
    { icon: <SiPytorch />, name: "PyTorch" },
    { icon: <SiKeras />, name: "Keras" },
    { icon: <SiOpencv />, name: "OpenCV" },
    { icon: <SiScikitlearn />, name: "Scikit-learn" },
    { icon: <SiPandas />, name: "Pandas" },
    { icon: <SiNumpy />, name: "NumPy" },
    { icon: <DiReact />, name: "ReactJS" },
    { icon: <SiDjango />, name: "Django" },
    { icon: <DiNodejs />, name: "Node.js" },
    { icon: <DiHtml5 />, name: "HTML" },
    { icon: <DiCss3 />, name: "CSS" },
    { icon: <DiJavascript1 />, name: "JavaScript" },
    { icon: <SiMysql />, name: "MySQL" },
    { icon: <SiSqlite />, name: "SQLite" },
    { icon: <DiMongodb />, name: "MongoDB" },
    { icon: <SiFlutter />, name: "Flutter" },
    { icon: <SiDart />, name: "Dart" },
  ];

  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {techs.map((tech, idx) => (
        <Col xs={4} md={2} className="tech-icons" key={idx}>
          <OverlayTrigger
            placement="top"
            overlay={<Tooltip id={`tooltip-${idx}`}>{tech.name}</Tooltip>}
          >
            <span>{tech.icon}</span>
          </OverlayTrigger>
        </Col>
      ))}
    </Row>
  );
}

export default Techstack;
