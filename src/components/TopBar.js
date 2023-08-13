import "../styles/styles.css"
import React, { useState } from "react";
import { Dropdown } from 'primereact/dropdown';
import catLogo from "../images/catLogo.png"

const TopBar = () => {
    const [selectedBreed, setSelectedBreed] = useState(null);
    const cities = [
        { name: 'New York', code: 'NY' },
        { name: 'Rome', code: 'RM' },
        { name: 'London', code: 'LDN' },
        { name: 'Istanbul', code: 'IST' },
        { name: 'Paris', code: 'PRS' }
    ];
    return (
        <>
        <div className="app-bar">
            <div className="logo-name">
                <img className="cat-logo" src={catLogo} alt="Logo de catstagram" />
                <h1>Catstagram</h1>
            </div> 
            <div className="card flex justify-content-center">
                <select>
                    <option>opcion</option>
                </select>

            </div> 
        </div></>
    );
}

export default TopBar;