import {Component} from "react";

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
        <h2>{this.props.title}</h2>
        <img src={this.props.imageUrl} alt={this.props.description} title={this.props.title} onClick={() => this.setState({numClicks: this.state.numClicks + 1})} />
        <p>❤️{this.state.numClicks}</p>
        <p>{this.props.description}</p>
      </div>
    )
  };
}

export default HornedBeasts;
