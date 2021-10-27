import {Component} from "react";
import Card from 'react-bootstrap/Card'

class HornedBeasts extends Component {

  constructor(props) {
    super(props);
    this.state = {
      numClicks: 0,
    }
  }

  incrementClicks = () => this.setState({numClicks: this.state.numClicks + 1});

  handleClick = () => {
    this.props.showModal(this.props.imageUrl, this.props.title, this.props.description)
  }

  render() {
    return (
      <>
        <Card style={{width: '18rem'}}>
          <Card.Img variant="top" src={this.props.imageUrl} onClick={this.handleClick} />
          <Card.Body>
            <Card.Title>{this.props.title}</Card.Title>
            <Card.Text>{this.props.description}</Card.Text>
            <Card.Text onClick={this.incrementClicks}>&#10084;&nbsp;{this.state.numClicks}</Card.Text>
          </Card.Body>
        </Card>
      </>
    )
  };
}

export default HornedBeasts;
