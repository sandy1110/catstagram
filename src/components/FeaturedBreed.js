import "../styles/featuredContent.css"
import React from "react";

const FeaturedBreed = (props) => {
        
    return (
        <>
        <div className="featured-breed">
            <img className="featured-image" src={props.image} alt={props.name} />
            <h5 className="featured-cat-name">{props.name}</h5>
        </div>
        </>
    );
}

export default FeaturedBreed;