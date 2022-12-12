import React, {useState, useEffect} from "react";
import {Routes, Route, Navigate} from "react-router-dom";
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
        setLoading(false)
        setPhotos(data.data.photos.photo)
      })
      .catch(error => {console.log("Error fetching and parsing data", error)})
  };

  return (
    <div className="container">
      <SearchForm/>
      <Nav/>

      <Routes>
        <Route path="/" element={<PhotoContainer getPhotos={getPhotos} photos={photos} loading={loading}/>} />
        <Route path="/cats" element={<PhotoContainer term={"cats"} getPhotos={getPhotos} photos={photos} loading={loading}/>} />
        <Route path="/dogs" element={<PhotoContainer term={"dogs"} getPhotos={getPhotos} photos={photos} loading={loading}/>} />
        <Route path="/computers" element={<PhotoContainer term={"computers"} getPhotos={getPhotos} photos={photos} loading={loading}/>} />
        <Route path="search/:topic" element={<PhotoContainer getPhotos={getPhotos} photos={photos} loading={loading} />} />
      </Routes>
    </div>
  );
};

export default App;
