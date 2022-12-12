import React, {useEffect} from "react";
import { useParams } from "react-router-dom";

import Photo from "./Photo";
import NotFound from "./NotFound";

const PhotoContainer = ({term, getPhotos, photos, loading}) => {
    const {keyword} = useParams();
    let searchTerm = keyword ? keyword : term;
    
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
                {
                    (photos.length > 0 && !loading) ? photos
                    : (photos.length === 0 && !loading) ? <NotFound keyword={searchTerm} />
                    : null
                }
            </ul>
        </div>
    );
};

export default PhotoContainer;