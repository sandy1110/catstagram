import "../styles/topBar.css"
import React, { useState, useEffect } from "react";
import Select from "react-select"
import catLogo from "../images/catLogo.png"

const TopBar = () => {
    const [breeds, setBreeds] = useState(null);
    const [selectedBreed, setSelectedBreed] = useState("Select breed");

    useEffect(( )=> {
        fetch("https://api.thecatapi.com/v1/breeds").then(res=>{ return res.json()})
            .then(res=>{
                console.log("Breeds",res);
                setBreeds(res);
                console.log(breeds);
            })
    },[]);

    const handleSelectedBreed = (e) => {
        setSelectedBreed(e.target.value)
        console.log("Selected breed",selectedBreed)
    }
    
    return (
        <>
        <div className="app-bar">
            <div className="logo-name">
                <img className="cat-logo" src={catLogo} alt="Logo de catstagram" />
                <h1>Catstagram</h1>
            </div> 
            <div className="breed-selector">
                <select className="selector" value={selectedBreed} onChange={ handleSelectedBreed }>
                    {breeds && breeds.map(breed => (
                        <option  key={breed.id}>{breed.name}</option>
                    ))}
                </select>

            </div> 
        </div></>
    );
}

export default TopBar;