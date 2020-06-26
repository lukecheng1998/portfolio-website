import React, { Component } from "react";
import { Container, Row } from "react-bootstrap";
import AboutCard from '../components/AboutCard';
import computer from '../assets/images/computer.png';
import other from '../assets/images/other.png';
import school from '../assets/images/school.png';
import engineering from '../assets/images/engineering.png';
import coding from '../assets/images/coding.png'
import leadership from '../assets/images/leadership.png';
import teamwork from '../assets/images/teamwork.png'
import projects from '../assets/images/projects.png'
import experience from '../assets/images/experience.png'
export class AboutCarousel extends Component {
    constructor(props) {
        super(props);
        this.defaultState = {
            items: [
                {
                    id: 0,
                    title: "Student",
                    body: "Hello I am currently a student studying Computer Science at Purdue University!",
                    imgSrc: school
                },
                {
                    id: 1,
                    title: "Programmer",
                    body: "I really like to make awesome projects using JavaScript and React checkout some of the source code in the links below",
                    imgSrc: computer
                },
                {
                    id: 2,
                    title: "Other",
                    body: "I also have a wide variety of other interests such as taking care of hamsters, running, and helping others",
                    imgSrc: other
                }

            ]
        }
        this.secondState = {
            secondItems: [
                {
                    id: 0,
                    title: "Software Engineering",
                    body: "I've made multiple programs with Assembly, Java, C, and C++. In addition, I also have strong experience with data structures and algorithms as well as Scrum and agile project development.",
                    imgSrc: engineering
                },
                {
                    id: 1,
                    title: "Product Development",
                    body: "I really enjoyed making websites and applications using JavaScript, React, NodeJS, and Express. I really enjoyed learning the process of frontend, backend, and fullstack and want to expand my knowledge",
                    imgSrc: coding
                },
                {
                    id: 2,
                    title: "Leadership",
                    body: "Being a Team Leader for Purdue's orientation, I have great experience helping people to transition into College life.",
                    imgSrc: leadership
                },
            ],
            thirdItems: [
                {
                    id: 0,
                    title: "Teamwork",
                    body: "I love working in a team and helping others. In addition I have solid experience in Scrum and agile development with hopes to expand my knowledge in the field",
                    imgSrc: teamwork
                },
                {
                    id: 1,
                    title: "Projects",
                    body: "I love making fun and cool projects outside of class, such as fun coding projects as well as some scientific experiments!",
                    imgSrc: projects
                },
                {
                    id: 2,
                    title: "Professional Experience",
                    body: "I have experience working in a field utilizing resources that I have learned in the class room. For instance, this summer I took part in Tech Point's SOS challenge which utilized application development to help prevent COVID-19 while helping the tourism industry",
                    imgSrc: experience
                }
            ]
        }
    }
    handleCardClick = (id) => {
        let items = [...this.defaultState.items]
        let secondItems = [...this.secondState.secondItems]
        let thirdItems = [...this.secondState.thirdItems]
        this.setState({
            items,
            secondItems,
            thirdItems
        })
    }
    makeItems = (items) => {
        return items.map(item => {
            return <AboutCard item={item} />
        })
    }
    makeItems2 = (secondItems) => {
        return secondItems.map(item => {
            return <AboutCard item={item} />
        })
    }
    makeItems3 = (thirdItems) => {
        return thirdItems.map(item => {
            return <AboutCard item={item} />
        })
    }
    render() {
        return (
            <Container fluid={true}>
                <Row className="justify-content-around">
                    {this.makeItems(this.defaultState.items)}
                </Row>
                <h1>Important Skills</h1>
                <Row className="justify-content-around">
                    {this.makeItems2(this.secondState.secondItems)}
                </Row>
                <Row className="justify-content-around">
                    {this.makeItems3(this.secondState.thirdItems)}
                </Row>
            </Container>
        );
    }
}
export default AboutCarousel;