import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {CardDeck, Card, Container} from 'react-bootstrap';
import '../App.css';

const Indo_view = ({positive, negative, death}) => {
    return (
        <>
            <Container fluid>
                <CardDeck>
                    <Card className="view_data">
                        <Card.Header>Positive</Card.Header>
                        <Card.Body>
                            <Card.Text>{positive}</Card.Text>
                        </Card.Body>
                    </Card>
                    <Card className="view_data">
                        <Card.Header>Cured</Card.Header>
                        <Card.Body>
                            <Card.Text>{negative}</Card.Text>
                        </Card.Body>
                    </Card>
                    <Card className="view_data">
                        <Card.Header>Death</Card.Header>
                        <Card.Body>
                            <Card.Text>{death}</Card.Text>
                        </Card.Body>
                    </Card>
                </CardDeck>
            </Container>
        </>
    );
};

export default Indo_view;