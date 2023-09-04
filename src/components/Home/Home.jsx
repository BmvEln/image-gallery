import styles from './Home.module.scss';

const Home = ({ children }) => {
  return (
    <div className={styles.header__text}>
      <h2>Home</h2>
    </div>
  );
};

export default Home;
