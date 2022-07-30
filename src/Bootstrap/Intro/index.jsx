import React from "react";
import { Container, Row, Col } from 'react-bootstrap';

const Intro = () => {
    return (
        <Container fluid className="wrapper" >
            <Row className="text-center d-flex justify-content-center align-items-center">
                <Col className="py-center">
                    <p className="fs-2 fst-italic" >Partisipan Of Eduwork</p>
                    <h1 className="fst-bold mb-5">Sangaji Wiranata</h1>
                    <div className="introButton mt-4 text-center">
                        <a href="https://www.linkedin.com/in/sangaji-wiranata-5399541a4/" target="_blank" rel="noreferrer">
                            <button className="btn btn-warning mt-5 border border-dark">Linkin Profile</button>
                        </a>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default Intro;