import React, {Component} from 'react';

import CampaignCard from './CampaignCard';

export default class Campaigns extends Component {

  render() {
    return (
      <div className="Campaigns">
          {this.props.campaigns.map(campaign => {
              return <CampaignCard campaign={campaign} key={campaign.id} />
          })}
      </div>
    );
  }
}