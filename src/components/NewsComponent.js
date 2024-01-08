import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Loader from './Loader';
import Spinner from './spinner'
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component';


export default class NewsComponent extends Component {
    static propTypes = {
        category: PropTypes.string,
        pageSize: PropTypes.number,
        country: PropTypes.string
    };
    static defaultProps = {
        category: "general",
        pageSize: 10,
        country: "in"
    };
    constructor() {
        super();
        this.state = {
            articles: [],
            page: 1,
            loadGif: false,
            totalResults:0
        }
    }
    async componentDidMount() {
        this.props.setProgress(10)
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=cc118c0073524e0b8ae342f3c22e5226&page=${this.state.page}&pagesize=${this.props.pageSize}`;
        this.setState({loadGif:true})
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({ articles: parsedData.articles, totalResults: parsedData.totalResults,loadGif:false});
        this.props.setProgress(100)
    }
    fetchMoreData= async ()=>{
        this.props.setProgress(10)
        this.setState({page:this.state.page+1})
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=cc118c0073524e0b8ae342f3c22e5226&page=${this.state.page+1}&pagesize=${this.props.pageSize}`;
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({ articles:[...this.state.articles,...parsedData.articles] });
        this.props.setProgress(100)
    }
    render() {
        return (
            <>
                <div className="container text-center">
                    <h2 style={{ fontSize: "3rem", marginTop: "20px" }}>News24 - Top Headlines</h2>
                <InfiniteScroll
                    dataLength={this.state.articles.length}
                    next={this.fetchMoreData}
                    hasMore={this.state.articles.length !== this.state.totalResults} // Replace with a condition based on your data source
                    loader={<Spinner />}
                    endMessage={!this.state.loadGif &&
                        <p style={{ textAlign: 'center' , marginTop:"20px" }}>
                          <b style={{ fontSize:"20px" }}>Yay! You have seen it all</b>
                        </p>
                      }
                    >
                        <div className="container">
                            {this.state.loadGif && <Loader/>}
                    <div className='row'>
                        {
                            this.state.articles.map(element => {
                                if (element.description != null && element.urlToImage != null && element.title != null) {
                                    return <div className="col-md-4" key={element.url}>
                                        <NewsItem title={(element.title).slice(0, 67)} description={(element.description).slice(0, 162)} imgUrl={element.urlToImage} newsUrl={element.url} pubDate={new Date(element.publishedAt).toUTCString()} author={element.author} source={element.source.name} />
                                    </div>
                                }
                                
                                return null;
                            })};
                    </div>
                    </div>
                </InfiniteScroll>
                    </div>
            </>
        )
    }

}
