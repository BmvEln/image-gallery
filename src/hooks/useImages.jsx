import axios from 'axios';
import { useCallback, useState } from 'react';

export const useImages = (url) => {
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);

  const getImages = useCallback(async () => {
    setLoading(true);

    let images = null;

    try {
      const response = await axios.get(url);
      images = response.data;
    } catch (error) {
      setError(error.message);
    }

    setLoading(false);
    return images;
  }, []);

  return { error, loading, getImages };
};
