import {Component} from 'react';
import HornedBeasts from './HornedBeasts';
import Container from "react-bootstrap/Container";
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col';

class Main extends Component {

  render() {
    let filteredData = [];
    if (this.props.value === '') {
      filteredData = [...this.props.data];
    } else {
      filteredData = this.props.data.filter(element => element.title.includes(this.props.value) || element.description.includes(this.props.value));
    }
    console.log(filteredData)

    return (
      <main>
        <Container fluid>
          <Row>
            {
              filteredData.map((element, index) => {
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
