import React, { Component } from "react";
import { Container, Row } from "react-bootstrap";
class ProjectsPageCarousel extends Component {
    constructor(props){
        this.state = {
            items: [
                {
                    id: 0,
                    title: "Talk Purdue",
                    body: "Talk Purdue a social media application to collaborate with other people. See more of it here!" 
                },
                {
                    id: 1,
                    title: "Honestly"
                }
            ]
        }
    }
}
export default ProjectsPageCarousel;