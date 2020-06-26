import React, { Component } from 'react'
import Hero from '../components/Hero'
import Content from '../components/content'
import AboutCarousel from '../components/AboutCarousel'
import Portrait from '../assets/images/portrait.jpg';
function AboutPage (props) {
    return(
       <div>
           <Hero title={props.title} />
           <Content>
               <img src={Portrait} className="portrait-format center"/>
               <p>Hello I'm Luke Cheng current a student studying at Purdue University.</p>
               <p>I enjoy doing backend and front end development and I'm looking for more!</p>
            <AboutCarousel />
           </Content>
       </div>
    )
}

export default AboutPage
