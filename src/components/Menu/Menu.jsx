import { NavLink } from 'react-router-dom';
import styles from './Menu.module.scss';
import { useTheme } from '../../hooks/useTheme';

const activeStyle = ({ isActive }) => {
  return {
    fontWeight: isActive ? 'bold' : '',
    color: isActive ? '' : '',
  };
};

const Menu = () => {
  const isTheme = useTheme();

  return (
    <nav className={styles.nav}>
      <h1 className={styles.logo}>IG</h1>
      <div className={styles.nav__list}>
        <NavLink style={activeStyle} to="." end>
          Home
        </NavLink>
        <NavLink style={activeStyle} to="images">
          Images
        </NavLink>
        <NavLink style={activeStyle} to="about">
          About
        </NavLink>
        <NavLink style={activeStyle} to="contacts">
          Contacts
        </NavLink>
      </div>
      <div className={styles.btnTheme}>
        <button onClick={() => isTheme.change('light')}>Light</button>
        <button onClick={() => isTheme.change('dark')}>Dark</button>
      </div>
    </nav>
  );
};

export default Menu;
