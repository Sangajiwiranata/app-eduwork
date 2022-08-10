import React from 'react'
import { Button, Card } from 'react-bootstrap'
// import Hooks from './Hooks';

const CardBox = ({ apis }) => {
    return (
        <div>
            <Card>
                <Card.Img variant="top" src={apis.image_url} />
                <Card.Body>
                    <Card.Title>{apis.title}</Card.Title>
                    <Card.Text>{apis.description}</Card.Text>
                    <Button href={apis.link} variant="primary">More Read</Button>
                </Card.Body>
            </Card>
        </div>
    )
}

export default CardBox
