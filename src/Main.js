import {Component} from 'react';
import HornedBeasts from './HornedBeasts';
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
              this.props.data.map((element, index) => {
                return (
                  <Col key={index} >
                    <HornedBeasts
                      title={element.title}
                      imageUrl={element.image_url}
                      description={element.description}
                      showModal={this.props.showModal}
                      hideModal={this.props.hideModal}
                      show={this.props.show}
                    />
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
