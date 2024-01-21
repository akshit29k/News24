import './App.css';

import React, { useState } from 'react';
import Navbar from './components/Navbar';
import NewsComponent from './components/NewsComponent';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar';
import CountryState from './context/CountryContext';


export default function App(){ 
  const [progress,setProgress] = useState(0)
  const apiKey = "ce77986e9b4f48adbe47a08dc953db0b";
    return (
      <>
      <CountryState>
      <Router>
      <LoadingBar
        color='#f11946'
        progress={progress}
      />
      <Navbar/>
      <Routes>
        <Route path="/" element={<NewsComponent setProgress={setProgress} key="home"  category="general" apiKey={apiKey} pageSize={9}/>}/>
        <Route path="/general" element={<NewsComponent setProgress={setProgress} key="general"  category="general" apiKey={apiKey} pageSize={9}/>}/>
        <Route path="/entertainment" element={<NewsComponent setProgress={setProgress} key="entertainment" category="entertainment" apiKey={apiKey} pageSize={9}/>}/>
        <Route path="/business" element={<NewsComponent setProgress={setProgress} key="business" category="business" apiKey={apiKey} pageSize={9}/>}/>
        <Route path="/science" element={<NewsComponent setProgress={setProgress} key="science" category="science" apiKey={apiKey} pageSize={9}/>}/>
        <Route path="/sports" element={<NewsComponent setProgress={setProgress} key="sports" category="sports" apiKey={apiKey} pageSize={9}/>}/>
        <Route path="/technology" element={<NewsComponent setProgress={setProgress} key="technology" category="technology" apiKey={apiKey} pageSize={9}/>}/>
        <Route path="/health" element={<NewsComponent setProgress={setProgress} key="health" category="health" apiKey={apiKey} pageSize={9}/>}/>
        
      </Routes>
      </Router>
      </CountryState>
      </>
    )
  
}

