import React, { Component } from "react";
import { Container, Row } from "react-bootstrap";
import { useTransition, animation, config } from "react-spring";
import AboutCard from "../components/AboutCard";
import HistoryCard from "../components/HistoryCard";
import computer from "../assets/images/computer.png";
import other from "../assets/images/other.png";
import school from "../assets/images/school.png";
import engineering from "../assets/images/engineering.png";
import coding from "../assets/images/coding.png";
import leadership from "../assets/images/leadership.png";
import teamwork from "../assets/images/teamwork.png";
import projects from "../assets/images/projects.png";
import experience from "../assets/images/experience.png";
import version1 from "../assets/images/version1.png";
import version2 from "../assets/images/version2.png";
import version3 from "../assets/images/version3.png";
import version4 from "../assets/images/version4.png";
import version5 from "../assets/images/version5.png";
const slides = [
  { id: 0, imgSrc: "asdf" },
  {
    id: 1,
    imgSrc: "asdf2",
  },
  {
    id: 2,
    imgSrc: "asdf3",
  },
  {
    id: 3,
    imgSrc: "asdf4",
  },
  {
    id: 4,
    imgSrc: "asdf5",
  },
];
export class AboutCarousel extends Component {
  constructor(props) {
    super(props);
    this.defaultState = {
      items: [
        {
          id: 0,
          title: "Graduate",
          body:
            "I recently just graduated from Purdue University with a degree in Computer Science!",
          imgSrc: school,
        },
        {
          id: 1,
          title: "Programmer",
          body:
            "I really like to make awesome projects using many programming languages. Checkout some of the source code in the links in the main page.",
          imgSrc: computer,
        },
        {
          id: 2,
          title: "Other",
          body:
            "I also have a wide variety of other interests such as taking care of hamsters, running, modeling, and helping others.",
          imgSrc: other,
        },
      ],
    };
    this.secondState = {
      secondItems: [
        {
          id: 3,
          title: "Software Engineering",
          body:
            "I've made multiple programs with Java, JavaScript, C, and C++. Likewise I am also working in the corporate environment, utilizing Scrum and Agile, as well as helping automate various products.",
          imgSrc: engineering,
        },
        {
          id: 4,
          title: "Product Development",
          body:
            "I really enjoyed making applications utilizing the latest technologies from web development to low level development. I thoroughly enjoy the process of learning and utilizing my skills for development.",
          imgSrc: coding,
        },
        {
          id: 5,
          title: "Leadership",
          body:
            "Formerly a Team Leader for Purdue's orientation, I have great experience helping people to transition into College life. As well as really strong experience in leading people.",
          imgSrc: leadership,
        },
      ],
      thirdItems: [
        {
          id: 6,
          title: "Teamwork",
          body:
            "I love working in a team and helping others. In addition I have solid experience in Scrum and agile development with hopes to expand my knowledge in the field",
          imgSrc: teamwork,
        },
        {
          id: 7,
          title: "Projects",
          body:
            "I love making fun and cool projects outside of class, such as fun coding projects seen on my github and here on this website! In addition, I also utilize many of professional skills in some of the projects!",
          imgSrc: projects,
        },
        {
          id: 8,
          title: "Professional Experience",
          body:
            "I have experience working in a field utilizing resources that I have learned in the class room. For instance, currently I am working with FIS in assistance with the automation of their Merchant Underwriting platform!",
          imgSrc: experience,
        },
      ],
      fourthItems: [
        {
          id: 9,
          title: "Version 1",
          body:
            "Cerca 2015-2016: This is the very first version of the website I've ever made and spurred my love of Computer Science.",
          imgSrc: version1,
        },
        {
          id: 10,
          title: "Version 2",
          body:
            "Cerca 2017: My second version of the website, I tried to make a login function here!",
          imgSrc: version2,
        },
        {
          id: 11,
          title: "Version 3",
          body:
            "2020: The third version of the website, using standard html and css",
          imgSrc: version3,
        },
        {
          id: 12,
          title: "Version 4",
          body: "2020: This website version uses react spring ",
          imgSrc: version4,
        },
        {
          id: 13,
          title: "Version 5",
          body:
            "2021: This is the current version of the website with an updated and cleaner UI",
          imgSrc: version5,
        },
      ],
    };
  }
  handleCardClick = (id) => {
    let items = [...this.defaultState.items];
    let secondItems = [...this.secondState.secondItems];
    let thirdItems = [...this.secondState.thirdItems];
    let fourthItems = [...this.secondState.fourthItems];
    this.setState({
      items,
      secondItems,
      thirdItems,
      fourthItems,
    });
  };
  makeItems = (items) => {
    return items.map((item) => {
      return <AboutCard item={item} />;
    });
  };
  makeItems2 = (secondItems) => {
    return secondItems.map((item) => {
      return <AboutCard item={item} />;
    });
  };
  makeItems3 = (thirdItems) => {
    return thirdItems.map((item) => {
      return <AboutCard item={item} />;
    });
  };
  makeItems4 = (fourthItems) => {
    return fourthItems.map((item) => {
      return <HistoryCard item={item} />;
    });
  };
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
//Try this later
/*<h1>The History of this Website</h1>
        <Row className="justify-content-around">
          {this.makeItems4(this.secondState.fourthItems)}
        </Row> */