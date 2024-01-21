import React, { useState,useEffect, useContext } from 'react'
import NewsItem from './NewsItem'
import Loader from './Loader';
import Spinner from './spinner'
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component';
import CountryContext from '../context/cntryContext';


export default function NewsComponent(props){
    const context = useContext(CountryContext);
    const [articles,setArticles] = useState([]);
    const [page,setPage] = useState(1);
    const [loadGif,setLoadGif] = useState(false);
    const [totalResults,setTotalResults] = useState(0);
    const [status,setStatus] = useState("error");
    
  
    const updateNews=async()=>{
        props.setProgress(10)
        let url = `https://newsapi.org/v2/top-headlines?country=${context.state.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pagesize=${props.pageSize}`;
        setLoadGif(true)
        let data = await fetch(url);
        let parsedData = await data.json();
        setArticles(parsedData.articles)
        setTotalResults(parsedData.totalResults)
        setStatus(parsedData.status)
        setLoadGif(false)
        props.setProgress(100)
    }
    useEffect(()=>{
    updateNews();
        // eslint-disable-next-line
    },[context.state.country])


    const fetchMoreData= async ()=>{
        props.setProgress(10)
        setPage(page+1)
        let url = `https://newsapi.org/v2/top-headlines?country=${context.state.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page+1}&pagesize=${props.pageSize}`;
        let data = await fetch(url);
        let parsedData = await data.json();
        setArticles(articles.concat(parsedData.articles));
        props.setProgress(100)
    }
        return (
            <>
                <div className="container text-center">
                    <h2 style={{ fontSize: "3rem", marginTop: "70px" }}>News24 - Top Headlines</h2>
                   
                 {status!=="error" && <InfiniteScroll
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
                            articles.map((element) => {
                                if (element.description != null && element.urlToImage != null && element.title != null) {
                                    return <div className="col-md-4" key={element.url}>
                                        <NewsItem title={(element.title).slice(0, 67)} description={(element.description).slice(0, 162)} imgUrl={element.urlToImage} newsUrl={element.url} pubDate={new Date(element.publishedAt).toUTCString()} author={element.author} source={element.source.name} />
                                    </div>
                                }
                                
                                return null;
                            
                            })

                           
                        };
                    </div>
                    </div>
                </InfiniteScroll>
}
{status === "error" && <h2>No data</h2>}
                    </div>
            </>
        )
}

    NewsComponent.propTypes = {
        category: PropTypes.string,
        pageSize: PropTypes.number,
        apiKey: PropTypes.string
    };
    NewsComponent.defaultProps = {
        category: "general",
        pageSize: 10
    };