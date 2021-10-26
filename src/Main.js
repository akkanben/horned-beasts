import {Component} from 'react';
import HornedBeasts from './HornedBeasts';
import data from './data.json';
import Container from "react-bootstrap/Container";
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col';

const beastsArray = [];


for (let i = 0; i < data.length; i++) {
  beastsArray.push(<Col><HornedBeasts title={data[i].title} imageUrl={data[i].image_url} description={data[i].description} /></Col>);
}

class Main extends Component {
  render() {
    return (
      <main>
        <Container fluid>
          <Row>
            {beastsArray}
          </Row>
        </Container>
      </main>
    )
  }
}

export default Main;
