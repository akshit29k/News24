import React, { Component } from 'react'
import NewsItem from './NewsItem'

export default class NewsComponent extends Component {
  render() {
    return (
        <>
        <div className="container text-center">
        <h2 style={{fontSize: "3rem",marginTop:"20px"}}>News24 - Top Headlines</h2>
      <div style={{display:"flex"}}>
        <NewsItem/>
        <NewsItem/>
        <NewsItem/>
      </div>
      <div style={{display:"flex"}}>
        <NewsItem/>
        <NewsItem/>
        <NewsItem/>
      </div>
      <div style={{display:"flex"}}>
        <NewsItem/>
        <NewsItem/>
        <NewsItem/>
      </div>
        </div>
        </>
    )
  }
}
