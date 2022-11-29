// A Photo component that displays the li and img elements.
import React from "react";

const Photo = ({url}) => {
    return (
        <li>
            <img src={url} alt=""/>
        </li>
    );
};

export default Photo;