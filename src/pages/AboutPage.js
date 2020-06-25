import React, { Component } from 'react'
import Hero from '../components/Hero'
import Content from '../components/content'
function AboutPage (props) {
    return(
       <div>
           <Hero title={props.title} />
           <Content>
               <p>Hello I'm Luke Cheng current a student studying at Purdue University.</p>
               <p>I enjoy doing backend and front end development and I'm looking for more!</p>
           </Content>
       </div>
    )
}

export default AboutPage
