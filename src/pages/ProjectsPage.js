import React, { Component } from 'react';
import Hero from '../components/Hero';
import Content from '../components/content';
import { render } from '@testing-library/react';

class ProjectsPage extends Component{
    render() {
        return(
            <div>
                <Hero title={this.props.title} text={this.props.text}/>

            </div>
        );
    }
}
export default ProjectsPage;