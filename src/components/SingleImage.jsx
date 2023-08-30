import { useEffect, useContext } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { ImageContext } from '../Contexts/ImageContext';
import styles from './SingleImage.module.scss';

const SingleImage = () => {
  const { imageId } = useParams();
  const { images } = useContext(ImageContext);
  const navigate = useNavigate();

  const image = images.find((image) => {
    return image.id.toString() === imageId;
  });

  useEffect(() => {
    if (!image) {
      navigate('..', { relative: 'path' });
    }
  }, [image, navigate]);

  return (
    <>
      <div className={styles.singleImage}>
        <img src={image?.url} alt="" />
        <br />
        <p>{image?.title}</p>
      </div>
      <button className={styles.button}>
        <Link to=".." relative="path">
          All images
        </Link>
      </button>
    </>
  );
};

export default SingleImage;
