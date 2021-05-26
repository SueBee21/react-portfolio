import React from "react";
import Header from "../Components/Header/index";
import { Container, Row, Col, Image } from "react-bootstrap";

function myHomepage() {
  return (
    <div>
      <Header />
      <Container>
        <Row>
          <Col>
            <Container>
              <Row>
                <Col xs={6} md={4}>
                  <Image src="./assets.profile-pic-png" rounded />
                </Col>
              </Row>
            </Container>
          </Col>
          <Col>
            <p>
              After 15 years in healthcare and community non-profit
              organizations as a clinical social worker, I am excited to take my
              problem-solving skills into the world of tech (dont like world of
              tech but maybe correct). I am a 2021 graduate of University of
              Connecticut's Full Stack Developer Certificate Bootcamp.
            </p>
            <p>
              My goal as a developer is to apply my experience in psychology and
              expertise in human behavior to build applications that provide
              ease and accessability in user experience. My current
              language-of-choice is JavaScript, with plans to learn more. I have
              experience building MERN stack applications.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default myHomepage;
