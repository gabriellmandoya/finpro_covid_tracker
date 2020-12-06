import React, {useEffect, useState} from 'react';
import axios from "axios";
import Province_view from '../../components/Province_view';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Container, CardGroup } from 'react-bootstrap';
import '../../App.css';

const Province = () => {
    const [datas, setDatas] = useState([]);

    useEffect(() => {
      axios
        .get("https://indonesia-covid-19.mathdro.id/api/provinsi")
        .then((response) => setDatas(response.data.data));
    }, []);   

    return (
    <>
      <Container fluid>
        <CardGroup>
          <Card className="view_data">
            <Card.Header>Province</Card.Header>
          </Card>
          <Card className="view_data">
            <Card.Header>Positive</Card.Header>
          </Card>
          <Card className="view_data">
            <Card.Header>Cured</Card.Header>
          </Card>
          <Card className="view_data">
            <Card.Header>Death</Card.Header>
          </Card>
        </CardGroup>
        {datas.map((item) => {
          return ( // eslint-disable-next-line
            <Province_view 
              provinsi={item.provinsi} 
              kasusPosi={item.kasusPosi}
              kasusSemb={item.kasusSemb}
              kasusMeni={item.kasusMeni}
            />
          );
        })}
      </Container>
    </>
    )
}

export default Province
