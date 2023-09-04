import { useContext } from 'react';
import { ThemeContext } from '../../contexts/ThemeContext';
import styles from './Panel.module.scss';

const Panel = ({ title, children }) => {
  const theme = useContext(ThemeContext);

  return (
    <section
    // className={`${styles.panel} ${
    //   theme === 'Light' ? styles.panelLight : styles.panelDark
    // }`}
    >
      <p>{title}</p>
      {children}
    </section>
  );
};

export default Panel;
