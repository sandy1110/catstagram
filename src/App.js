import './styles/styles.css';
import TopBar from './components/TopBar';
import React, { useState, useEffect } from "react";
import FeaturedContent from './components/FeaturedContent';
import ImagesGrid from './components/ImagesGrid';

function App() {

  const [breeds, setBreeds] = useState(null);

    useEffect(( )=> {
        const getBreeds = async () =>{
          const response = await fetch("https://api.thecatapi.com/v1/breeds");
          const jsonResponse = await response.json();
          setBreeds(jsonResponse);
        }
        getBreeds();
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
