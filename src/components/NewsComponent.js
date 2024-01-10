import React, { useState,useEffect } from 'react'
import NewsItem from './NewsItem'
import Loader from './Loader';
import Spinner from './spinner'
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component';


export default function NewsComponent(props){
    const [articles,setArticles] = useState([]);
    const [page,setPage] = useState(1);
    const [loadGif,setLoadGif] = useState(false);
    const [totalResults,setTotalResults] = useState(0);
    
  
    const updateNews=async()=>{
        props.setProgress(10)
        let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=cc118c0073524e0b8ae342f3c22e5226&page=${page}&pagesize=${props.pageSize}`;
        setLoadGif(true)
        let data = await fetch(url);
        let parsedData = await data.json();
        setArticles(parsedData.articles)
        setTotalResults(parsedData.totalResults)
        setLoadGif(false)
        props.setProgress(100)
    }
    useEffect(()=>{
        updateNews();
    },[])

    const fetchMoreData= async ()=>{
        props.setProgress(10)
        setPage(page+1)
        let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=cc118c0073524e0b8ae342f3c22e5226&page=${page+1}&pagesize=${props.pageSize}`;
        let data = await fetch(url);
        let parsedData = await data.json();
        setArticles([...articles,...parsedData.articles]);
        props.setProgress(100)
    }
        return (
            <>
                <div className="container text-center">
                    <h2 style={{ fontSize: "3rem", marginTop: "20px" }}>News24 - Top Headlines</h2>
                <InfiniteScroll
                    dataLength={articles.length}
                    next={fetchMoreData}
                    hasMore={articles.length !== totalResults} // Replace with a condition based on your data source
                    loader={<Spinner />}
                    endMessage={!loadGif &&
                        <p style={{ textAlign: 'center' , marginTop:"20px" }}>
                          <b style={{ fontSize:"20px" }}>Yay! You have seen it all</b>
                        </p>
                      }
                    >
                        <div className="container">
                            {loadGif && <Loader/>}
                    <div className='row'>
                        {
                            articles.map(element => {
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

    NewsComponent.propTypes = {
        category: PropTypes.string,
        pageSize: PropTypes.number,
        country: PropTypes.string
    };
    NewsComponent.defaultProps = {
        category: "general",
        pageSize: 10,
        country: "in"
    };