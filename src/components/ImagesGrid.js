import "../styles/imagesGrid.css"
import React, {useEffect, useState} from "react";
import GlobalCatImage from "./GlobalCatImage";

const ImagesGrid = () => {
    const API_URL = "https://api.thecatapi.com/v1/images/search?limit=20";
    const API_KEY = "cc87643e-9491-43ec-a884-5bfb536d96c4";

    const [catsArray, setCatsArray] = useState([]);

    useEffect(()=>{
        requestCats();
    },[]);

    const requestCats = async () => {
        const headers = {
            'Content-Type' : 'application/json',
            'x-api-key' : API_KEY,
        }

        const apiResponse = await fetch(API_URL, {headers});
        const jsonResult = await apiResponse.json();
        setCatsArray(jsonResult);
    }

    return (
        <>
        <div className="images-grid">
        {catsArray === null ? <h2>Loading...</h2> :catsArray.map(cat =>(
            <GlobalCatImage key={cat.id} id={cat.id} url={cat.url} />
        ))}
        </div>
        </>
    );
}

export default ImagesGrid;