//React Native
import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import './App.css'
import {Container, Nav} from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar';

//Pages
import Home from './pages/HomePage'
import Contact from './pages/ContactPage';
import About from './pages/AboutPage';
import Projects from './pages/ProjectsPage';
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
        {title: 'Contact', path: '/contact'},
        {title: 'Projects', path: '/projects'}
      ],
      home: {
        title: 'Forward Thinking',
        subTitle: 'Always curious about the world',
        text: 'Take a look at my Projects'
      },
      projects: {
        title: 'View My Projects'
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
          <Navbar bg="transparent" expand="lg">
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
                <Link className="nav-link" to="/projects">
                  Projects
                </Link>

                
              </Nav>
            </Navbar.Collapse>
          </Navbar>
          <Route path="/" exact render={() => <Home title={this.state.home.title} subTitle={this.state.home.subTitle} text={this.state.home.text} />} />
          <Route path="/about" exact render={() => <About title={this.state.about.title} />} />
          <Route path="/contact" exact render={() => <Contact title={this.state.contact.title} />} />
          <Route path="/projects" exact render={() => <Projects title={this.state.projects.title} />} />

          <Footer />
        </Container>
      </Router>
    )
  }
}

export default App;
