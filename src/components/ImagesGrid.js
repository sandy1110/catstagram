import "../styles/imagesGrid.css"
import React, {useEffect, useState} from "react";
import GlobalCatImage from "./GlobalCatImage";

const ImagesGrid = (props) => {
    const breeds = props.breeds;
    const [selectedBreed, setSelectedBreed] = useState(breeds[props.selectedBreed]);
    const API_URL = `https://api.thecatapi.com/v1/images/search?breed_ids=${selectedBreed.id}&limit=40`
    const API_KEY = "cc87643e-9491-43ec-a884-5bfb536d96c4";
    const [catsArray, setCatsArray] = useState([]);
  
    useEffect(() => {
        requestCats();
        console.log(catsArray)
    }, []);

    useEffect(() => {
        requestCats();
    }, selectedBreed);
  
    const requestCats = async () => {
        const headers = {
            'Content-Type': 'application/json',
            'x-api-key': API_KEY,
        };
    
        const apiResponse = await fetch(API_URL,{headers});
        const jsonResult = await apiResponse.json();
        setCatsArray(jsonResult);
    };
  
    return (
      <>
        <div className="images-grid">
          {catsArray.length === 0 ? (
            <h2>Loading...</h2>
          ) : (
            catsArray.map((cat) => (
                <React.Fragment key={cat.id}>
                    <GlobalCatImage id={cat.id} catImage={cat.url} 
                        breed={selectedBreed} />
              </React.Fragment>
            ))
          )}
        </div>
      </>
    );
  };

export default ImagesGrid;