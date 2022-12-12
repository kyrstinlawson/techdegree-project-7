import React, {useState, useEffect} from "react";
import {Routes, Route, Navigate} from "react-router-dom";
import axios from "axios";
import apiKey from "./config";

import SearchForm from "./Components/SearchForm";
import Nav from "./Components/Nav";
import PhotoContainer from "./Components/PhotoContainer";
import PageNotFound from "./Components/PageNotFound";


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
        <Route path="/sunsets" element={<PhotoContainer term={"sunsets"} getPhotos={getPhotos} photos={photos} loading={loading}/>} />
        <Route path="/dogs" element={<PhotoContainer term={"dogs"} getPhotos={getPhotos} photos={photos} loading={loading}/>} />
        <Route path="/trees" element={<PhotoContainer term={"trees"} getPhotos={getPhotos} photos={photos} loading={loading}/>} />
        <Route path="search/:keyword" element={<PhotoContainer getPhotos={getPhotos} photos={photos} loading={loading} />} />
        <Route path="*" element={<PageNotFound/>} />
      </Routes>
    </div>
  );
};

export default App;
