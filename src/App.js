import './styles/styles.css';
import TopBar from './components/TopBar';
import React, { useState, useEffect } from "react";
import FeaturedContent from './components/FeaturedContent';
import ImagesGrid from './components/ImagesGrid';

function App() {
  const [ selectedBreed, setSelectedBreed ] = useState(Math.floor(Math.random() * 66));
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
      {breeds === null ? (<h2>Loading...</h2>) : (
        <>
      <TopBar breeds={breeds} />
      <FeaturedContent breeds={breeds} />
      <ImagesGrid breeds={breeds} selectedBreed={selectedBreed} />
      </>)}
    </div>
  );
}

export default App;
