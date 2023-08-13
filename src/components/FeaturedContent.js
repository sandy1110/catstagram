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
        setRandomBreeds(lista.splice(0,6));
    },[])

    const getCatImage = (id) =>{
        let image;
        fetch(`https://api.thecatapi.com/v1/images/search?breed_ids=${id}`)
        .then(res=>{ return res.json()})
        .then(res=>{
            console.log("image",res);
            image= res;
        })
        return image;
    }
        
    return (
        <>
        <div className="featured-breeds">
            {breeds === null ? <h2>Loading...</h2> :randomBreeds.map(breedId =>
            (
                <FeaturedBreed image={"https://api.thecatapi.com/v1/images/0XYvRd7oD"} name= {breeds[breedId].name}/>
            ))}
        </div></>
    );
}

export default FeaturedContent;