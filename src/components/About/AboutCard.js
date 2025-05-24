import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Khushi Jain </span>
            from <span className="purple"> Jabalpur, M.P., India.</span>
            <br />
            I am currently pursuing B.Tech from IIIT Kottayam.
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Outdoor/ Indoor Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Drawing and Creativity
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Learning, Execution and Experience makes it!"{" "}
          </p>
          <footer className="blockquote-footer">Khushi Jain</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
