import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
    let {title,description,imgUrl,newsUrl} = this.props;
    return (
        <div className="card" style={{width: "18rem",margin:"auto",marginTop:"20px",border:"1px solid grey"}}>
        <img className="card-img-top" style={{height:"180px"}} src={imgUrl} alt="Cardcap"/>
        <div className="card-body" style={{height:"320px"}}>
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <a href={newsUrl} rel="noreferrer" target="_blank" className="btn btn-secondary">Visit Page</a>
        </div>
      </div>
    )
  }
}

export default NewsItem