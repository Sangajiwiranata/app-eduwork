import React, { Component } from 'react'
import { Container, Navbar } from 'react-bootstrap'

export default class Navigation extends Component {
    render() {
        return (
            <div>
                <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                    <Container>
                        <Navbar.Brand href="#home" className='fs-1 font-weight-bold'>News Update</Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
        )
    }
}
