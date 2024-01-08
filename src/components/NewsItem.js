import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
    let {title,description,imgUrl,newsUrl,author,pubDate,source} = this.props;
    return (
        <div className="card" style={{margin:"auto",marginTop:"20px",border:"1px solid grey"}}>
            <span style={{position: "absolute",bottom:"98%",zIndex:"1"}} className=" translate-middle badge rounded-pill bg-danger">{source}</span>
        <img className="card-img-top" style={{height:"200px"}} src={imgUrl} alt="Cardcap"/>
        <div className="card-body" style={{height:"330px"}}>
          <h5 className="card-title">{title}</h5>
          <p className="card-text" style={{marginBottom:"0px"}}>{description}</p>
          <p className="card-text" style={{marginBottom:"0px"}}><small className="text-body-secondary">By {author}</small></p>
          <p className="card-text"><small className="text-body-secondary">On {pubDate}</small></p>
          <a href={newsUrl} rel="noreferrer" target="_blank" className="btn btn-secondary">Visit Page</a>
        </div>
      </div>
    )
  }
}

export default NewsItem