import React, { Component } from 'react';
import LoaderGif from '../loading.gif';

export default class Loader extends Component {
  render() {
    return (
      <div>
       <img src={LoaderGif} alt="loader" />
      </div>
    )
  }
}
