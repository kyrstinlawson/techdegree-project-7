import React, {useEffect} from "react";
import { useParams } from "react-router-dom";

import Photo from "./Photo";
import NotFound from "./NotFound";

const PhotoContainer = ({search, getPhotos, photos, loading}) => {
    const {keyword} = useParams();
    let searchTerm = keyword ? keyword : search;
    
    useEffect(() => {getPhotos(searchTerm)}, [searchTerm]);

    photos = photos.map(photo => {
        return <Photo
            url={`https://live.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`}
            key={photo.id}
            />
    });

    return (
        <div className="photo-container">
            <h2>Results</h2>
            {loading ? <p>Loading...</p> : null}
            <ul>
                {photos.length > 0 ? photos : <NotFound/>}
            </ul>
        </div>
    );
};

export default PhotoContainer;