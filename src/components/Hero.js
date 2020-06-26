import React, {useState} from 'react'
import { Jumbotron } from 'react-bootstrap';
import {Container, Row, Col} from 'react-bootstrap';
import { render } from 'react-dom'
import { useTrail, animated } from 'react-spring'
function Hero (props){
    const items = [props.title, props.subTitle, props.text]
    const config = {mass: 5, tension: 2000, friction: 200}
    const [toggle, set] = useState(true)
    const trail = useTrail(items.length, {
        config,
        opacity:toggle ?1 : 0,
        x: toggle ? 0 : 20,
        height: toggle ? 80 : 0,
        from: { opacity: 0, x: 20, height: 0},
    })
    return (
        <Jumbotron className="bg-transparent jumbotron-fluid p-0">
            <Container fluid={true}>
                <Row className="justify-content-center py-5">
                    <Col md={8} sm={12}>
                        <animated.div>
                            {props.title && <h1 className="display-1 font-weight-bolder">{props.title}</h1>}
                            {props.subTitle && <h3 className="display-4 font-weight-light">{props.subTitle}</h3>}
                            {props.text && <h3 className="lead font-weight-light">{props.text}</h3>}
                        </animated.div>
                    </Col>
                </Row>
            </Container>
        </Jumbotron>
    );
}

export default Hero
