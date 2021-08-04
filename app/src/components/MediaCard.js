import React, {Component} from 'react';

import { Carousel } from 'react-responsive-carousel';

export default class MediaCard extends Component {

  render() {
    return (
      <div className="media-slider">
                    <img src={this.props.media.cover_photo_url} className="campaign-cover"></img>
                    <a href={this.props.media.download_url} download>
                        <button onClick={() => {navigator.clipboard.writeText(this.props.medias[0].tracking_link)}} className="campaign-link">Download</button>
                    </a>
                    <button onClick={() => {navigator.clipboard.writeText(this.props.media.tracking_link)}} className="campaign-link">Copy</button>
      </div>
    );
  }
}