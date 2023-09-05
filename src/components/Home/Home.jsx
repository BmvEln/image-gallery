import styles from './Home.module.scss';

const Home = ({ children }) => {
  return (
    <div>
      <h1 className={styles.header__text}>Home</h1>
    </div>
  );
};

export default Home;
