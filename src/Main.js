import {Component} from 'react';
import HornedBeasts from './HornedBeasts';
import Container from "react-bootstrap/Container";
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col';

class Main extends Component {

  render() {
    let filteredData = [];
    if (this.props.value === '' && this.props.horns === 'all') {
      filteredData = [...this.props.data];
    } else {
      if (this.props.horns === 'all') {
        filteredData = this.props.data.filter(element => element.title.match(new RegExp(this.props.value, 'i')) || element.description.match(new RegExp(this.props.value, 'i')));
      } else {
        filteredData = this.props.data.filter(element => element.horns.toString() === this.props.horns).filter(element => element.title.match(new RegExp(this.props.value, 'i')) || element.description.match(new RegExp(this.props.value, 'i')));
      }
    }

    return (
      <main style={{backgroundColor: this.props.theme.mainColor}}>
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
                      horns={element.horns}
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
