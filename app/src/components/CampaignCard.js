import React, {Component} from 'react';
import MediaCard from './MediaCard';

import { Carousel } from 'react-responsive-carousel';

import 'antd/dist/antd.css';
import { Avatar } from 'antd';


export default class CampaignCard extends Component {

  render() {
    return (
      <div className="CampaignsCard">
            <div>
                <Avatar
                    size={95}
                    src={this.props.campaign.campaign_icon_url}
                    className="campaign-avatar"
                />
                
                <h3 className="campaign-title">{this.props.campaign.campaign_name}</h3>
                <h3 className="campaign-pay">{this.props.campaign.pay_per_install} per install</h3>
            </div>

            <div className="media-container">
                {this.props.campaign.medias.map(media => {
                    return <MediaCard media={media} key={media.id} />
                })}
            </div>
      </div>
    );
  }
}