import { useState } from 'react';
import { ThemeContext } from '../../contexts/ThemeContext';
import { changeCssVariables } from '../services/changeCssVariables';

export const ThemeProvider = ({ children, ...props }) => {
  const [theme, setTheme] = useState('');

  const change = (name) => {
    setTheme(name);
    changeCssVariables(name);
  };

  return (
    <ThemeContext.Provider
      value={{
        theme: theme,
        change: change,
      }}
      {...props}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
