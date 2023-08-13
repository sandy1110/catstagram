import "../styles/featuredContent.css"
import React, { useState, useEffect } from "react";
import FeaturedBreed from "./FeaturedBreed";

const FeaturedContent = (props) => {
    const breeds = props.breeds;
    const [randomBreeds, setRandomBreeds] = useState([]);

    const [catsArray, setCatsArray] = useState([]);

    useEffect(()=>{

        let lista=[];
        for(let i=0;i<=66;i++){
            lista.push(i);
        }
        lista = lista.sort(function() {return Math.random() - 0.5});
        setRandomBreeds(lista.splice(0,7));

        randomBreeds.map(cat =>{
            const catId = breeds[cat].id;
            console.log(catId);
            fetch(`https://api.thecatapi.com/v1/images/search?breed_ids=${catId}`)
            .then(res=>{ return res.json()})
            .then(res=>{
                console.log("image",res[0].url);
                setCatsArray(catsArray.push(res[0].url));
                console.log(catsArray);
            })
        })
    },[]);

        
    return (
        <>
        <div className="featured-breeds">
            {breeds === null ? <h2>Loading...</h2> :randomBreeds.map(breedId =>
                
            (
                <FeaturedBreed key={breedId} image={"https://cdn2.thecatapi.com/images/24p.jpg"} name={breeds[breedId].name}/>
            ))}
        </div></>
    );
}

export default FeaturedContent;