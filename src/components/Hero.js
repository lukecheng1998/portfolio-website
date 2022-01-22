import React, { useState } from "react";
import { Jumbotron } from "react-bootstrap";
import { Container, Row, Col } from "react-bootstrap";
import { render } from "react-dom";
import { useSpring, animated } from "react-spring";

import logo from "../assets/images/Luke cheng logo w.out text and back.png"

function Hero(props) {
    const style = useSpring({opacity: 1, from: {opacity: 0}})
  return (
    <Jumbotron className="bg-transparent jumbotron-fluid p-0">
      <Container fluid={true}>
        <Row className="justify-content-center py-5 ">
          <Col md={8} sm={12}>
            <animated.div style={style}>
              <img
                src={logo}
                width={100}
                height={100}
                align={"center"}
              />
              {props.title && (
                <h1 className="display-1 font-weight-bolder">{props.title}</h1>
              )}
              {props.subTitle && (
                <h3 className="display-4 font-weight-light">
                  {props.subTitle}
                </h3>
              )}

              {props.text && (
                <h3 className="lead font-weight-light">{props.text}</h3>
              )}
            </animated.div>
          </Col>
        </Row>
      </Container>
    </Jumbotron>
  );
}

export default Hero;
