import "../styles/imagesGrid.css"
import React, {useEffect, useState} from "react";
import GlobalCatImage from "./GlobalCatImage";
import 'primeicons/primeicons.css';

const TabBar = (props) => {
    const [ toogleHistory, setToogleHistory] = useState(false);
    const breeds = props.breeds;
    const [selectedBreed, setSelectedBreed] = useState(breeds[props.selectedBreed]);
    const API_URL = `https://api.thecatapi.com/v1/images/search?breed_ids=${selectedBreed.id}&limit=20`
    const API_KEY = "cc87643e-9491-43ec-a884-5bfb536d96c4";
    const [catsArray, setCatsArray] = useState([]);
  
    useEffect(() => {
        requestCats();
        console.log(catsArray);
    }, []);

    useEffect(() => {
        setSelectedBreed(breeds[props.selectedBreed]);
        requestCats();
        console.log("new breed", selectedBreed);
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
      <div>
        <div className="tab-menu">
            <div className="tab">
                <i className="pi pi-home" style={{ fontSize: '1.3rem' }}></i>
                <h4>Home</h4>
            </div>
            <div className="tab">
                <i className="pi pi-history" style={{ fontSize: '1.2rem' }}></i>
                <h4>History</h4>
            </div>
    </div>
    <div className="images-grid">
            {catsArray.length === 0 ? (
            <h2>Loading...</h2>
            ) : ( !toogleHistory  ?
            catsArray.map((cat) => (
                <React.Fragment key={cat.id}>
                    <GlobalCatImage id={cat.id} catImage={cat.url} 
                        breed={selectedBreed} />
                </React.Fragment>
            ))  : <h2>History</h2>
        )}
        </div>
      </div>
    );
  };

export default TabBar;