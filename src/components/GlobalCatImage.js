import "../styles/imagesGrid.css"
import React from "react";

const GlobalCatImage = (props) => {

    return (
        <>
        <div className="cat-image-box" key={props.id}>
            <img className="cat-image" src={props.url} alt={props.id} />
        </div>
        </>
    );
}

export default GlobalCatImage;