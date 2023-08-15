import './styles/styles.css';
import TopBar from './components/TopBar';
import React, { useState, useEffect } from "react";
import FeaturedContent from './components/FeaturedContent';
import ImagesGrid from './components/ImagesGrid';

function App() {
  const [ selectedBreed, setSelectedBreed ] = useState(10);
  const [breeds, setBreeds] = useState(null);

    useEffect(( )=> {
      const getBreeds = async () =>{
        const response = await fetch("https://api.thecatapi.com/v1/breeds");
        const jsonResponse = await response.json();
        setBreeds(jsonResponse);
      }
      getBreeds();
      console.log(selectedBreed)
    },[]);

    useEffect(()=>{
      renderBreed();
    },selectedBreed)

  const changeSelectedBreed = (newBreed) =>{
    breeds.map((breed, index) =>{
      if(breed.name == newBreed)
        setSelectedBreed(index);
    })
    console.log(selectedBreed);
  }

  const renderBreed = () =>{
    return(
      <ImagesGrid breeds={breeds} selectedBreed={selectedBreed} />
    );
  }
  return (
    <div className="App">
      {breeds === null ? (<h2>Loading...</h2>) : (
        <>
      <TopBar breeds={breeds} selectedBreedChange={changeSelectedBreed} />
      <FeaturedContent breeds={breeds} />
      {renderBreed()}
      </>)}
    </div>
  );
}

export default App;
