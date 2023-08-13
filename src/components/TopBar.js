import "../styles/topBar.css"
import React, { useState } from "react";
import catLogo from "../images/catLogo.png"

const TopBar = (props) => {
    const breeds = props.breeds;
    const [selectedBreed, setSelectedBreed] = useState(null);

    const handleSelectedBreed = (e) => {
        setSelectedBreed(e.target.value)
        console.log("Selected",e.target.value);
        console.log("Selected breed",selectedBreed);
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
                        <option key={breed.id}>{breed.name}</option>
                    ))}
                </select>
            </div> 
        </div></>
    );
}

export default TopBar;