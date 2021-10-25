import {Component} from "react";

class HornedBeasts extends Component {
  render() {
    return (
      <div id="beast">
        <h2>{this.props.title}</h2>
        <img src={this.props.imageUrl} alt={this.props.description} title={this.props.title} />
        <p>{this.props.description}</p>
      </div>
    )
  };
}

export default HornedBeasts;
