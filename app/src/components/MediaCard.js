import React, {Component} from 'react';

export default class MediaCard extends Component {

  render() {
    return (
      <div className="MediaCard">
            <div className="media-slider">
                <img src={this.props.media.cover_photo_url} className="campaign-cover"></img>
                <a href={this.props.media.download_url} download="download">Click to download</a>
                {/* <button onClick={() => {navigator.clipboard.writeText(this.props.medias[0].tracking_link)}}>Copy Link</button> */}
                <button onClick={() => {navigator.clipboard.writeText(this.props.media.tracking_link)}} className="campaign-link">Copy Link</button>
                {/* <a href={this.props.medias[0].download_url} download>Click to download</a> */}
            </div>
      </div>
    );
  }
}