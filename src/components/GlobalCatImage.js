import "../styles/imagesGrid.css"
import React, {useState} from "react";
import DetailedCatImage from "./DetailedCatImage";

const GlobalCatImage = (props) => {

    const [visibility, setVisbility] = useState (false);

    const showDetailedCat = () => {
        console.log("showing cat");
        setVisbility(true);
    }

    return (
        <>
        <div className="cat-image-box" key={props.id} onClick={showDetailedCat}>
            <img className="cat-image" src={props.url} alt={props.id} />
        </div>
        {visibility && (
        <DetailedCatImage />
        )}
        </>
    );
}

export default GlobalCatImage;