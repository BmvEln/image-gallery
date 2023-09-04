import { useEffect, useContext } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { LIMIT_PHOTOS } from '../Constants/Constants';
import styles from './SingleImage.module.scss';

const SingleImage = ({ images }) => {
  const { imageId } = useParams();
  const navigate = useNavigate();

  const image = images.find((image) => {
    return image.id.toString() === imageId;
  });

  // При 12 > 12 переводить на все картинки
  useEffect(() => {
    if (LIMIT_PHOTOS > 12) {
      navigate('..', { relative: 'path' });
    }
  }, [LIMIT_PHOTOS, navigate]);

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
