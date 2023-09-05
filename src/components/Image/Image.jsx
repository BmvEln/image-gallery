import { Link } from 'react-router-dom';
import styles from './Image.module.scss';

const Image = (props) => {
  const { title, id, url } = props;
  return (
    <Link to={id.toString()} className={styles.image}>
      <img src={url} alt="img" />
      <br />
      <p>{title}</p>
    </Link>
  );
};

export default Image;
