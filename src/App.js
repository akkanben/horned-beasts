import React, {Component} from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import data from './data.json';
import SelectedBeast from './SelectedBeast'


export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      activeImg: '',
      activeTitle: '',
      activeDescription: '',
    };
  }

  showModal = (url, title, description) => {
    this.setState({show: true, activeImg: url, activeTitle: title, activeDescription: description});
  };

  hideModal = () => this.setState({show: false});

  render() {
    return (
      <>
        <Header />
        <Main data={data} activeImg={this.state.url} show={this.state.show} showModal={this.showModal} hideModal={this.hideModal} />
        <SelectedBeast
          hideModal={this.hideModal}
          show={this.state.show}
          imageUrl={this.state.activeImg}
          title={this.state.activeTitle}
          description={this.state.activeDescription}
        />
        <Footer />
      </>
    )
  }
}
