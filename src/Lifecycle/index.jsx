import React, { Component } from 'react'
import { Button, Card, Col, Container, Row, Form } from 'react-bootstrap';
import Navigation from './Navigation';

export default class Lifecycle extends Component {

    constructor(props) {
        super(props)

        this.state = {
            cari: '',
            post: []
        };
    }

    componentDidMount() {
        fetch(`https://newsdata.io/api/1/news?apikey=pub_88743ad44d102e1de040b1e568d65e9f2f30&language=in`)
            .then(response => response.json())
            .then(res => {
                const post = res.results
                this.setState({ post })
            })

    }

    handleSearch = () => {
        this.setState({
            post: []
        })

        fetch(`https://newsdata.io/api/1/news?apikey=pub_88743ad44d102e1de040b1e568d65e9f2f30&language=in&q=${this.state.api}`)
            .then(response => response.json())
            .then(res => {
                const post = res.results
                this.setState({ post })
            })
    }


    render() {
        const { post } = this.state
        return (
            <div>
                <Navigation />
                {/* <Pencarian apilog={this.state.api} /> */}
                <Container className='mt-4'>
                    <Form className="d-flex">
                        <Form.Control
                            type="search"
                            placeholder="Search"
                            className="me-2"
                            aria-label="Search"
                            onChange={(e) => this.setState({ api: e.target.value })}
                        />
                        <Button
                            onClick={this.handleSearch}
                            variant="outline-success">Search</Button>
                    </Form>
                </Container>
                <Container className='mt-4 p-4'>
                    <Row>
                        {
                            post && post.map((posts, i) => {
                                return (
                                    <Col key={i} md={4} className='mt-4'>
                                        <Card>
                                            <Card.Img variant="top" src={posts.image_url} />
                                            <Card.Body>
                                                <Card.Title>{posts.title}</Card.Title>
                                                <Card.Text>{posts.description}</Card.Text>
                                                <Button href={posts.link} variant="primary">More Read</Button>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                )
                            })
                        }
                    </Row>
                </Container>
            </div>
        )
    }
}