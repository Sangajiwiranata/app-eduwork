import React from "react";
import { Container, Row, Col, Table } from 'react-bootstrap';

const Pengalaman = () => {
    return (
        <Container className="text-center bio">
            <Row>
                <Col sm className="justify-content-md-center">
                    <h3 class="mb-3">Education</h3>
                    <Table>
                        <thead>
                            <tr>
                                <th scope="col">Education</th>
                                <th scope="col">Year</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>SMK Negeri 1 Kuripan</td>
                                <td>2010-2013</td>
                            </tr>
                            <tr>
                                <td>MTs Negeri Model Kuripan</td>
                                <td>2007-2010</td>
                            </tr>
                            <tr>
                                <td>SD Negeri 1 Kuripan</td>
                                <td>2001-2007</td>
                            </tr>
                        </tbody>
                    </Table>
                </Col>
                <Col sm className="justify-content-md-center">
                    <h3 class="mb-3">Reference</h3>
                    <Table>
                        <thead>
                            <tr>
                                <th scope="col">Name</th>
                                <th scope="col">Position</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Fedra Mulriza</td>
                                <td>IT Manager Corporate</td>
                            </tr>
                            <tr>
                                <td>Siprianus Mamun</td>
                                <td>Finance Controller</td>
                            </tr>
                            <tr>
                                <td>Andre Setiawan</td>
                                <td>Facilities & Services</td>
                            </tr>
                        </tbody>
                    </Table>
                </Col>
                <Col sm className="justify-content-md-center">
                    <h3 class="mb-3">Experience</h3>
                    <Table>
                        <thead>
                            <tr>
                                <th scope="col">Company Name</th>
                                <th scope="col">Position</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Jambuluwuk Oceano Resort</td>
                                <td>Senior IT</td>
                            </tr>
                            <tr>
                                <td>Ergon Pandawa</td>
                                <td>Supervisor IT</td>
                            </tr>
                            <tr>
                                <td>Aston Sunset</td>
                                <td>Supervisor IT</td>
                            </tr>
                        </tbody>
                    </Table>
                </Col>
            </Row>
        </Container>
    )
}

export default Pengalaman;