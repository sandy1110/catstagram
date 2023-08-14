import React from 'react'; 
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import "../styles/cardImage.css"

const DetailedCatImage =() => {
    const header = (
        <div className="header">
            <h3>Title</h3>
            <Button label="X" icon="pi pi-times" className="p-button-outlined p-button-secondary" />
        </div>
    );

    return (
        <div className="card-container">
            <Card header={header} className="card">
                <img className="detailed-image" alt="Card" src="https://primefaces.org/cdn/primereact/images/usercard.png" />
                <p className="cat-description">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae 
                    numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!
                </p>
            </Card>
        </div>
    )
}

export default DetailedCatImage;