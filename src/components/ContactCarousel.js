import React, { Component } from "react";
import { Container, Row } from "react-bootstrap";
import ContentCard from '../components/ContentCard';
import github from '../assets/images/github.png';
import linkedin from '../assets/images/linkedin.png';
import email from '../assets/images/email.png';
export class ContactCarousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        {
          id: 0,
          title: "Github",
          subTitle: "View all of my projects",
          imgSrc: github,
          link: "https://github.com/lukecheng1998",
          selected: false,
        },
        {
            id: 1,
            title: 'LinkedIn',
            subTitle: 'See my LinkedIn',
            imgSrc: linkedin,
            link: "https://linkedin.com/in/lukecheng1998",
            selected: false
        },
        {
            id: 2,
            title: 'Email',
            subtitle: 'Email me',
            imgSrc: email,
            link: "mailto:cheng347@purdue.edu",
            selected: false
        }
      ],
    };
  }
    handleCardClick = (id) => {
      let items = [...this.state.items]
      items[id].selected = items[id].selected ? false : true;

      items.forEach((item) => {
        if (item.id !== id) {
          item.selected = false;
        }
      });
      this.setState({
          items
      })
    }
  
  makeItems = (items) => {
    return items.map(item => {
        return <ContentCard item = {item} click={(event => this.handleCardClick(item.id, event))} key={item.id}/>
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

export default ContactCarousel;
