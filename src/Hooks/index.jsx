import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { Button, Carousel, Col, Container, Form, Row } from 'react-bootstrap';
import CardBox from './CardBox';
import Navigation from './Navigation'

const Hooks = () => {
    let [api, setApi] = useState([]);
    let [cari, setCari] = useState('')

    useEffect(() => {
        fetch(`https://newsdata.io/api/1/news?apikey=pub_10043d6638523e5c6464d0a7c43999d849a29&language=in`)
            .then(response => response.json())
            .then(res => {
                setApi(res.results)
            })
    }, [])



    useEffect(() => {
        if (cari === "") {
            fetch(`https://newsdata.io/api/1/news?apikey=pub_10043d6638523e5c6464d0a7c43999d849a29&language=in`)
                .then(response => response.json())
                .then(res => {
                    setApi(res.results)
                })
        } else {
            fetch(`https://newsdata.io/api/1/news?apikey=pub_10043d6638523e5c6464d0a7c43999d849a29&language=in&q=${cari}`)
                .then(response => response.json())
                .then(res => {
                    setApi(res.results)
                })
        }
    }, [cari])


    return (
        < div >
            <Navigation />
            <Container className='mt-4'>
                <Form className="d-flex">
                    <Form.Control
                        type="search"
                        placeholder="Search"
                        className="me-2"
                        aria-label="Search"
                        onChange={(e) => { setCari(e.target.value) }}
                    />
                    <Button
                        variant="dark">Search</Button>
                </Form>
            </Container>
            <Container>
                <Row>
                    {
                        api && api.map((apis, i) => {
                            return (
                                <Col md={4} className='mt-4' key={i}>
                                    <CardBox apis={apis} />
                                </Col>
                            )
                        })};

                </Row>
            </Container>
        </ div>
    )
}

export default Hooks;
