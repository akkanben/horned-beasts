import {Component} from "react";

class Footer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      colorIndex: 0,
      colors: [
        'ivory',
        'chocolate',
        'salmon',
        'gold',
        'peachpuff',
        'thistle',
        'wheat',
        'yellowgreen',
        'paleturquoise',
        'powderblue',
        'gainsboro',
        'slateblue',
      ],
    };
  }

  handleClick = () => this.setState({colorIndex: Math.floor(Math.random() * this.state.colors.length)})

  render() {
    return (
      <footer style={{backgroundColor: this.state.colors[this.state.colorIndex]}} onClick={this.handleClick}>
        <p>&copy; 2021 Ben Mills</p>
      </footer>
    )
  };
}

export default Footer;
