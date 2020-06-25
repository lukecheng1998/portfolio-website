import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

function Footer () {
    return (
        <Footer className="marginTop">
            <Container fluid={true}>
                <Row className="border-top justify-content-between p-3">
                    <Col className="p-0" md={3} sm={12}>
                        Luke Cheng
                    </Col>
                    <Col className="p-0 d-flex justify-content-end" md={3}>
                        Made by me
                    </Col>
                </Row>
            </Container>
        </Footer>
    )
}

export default Footer
