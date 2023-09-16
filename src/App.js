import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Images from './components/Images/Images';
import Home from './components/Home/Home';
import About from './components/About/About';
import Contacts from './components/Contacts/Contacts';
import NotFound from './components/NotFound/NotFound';
import SingleImage from './components/SingleImage/SingleImage';
import MainLayout from './components/MainLayout/MainLayout';
import { API_URL_IMAGE } from './components/Constants/Constants';
import { useImages } from './hooks/useImages';
import './App.css';

function App() {
  const [images, setImages] = useState([]);
  const { error, loading, getImages } = useImages(API_URL_IMAGE);

  useEffect(() => {
    getImages().then((value) => setImages(value));
  }, []);

  if (!images) {
    return <h2 className="headingError">{`Error: ${error}`}</h2>;
  }

  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route
              path="images"
              element={<Images images={images} isLoading={loading} error={error} />}
            />
            <Route path="images/:imageId" element={<SingleImage images={images} />} />
            <Route path="about" element={<About />} />
            <Route path="contacts" element={<Contacts />} />
            <Route path="image-gallery" element={<Home />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
