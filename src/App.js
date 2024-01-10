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


export default function App(){ 
  const [progress,setProgress] = useState(0)
 
    return (
      <>
      <Router>
      <LoadingBar
        color='#f11946'
        progress={progress}
      />
      <Navbar/>
      <Routes>
        <Route path="/" element={<NewsComponent setProgress={setProgress} key="home"  category="general" pageSize={9}/>}/>
        <Route path="/general" element={<NewsComponent setProgress={setProgress} key="general"  category="general" pageSize={9}/>}/>
        <Route path="/entertainment" element={<NewsComponent setProgress={setProgress} key="entertainment" category="entertainment" pageSize={9}/>}/>
        <Route path="/business" element={<NewsComponent setProgress={setProgress} key="business" category="business" pageSize={9}/>}/>
        <Route path="/science" element={<NewsComponent setProgress={setProgress} key="science" category="science" pageSize={9}/>}/>
        <Route path="/sports" element={<NewsComponent setProgress={setProgress} key="sports" category="sports" pageSize={9}/>}/>
        <Route path="/technology" element={<NewsComponent setProgress={setProgress} key="technology" category="technology" pageSize={9}/>}/>
        <Route path="/health" element={<NewsComponent setProgress={setProgress} key="health" category="health" pageSize={9}/>}/>
      </Routes>
      </Router>
      </>
    )
  
}

