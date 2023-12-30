import React, { Component } from 'react'

export default class NewsItem extends Component {
  render() {
    return (
        <div className="card" style={{width: "18rem",margin:"auto",marginTop:"20px",border:"1px solid grey"}}>
        <img className="card-img-top" src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg" alt="Card image cap"/>
        <div className="card-body">
          <h5 className="card-title">News title</h5>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="/" className="btn btn-secondary">Visit Page</a>
        </div>
      </div>
    )
  }
}
