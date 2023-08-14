import "../styles/imagesGrid.css"
import React, {useState} from "react";
import DetailedCatImage from "./DetailedCatImage";

const GlobalCatImage = (props) => {

    const [visibility, setVisbility] = useState (false);
    
    const showDetailedCat = () => {
        console.log(props.id)
        setVisbility(true);
    }

    const hideDetailedCat = () => {
        setVisbility(false);
    }

    return (
        <>
        <div className="cat-image-box" key={props.id} onClick={showDetailedCat}>
            <img className="cat-image" src={props.catImage} alt={props.id} />
        </div>
        {visibility && (
        <DetailedCatImage breed={props.breed} image={props.catImage} onVisibleChange={hideDetailedCat} />
        )}
        </>
    );
}

export default GlobalCatImage;