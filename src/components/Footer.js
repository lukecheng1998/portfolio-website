import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

function Footer () {
    return (
        <footer className="margin-top">
            <Container fluid={true}>
                <Row className="justify-content-between p-3">
                    <Col className="p-0" md={3} sm={12}>
                       
                    </Col>
                    <Col className="p-0 d-flex justify-content-end" md={3}>
                        Made by Luke Cheng v5.1.0
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer
