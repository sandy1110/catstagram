import "../styles/imagesGrid.css"
import React, {useEffect, useState} from "react";

const ImagesGrid = () => {
    const API_URL = "https://api.thecatapi.com/v1/images/search?limit=20";
    const API_KEY = "cc87643e-9491-43ec-a884-5bfb536d96c4";

    const [catsArray, setCatsArray] = useState([]);

    useEffect(()=>{
        requestCats();
    },[]);

    const requestCats= async () => {
        const headers = {
            'Content-Type' : 'application/json',
            'x-api-key' : API_KEY,
        }

        const apiResponse = await fetch(API_URL, {headers});
        const jsonResult = await apiResponse.json();
        console.log(jsonResult);
        setCatsArray(jsonResult);
    }

    return (
        <>
        <div className="images-grid">
        {catsArray === null ? <h2>Loading...</h2> :catsArray.map(cat =>(
            <div className="cat-image-box">
            <img className="cat-image" src={cat.url} alt={cat.id} />
            </div>
        ))}
        </div>
        </>
    );
}

export default ImagesGrid;