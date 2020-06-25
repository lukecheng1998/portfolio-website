import React, { Component } from "react";
import {Container, Row} from 'react-bootstrap';
import talkPurdue from "../assets/images/talkPurdue.png";
import pagebot from "../assets/images/pagebot.png";
import honestly from "../assets/images/honestly.png";
import Card from '../components/Card'
class Carousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        {
          id: 0,
          title: "Talk Purdue",
          subTitle: "A social media application for ideas",
          imgSrc: talkPurdue,
          link: "https://talkpurdue.com",
          selected: false,
        },
        {
          id: 1,
          title: "Honestly",
          subTitle: "A search engine word cloud",
          imgSrc: honestly,
          link: "https://honestly2020.herokuapp.com",
          selected: false,
        },
        {
          id: 2,
          title: "Page Bot",
          subTitle: "A messenger assistant for customers",
          imgSrc: pagebot,
          link: "https://www.facebook.com/PageBot-1658932094230042/",
          selected: false,
        },
      ],
    };
  }
  handleCardClick = (id) => {
    let items = [...this.state.items];
    items[id].selected = items[id].selected ? false : true;

    items.forEach((item) => {
      if (item.id !== id) {
        item.selected = false;
      }
    });
    this.setState({
        items
    })
  };

  makeItems = (items) => {
    return items.map(item => {
        return <Card item = {item} click={(event => this.handleCardClick(item.id, event))} key={item.id}/>
    })
  }

  render() {
    return (
        <Container fluid={true}>
            <Row className="justify-content-around">
                {this.makeItems(this.state.items)}
            </Row>
        </Container>
        );
  }
}

export default Carousel;
