import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Welcome to our <span className="purple">safe </span>
            and <span className="purple"> secure.</span>
            <br />
            chat platform
            <br />
            Inspired by Omegle, our site ensures a fun and 
            anonymous chatting experience with enhanced safety measures. 
            Our advanced AI filters actively monitor and secure conversations, 
            providing a safe environment for users to connect and interact. 
            Enjoy chatting with confidence, knowing your safety is our top priority.
            <br />
            <br />
            We have:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> AI Chat Filters who make sure to keep things appropriate
            </li>
            <li className="about-activity">
              <ImPointRight /> Monitors to keep the environment safe
            </li>
            <li className="about-activity">
              <ImPointRight /> AI Detectors who will ban inappropriate users from this platform
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Soumyajit</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
