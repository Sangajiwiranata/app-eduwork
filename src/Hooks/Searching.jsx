import React from 'react'
import { Button, Container, Form } from 'react-bootstrap'

const Searching = () => {
    return (
        <div>
            <Container className='mt-4'>
                <Form className="d-flex">
                    <Form.Control
                        type="search"
                        placeholder="Search"
                        className="me-2"
                        aria-label="Search"
                    />
                    <Button
                        variant="dark">Search</Button>
                </Form>
            </Container>
        </div>
    )
}

export default Searching
