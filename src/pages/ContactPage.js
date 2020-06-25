import React, { Component } from "react";
import Hero from '../components/Hero'
import Content from '../components/content';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
class ContactPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      message: "",
      disabled: false,
      emailSent: null,
    };
  }
  handleChange = (event) => {
    console.log(event);
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
        [name]: value
    })
  }
  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({
        disabled: true,
        emailSent: true
    });

  }
  render() {
    return (
        <div>
            <Hero title={this.props.title} />
            <Content>
                
            </Content>
        </div>
    );
  }
}
export default ContactPage;
