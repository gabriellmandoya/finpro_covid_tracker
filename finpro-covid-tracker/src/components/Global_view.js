import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {CardDeck, Card, Container} from 'react-bootstrap';
import '../App.css';

const Global_view = ({confirmed, recovered, deaths}) => {
    return (
        <>
            <Container fluid>
                <CardDeck>
                    <Card className="view_data">
                        <Card.Header>Positive</Card.Header>
                        <Card.Body>
                            <Card.Text>{confirmed}</Card.Text>
                        </Card.Body>
                    </Card>
                    <Card className="view_data">
                        <Card.Header>Cured</Card.Header>
                        <Card.Body>
                            <Card.Text>{recovered}</Card.Text>
                        </Card.Body>
                    </Card>
                    <Card className="view_data">
                        <Card.Header>Death</Card.Header>
                        <Card.Body>
                            <Card.Text>{deaths}</Card.Text>
                        </Card.Body>
                    </Card>
                </CardDeck>
            </Container>
        </>
    );
};

export default Global_view;