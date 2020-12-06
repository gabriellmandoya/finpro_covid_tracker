import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {CardDeck, Card} from 'react-bootstrap';
import '../App.css';

const Global_view = ({confirmed, recovered, deaths}) => {
    return (
        <div>
            <CardDeck>
                <Card className="view_data">
                    <Card.Header>Confirmed</Card.Header>
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
        </div>
    );
};

export default Global_view;