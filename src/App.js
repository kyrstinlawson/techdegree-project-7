import React from "react";
import {Route, Routes} from "react-router-dom";
import {useState, useEffect} from "react";
import axios from "axios";

import apiKey from "./config";
import SearchForm from "./Components/SearchForm";
import Nav from "./Components/Nav";
import PhotoContainer from "./Components/PhotoContainer";


const App = () => {
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(true);

  const getPhotos = (keyword) => {
    setLoading(true);
    axios
      .get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${keyword}&per_page=24&format=json&nojsoncallback=1`)
      .then((data) => {
        setLoading(false);
        setPhotos(data.data.photos.photo);
      })
      .catch(error => {console.log("Error fetching and parsing data", error)})
  };

  return (
    <div className="container">
      <SearchForm/>
      <Nav/>

      <Routes>
        <Route path="/" element={<PhotoContainer getPhotos={getPhotos} photos={photos} loading={loading}/>} />
        <Route path="/babies" element={<PhotoContainer search={"babies"} getPhotos={getPhotos} photos={photos} loading={loading}/>} />
      </Routes>
    </div>
  );
};

export default App;
