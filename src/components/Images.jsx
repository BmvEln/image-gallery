import Image from './Image';
import styles from './Images.module.scss';

const Images = ({ images, isLoading, error }) => {
  if (error) {
    return <h2 className={styles.h2}>Error: {error}</h2>;
  }

  return (
    <>
      <h1 className={styles.h1}>Image Gallery</h1>

      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
        <div className={styles.images}>
          {images.map((image) => {
            return <Image key={image.id} {...image} />;
          })}
        </div>
      )}
    </>
  );
};

export default Images;
