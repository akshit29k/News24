import React, { Component } from 'react'
import NewsItem from './NewsItem'

export default class NewsComponent extends Component {
    constructor(){
        super();
        this.state = {
            articles:[]
        }
    }
  render() {
    return (
        <>
        <div className="container text-center">
        <h2 style={{fontSize: "3rem",marginTop:"20px"}}>News24 - Top Headlines</h2>
        <div className='row'>
        {
         this.state.articles.map(element => { 
            if(element.description!=null && element.urlToImage != null && element.title != null){    
        return <div className="col md-3" key={element.url}>
        <NewsItem title={(element.title).slice(0,67)} description={(element.description).slice(0,162)} imgUrl={element.urlToImage} newsUrl={element.url}/>
        </div>
            }
            return null;
         })};
         </div>
        </div>
        </>
    )
  }

  async componentDidMount(){
    let url = "https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=cc118c0073524e0b8ae342f3c22e5226&page=1&pagesize=21";
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({articles:parsedData.articles});
  }
}
