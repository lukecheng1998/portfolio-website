import React, { Component } from "react";
import { Container, Row } from "react-bootstrap";

export class ContactCarousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        {
          id: 0,
          title: "Github",
          subTitle: "View all of my projects",
          imgSrc: "asdf",
          link: "https://github.com/lukecheng1998",
          selected: false,
        },
        {
            id: 1,
            title: 'LinkedIn',
            subTitle: 'See my LinkedIn',
            imgSrc: 'asdf',
            link: "https://linkedin.com/in/lukecheng1998",
            selected: false
        },
        {
            id: 2,
            title: 'Email',
            subtitle: 'Email me',
            imgsrc: 'asdf',
            link: "mailto:cheng347@purdue.edu",
            selected: false
        }
      ],
    };
  }
}

export default ContactCarousel;
