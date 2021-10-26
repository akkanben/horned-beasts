import {Component} from "react";
import Card from 'react-bootstrap/Card'

class HornedBeasts extends Component {

  constructor(props) {
    super(props);
    this.state = {
      numClicks: 0,
    }
  }

  render() {
    return (
      <div id="beast">
        <Card style={{width: '18rem'}}>
          <Card.Img variant="top" src={this.props.imageUrl} onClick={() => this.setState({numClicks: this.state.numClicks + 1})} />
          <Card.Body>
            <Card.Title>{this.props.title}</Card.Title>
            <Card.Text>{this.props.description}</Card.Text>
            <Card.Text>❤️{this.state.numClicks}</Card.Text>
          </Card.Body>
        </Card>
      </div>
    )
  };
}

export default HornedBeasts;
