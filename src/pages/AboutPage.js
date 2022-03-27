import React, { Component } from "react";
import Hero from "../components/Hero";
import Content from "../components/content";
import AboutCarousel from "../components/AboutCarousel";
import Portrait from "../assets/images/portrait.jpg";
function AboutPage(props) {
  return (
    <div>
      <Hero title={props.title} />
      <Content>
      <embed src="../assets/resume/Luke Cheng Software Engineering Resume v3.pdf" type="application/pdf" width="100%" height="600px"/>
        <h2>Quick Facts!</h2>
        <AboutCarousel />
      </Content>
    </div>
  );
}

export default AboutPage;
