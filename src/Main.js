import {Component} from 'react';
import HornedBeasts from './HornedBeasts';
import data from './data.json';

const beastsArray = [];


for (let i = 0; i < data.length; i++) {
  beastsArray.push(<HornedBeasts title={data[i].title} imageUrl={data[i].image_url} description={data[i].description} />);
}

class Main extends Component {
  render() {
    return (
      <main>
        {beastsArray}
      </main>
    )
  }
}

export default Main;
