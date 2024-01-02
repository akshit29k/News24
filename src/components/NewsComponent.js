import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Loader from './Loader';
import PropTypes from 'prop-types'


export default class NewsComponent extends Component {
    static propTypes = {
        category: PropTypes.string,
        pageSize: PropTypes.number
      };
    static defaultProps = {
        category: "general",
        pageSize: 10
      };
    constructor() {
        super();
        this.state = {
            articles: [],
            page: 1,
            loadGif:false
        }
    }   
   
    render() {
        let handleOnNext = async () =>{
            if(Math.ceil(this.state.totalResults/21)>this.state.page){
                let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=cc118c0073524e0b8ae342f3c22e5226&page=${this.state.page+1}&pagesize=${this.props.pageSize}`;
                this.setState({loadGif:true})
                let data = await fetch(url);
                let parsedData = await data.json();
                this.setState({ articles: parsedData.articles, page: this.state.page+1, loadGif:false });
            }
        }
        let handleOnPrev = async() =>{
            let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=cc118c0073524e0b8ae342f3c22e5226&page=${this.state.page-1}&pagesize=${this.props.pageSize}`;
            this.setState({loadGif:true})
            let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({ articles: parsedData.articles, page: this.state.page-1, loadGif:false });
        }
        return (
            <>
                <div className="container text-center">
                    <h2 style={{ fontSize: "3rem", marginTop: "20px" }}>News24 - Top Headlines</h2>
                    {this.state.loadGif && <Loader/>}
                    <div className='row'>
                        {
                            this.state.articles.map(element => {
                                  if (element.description != null && element.urlToImage != null && element.title != null && !this.state.loadGif) {
                                    return <div className="col-md-4" key={element.url}>
                                        <NewsItem title={(element.title).slice(0, 67)} description={(element.description).slice(0, 162)} imgUrl={element.urlToImage} newsUrl={element.url} />
                                    </div>}
                                
                                return null;
                            })};
                    </div>
                </div>
                {!this.state.loadGif &&  <div className="d-flex justify-content-around  my-4">
                <button disabled={this.state.page<= 1} className="page-link bg-dark text-light" onClick={handleOnPrev}>&larr; Previous</button>
                <button className="page-link bg-dark text-light" onClick={handleOnNext}>Next &rarr;</button>
                </div>
                } 
                
                
            </>
        )
    }

    async componentDidMount() {
        let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=cc118c0073524e0b8ae342f3c22e5226&page=1&pagesize=${this.props.pageSize}`;
        this.setState({loadGif:true})
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({ articles: parsedData.articles, totalResults:parsedData.totalResults, loadGif:false });
    }
}
