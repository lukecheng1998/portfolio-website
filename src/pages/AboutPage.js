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
        <img src={Portrait} className="portrait-format center" />
        <h2>Quick Facts!</h2>
        <AboutCarousel />
      </Content>
    </div>
  );
}

export default AboutPage;
