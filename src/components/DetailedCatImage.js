import React from 'react'; 
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import "../styles/cardImage.css"

const DetailedCatImage =({ breed, image, onVisibleChange }) => {

    const handleVisible = () =>{
        onVisibleChange(false);
    }

    const header = (
        <div className="header">
            <h3>{breed.name}</h3>
            <Button label="X" className="button" onClick={handleVisible} />
        </div>
    );

    return (
        <div className="card-container">
            <Card header={header} className="card">
                <img className="detailed-image" alt="Card" src={image} />
                <p className="cat-description">
                    {breed.description}
                </p>
            </Card>
        </div>
    )
}

export default DetailedCatImage;