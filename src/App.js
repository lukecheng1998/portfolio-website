//React Native
import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import './App.css'
import {Container, Nav} from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar';

//Components
import Footer from './components/Footer'
class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      title: 'Luke Cheng',
      headerLinks: [
        {title: 'Home', path: '/'},
        {title: 'About', path: '/about'},
        {title: 'Contact', path: '/contact'}
      ],
      home: {
        title: 'Forward Thinking',
        subTitle: 'Projects from me',
        body: 'Take a look at my Projects'
      },
      about: {
        title: 'About Me',
      },
      contact: {
        title: 'Let\'s Talk'
      }
    }
  }
  render() {
    return(
      <Router>
        <Container className="p-0" fluid={true}>
          <Navbar className="border-bottom" bg="transparent" expand="lg">
            <Navbar.Brand>Luke Cheng</Navbar.Brand>
            <Navbar.Toggle className="border-0" aria-controls="navbar-toggle" />
            <Navbar.Collapse id="navbar-toggle">
              <Nav className="ml-auto">
                <Link className="nav-link" to="/">
                Home
                </Link>
                <Link className="nav-link" to="/about">
                About
                </Link>
                <Link className="nav-link" to="/contact">
                Contact
                </Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
          <Footer />
        </Container>
      </Router>
    )
  }
}

export default App;
