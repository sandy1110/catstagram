import './styles/styles.css';
import TopBar from './components/TopBar';
import React, { useState, useEffect } from "react";
import FeaturedContent from './components/FeaturedContent';
import ImagesGrid from './components/ImagesGrid';
import DetailedCatImage from './components/DetailedCatImage';

function App() {

  const [breeds, setBreeds] = useState(null);

    useEffect(( )=> {
        fetch("https://api.thecatapi.com/v1/breeds").then(res=>{ return res.json()})
        .then(res=>{
            setBreeds(res);
        })
    },[]);

  return (
    <div className="App">
      <TopBar breeds={breeds} />
      <FeaturedContent breeds={breeds} />
      <ImagesGrid />
    </div>
  );
}

export default App;
