import React from "react";
import "../styles/styles.css"
import catLogo from "../images/catLogo.png"

const TopBar = () => {
    return (
        <div className="app-bar">
            <div className="logo-name">
                <img className="cat-logo" src={catLogo} alt="Logo de catstagram" />
                <h1>Catstagram</h1>
            </div> 
            <div className="breed-selector">
                <select className="breed-selector">
                    <option>Breed</option>

                </select>
            </div> 
        </div>
    );
}

export default TopBar;