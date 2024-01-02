import './App.css';

import React, { Component } from 'react'
import Navbar from './components/Navbar';
import NewsComponent from './components/NewsComponent';

export default class App extends Component {
  render() {
    return (
      <>
      <Navbar/>
      <NewsComponent category="sports" pageSize={21}/>
      </>
    )
  }
}

