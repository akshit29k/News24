import React from 'react';
import LoaderGif from '../loading.gif';


export default function Loader() { 
  
    return (
      <div>
       <img src={LoaderGif} alt="loader" />
      </div>
    )
  
}
