import React, { Component } from 'react';

class Band extends Component {
  handleonClick=(e)=>{
    this.props.deleteBand(this.props.band.id)
  }
  render() {
    return(
      <div>
        <li key={this.props.band.id}>{this.props.band.name}</li>
        <button onClick={this.handleonClick}>Delete</button>
      </div>
    );
  }
};

export default Band;
