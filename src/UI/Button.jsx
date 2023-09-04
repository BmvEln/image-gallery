import { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
import styles from './Button.module.scss';

const Button = ({ children }) => {
  const theme = useContext(ThemeContext);
  const className = 'button' + theme;

  return <button className={styles.button}>{children}</button>;
};

export default Button;
