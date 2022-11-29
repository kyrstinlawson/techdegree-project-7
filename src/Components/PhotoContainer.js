import React, {useEffect} from "react";
import { useParams } from "react-router-dom";

import Photo from "./Photo";
import NotFound from "./NotFound";

const PhotoContainer = ({getPhotos, photos, loading}) => {
    const {keyword} = useParams();
    
    useEffect(() => {getPhotos})

    return (
        <div class="photo-container">
            <h2>Results</h2>
        </div>
    );
};

export default PhotoContainer;