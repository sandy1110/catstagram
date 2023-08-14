import "../styles/featuredContent.css"
import React, { useState, useEffect } from "react";
import FeaturedBreed from "./FeaturedBreed";

const FeaturedContent = (props) => {
    const breeds = props.breeds;
    const [randomBreeds, setRandomBreeds] = useState([]);

    useEffect(()=>{
        let lista=[];
        for(let i=0;i<=66;i++){
            lista.push(i);
        }
        lista = lista.sort(function() {return Math.random() - 0.5});
        setRandomBreeds(lista.splice(0,7));
    },[]);
  
    return (
        <>
        <div className="featured-breeds">
            {breeds === null ? <h2>Loading...</h2> : randomBreeds.map(breedId =>
                (<FeaturedBreed key={breedId} id={breeds[breedId].id} name={breeds[breedId].name}/>
                ))}
        </div></>
    );
}

export default FeaturedContent;