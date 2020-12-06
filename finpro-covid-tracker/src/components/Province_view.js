import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, CardGroup } from "react-bootstrap";
import '../App.css';

const Province_view = ({provinsi, kasusPosi, kasusSemb, kasusMeni}) => {
    return (
        <>
        <CardGroup>
            <Card className="view_data">
                <Card.Text>{provinsi}</Card.Text>
            </Card>
            <Card className="view_data">
                <Card.Text>{kasusPosi}</Card.Text>
            </Card>
            <Card className="view_data">
                <Card.Text>{kasusSemb}</Card.Text>
            </Card>
            <Card className="view_data">
                <Card.Text>{kasusMeni}</Card.Text>
            </Card>  
        </CardGroup>
        </>
    );
};

export default Province_view;