import {Component} from "react";
import Card from 'react-bootstrap/Card'
import PhotoModal from './PhotoModal'

class HornedBeasts extends Component {

  constructor(props) {
    super(props);
    this.state = {
      numClicks: 0,
      show: false,
    }
  }

  incrementClicks = () => this.setState({numClicks: this.state.numClicks + 1});

  showModal = () => this.setState({show: true});

  hideModal = () => this.setState({show: false});

  render() {
    return (
      <>
        <Card style={{width: '18rem'}}>
          <Card.Img variant="top" src={this.props.imageUrl} onClick={this.showModal} />
          <Card.Body>
            <Card.Title>{this.props.title}</Card.Title>
            <Card.Text>{this.props.description}</Card.Text>
            <Card.Text onClick={this.incrementClicks}>&#10084;&nbsp;{this.state.numClicks}</Card.Text>
          </Card.Body>
        </Card>
        <PhotoModal hideModal={this.hideModal} show={this.state.show} imageUrl={this.props.imageUrl} title={this.props.title}/>
      </>
    )
  };
}

export default HornedBeasts;
