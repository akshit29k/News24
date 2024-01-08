import React, { Component } from 'react';
import SpinnerGif from '../spinner.gif';

export default class Spinner extends Component {
  render() {
    return (
      <div>
       <img src={SpinnerGif} alt="spinner" />
      </div>
    )
  }
}
