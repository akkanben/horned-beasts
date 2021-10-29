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
      value: '',
      horns: 'all',
      theme: {bg: 'light', variant: 'light', mainColor: 'white', footerColor: '#f8f9fa'},
    };
  }

  showModal = (url, title, description) => {
    this.setState({show: true, activeImg: url, activeTitle: title, activeDescription: description});
  };

  hideModal = () => this.setState({show: false});

  updateActiveFilter = (filter) => this.setState({value: filter})

  updateHornFilter = (numHorn) => this.setState({horns: numHorn});

  changeTheme = (bg, variant, mainColor, footerColor) => this.setState({theme: {bg: bg, variant: variant, mainColor: mainColor, footerColor: footerColor}});

  render() {
    return (
      <>
        <Header
          updateActiveFilter={this.updateActiveFilter}
          updateHornFilter={this.updateHornFilter}
          changeTheme={this.changeTheme}
          theme={this.state.theme}
          value={this.state.value} />
        <Main
          data={data}
          value={this.state.value}
          theme={this.state.theme}
          activeImg={this.state.url}
          horns={this.state.horns}
          show={this.state.show}
          showModal={this.showModal}
          hideModal={this.hideModal} />
        <SelectedBeast
          hideModal={this.hideModal}
          show={this.state.show}
          imageUrl={this.state.activeImg}
          title={this.state.activeTitle}
          description={this.state.activeDescription}
        />
        <Footer theme={this.state.theme} />
      </>
    )
  }
}
