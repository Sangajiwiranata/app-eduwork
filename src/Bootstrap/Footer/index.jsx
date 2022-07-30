import React from "react";
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
    return (
        <Container fluid className="text-center mt-4 Foot">
            <Row>
                <Col>
                    <p class="text-white text-center footer py-center">Copyright &copy;2022-All Right Reserves</p>
                </Col>
            </Row>
        </Container>
    )
}

export default Footer;