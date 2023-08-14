import "../styles/featuredContent.css"
import React, {useState, useEffect} from "react";

const FeaturedBreed = ({id, name}) => {
    const API_URL = `https://api.thecatapi.com/v1/images/search?breed_ids=${id}`
    const API_KEY = "cc87643e-9491-43ec-a884-5bfb536d96c4";
    const [catImage, setCatImage] = useState(null);

    useEffect(() => {
        requestCatImage();
    }, []);

    const requestCatImage = async () => {
        const headers = {
        'Content-Type': 'application/json',
        'x-api-key': API_KEY,
        };

        const apiResponse = await fetch(API_URL, { headers });
        const jsonResult = await apiResponse.json();
        setCatImage(jsonResult[0]);
    };
        
    return (
        <>
        <div className="featured-breed">
            <img className="featured-image" src={catImage? catImage.url : "https://cdn2.thecatapi.com/images/24p.jpg"} alt={name} />
            <h5 className="featured-cat-name">{name}</h5>
        </div>
        </>
    );
}

export default FeaturedBreed;