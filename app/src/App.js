import React, {Component} from 'react';
import { render } from 'react-dom';
import './App.css';

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      campaigns: []
    }
  }

  fetchData = () => {
    fetch('https://www.plugco.in/public/take_home_sample_feed')
    .then(resp => resp.json())
    .then(data => console.log(data))
  }

  componentDidMount() {
    this.fetchData()
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
        </header>
      </div>
    );
  }
}

