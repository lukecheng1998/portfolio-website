import React, { Component } from "react";
import { Container, Row } from "react-bootstrap";
import TalkPurdueFullScreen from '../assets/images/talkPurduefullScreen.png'
import Super8FullScreen from '../assets/images/Super-8-Fullscreen.png'
import honestlyFullScreen from '../assets/images/honestlyfullscreen.png'
import pageBotFullScreen from '../assets/images/pagebotfullscreen.png'
import twistterFullScreen from '../assets/images/twistterfullscreen.png'
import ProjectCard from '../components/ProjectCard';
class ProjectsPageCarousel extends Component {
    constructor(props){
        super(props);
        this.state = {
            items: [
                {
                    id: 0,
                    title: "Talk Purdue",
                    body: "Talk Purdue a social media application to collaborate with other people. See more of it here!",
                    imgSrc: TalkPurdueFullScreen,
                    link: "https://talkpurdue.com",
                    selected: false, 
                },
                {
                    id: 1,
                    title: "Honestly",
                    body: "Honestly is word cloud using python and JavaScript to find the most frequent word",
                    imgSrc: honestlyFullScreen,
                    link: "https://honestly2020.herokuapp.com",
                    selected: false,
                },
                {
                    id: 2,
                    title: "Page Bot",
                    body: "Page bot is the ultimate assitant in helping you find what you need",
                    imgSrc: pageBotFullScreen,
                    link: "https://www.facebook.com/PageBot-1658932094230042/",
                    selected: false,
                },
                {
                    id: 3,
                    title: "Super 8",
                    body: "Super 8 is a COVID tracking app that I made during the height of the pandemic go see it now",
                    imgSrc: Super8FullScreen,
                    https:"//super-8-1beb0.firebaseapp.com/",
                    selected: false,
                },
                {
                    id: 4,
                    title: "Twistter",
                    body: "Twistter is the original social media app, based on the popular website twitter",
                    imgSrc: twistterFullScreen,
                    https:"https://twistter-cs307.herokuapp.com/",
                    selected: false,
                },
            ],
        };
    }
    handleProjectCardClick = (id) => {
        let items = [...this.state.items];
        items[id].selected = items[id].selected ? false : true;

        items.forEach((item) => {
            if(item.id !== id){
                item.selected = false;
            }
        });
        this.setState({
            items
        })
    };
    makeItems = (items) => {
        return items.map(item => {
            return <ProjectCard item = {item} click={(event => this.handleProjectCardClick(item.id, event))} key={item.id} />
        })
    }
    render() {
        return(
            <Container fluid = {true}>
                <Row className="justify-content-around">
                    {this.makeItems(this.state.items)}    
                </Row>    
            </Container>
        );
    }
}
export default ProjectsPageCarousel;