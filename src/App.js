import { BrowserRouter, Route, Routes } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Images from './components/Images';
import Home from './components/Home';
import About from './components/About';
import Contacts from './components/Contacts';
import NotFound from './components/NotFound';
import SingleImage from './components/SingleImage';
import MainLayout from './components/MainLayout';
import { ImageContext } from './Contexts/ImageContext';
import './App.css';

const LIMIT_PHOTOS = 12;
const URL_IMAGE = `https://jsonplaceholder.typicode.com/photos?_start=0&_limit=${LIMIT_PHOTOS}`;

function App() {
  const [images, setImages] = useState([]);
  const [error, setError] = useState('');
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(URL_IMAGE)
      .then((data) => {
        setImages(data.data);
      })
      .catch((error) => setError(error.message))
      .finally(() => setLoading(false));
  }, []);

  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route
              path="images"
              element={
                <Images images={images} isLoading={isLoading} error={error} />
              }
            />
            <Route
              path="images/:imageId"
              element={
                <ImageContext.Provider value={{ images }}>
                  <SingleImage />
                </ImageContext.Provider>
              }
            />
            <Route path="about" element={<About />} />
            <Route path="contacts" element={<Contacts />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
