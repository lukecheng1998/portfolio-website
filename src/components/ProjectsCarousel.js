import React, { Component } from "react";
import { Container, Row } from "react-bootstrap";

class ProjectsCarousel extends Component {
    constructor(props) {
        this.state = {
            items: [
                {
                    id: 0,
                    title: "Talk Purdue",
                    subTitle: "A social media application for ideas",
                    selected: false
                },
                {
                    id: 1,
                    title: "Honestly",
                    subTitle: "A search engine word cloud",
                    selected: false
                },
                {
                    id: 2,
                    title: "Page Bot",
                    subTitle: "A messenger assistant for customers",
                    selected: false
                },
                {
                    id: 3,
                    title: "Twistter",
                    subTitle: "Twitter with a twist",
                    selected: false
                },
                {
                    id: 4,
                    title: "Super 8",
                    subTitle: "A tracking app to prevent COVID-19",
                    selected: false
                }
            ]
        }
    }
}