import {Component} from 'react';
import HornedBeasts from './HornedBeasts';
import data from './data.json';
import Container from "react-bootstrap/Container";
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col';

class Main extends Component {
  render() {
    return (
      <main>
        <Container fluid>
          <Row>
            {
              data.map((element) => {
                return (
                  <Col >
                    <HornedBeasts title={element.title} imageUrl={element.image_url} description={element.description} />
                  </Col>
                )
              })
            }
          </Row>
        </Container>
      </main>
    )
  }
}

export default Main;
