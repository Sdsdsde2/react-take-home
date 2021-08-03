import React, {Component} from 'react';
import './App.css';

import Campaigns from './components/Campaigns';

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      campaigns: [],
      fetched: "FALSE"
    }
  }

  fetchData = () => {
    fetch('https://www.plugco.in/public/take_home_sample_feed')
    .then(resp => resp.json())
    .then(data => {
      return this.setState({
        campaigns: data.campaigns,
        fetched: "TRUE"
      })
    })
  }

  renderCampaigns() {
    if (this.state.fetched === "TRUE")
      return <Campaigns campaigns={this.state.campaigns} />
  }

  componentDidMount() {
    this.fetchData()
    this.renderCampaigns()
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          {this.renderCampaigns()}
        </header>
      </div>
    );
  }
}

