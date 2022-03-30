import { createContext, useState } from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '@material-ui/core/styles';

// PWThemeContext. Read: 'PageWideThemeContext'
export const PWThemeContext = createContext();

const PWThemeContextProvider = PWThemeContext.Provider;

export const PWThemeProvider = ({ children }) => {
  const theme = useTheme();

  const [background, _setBackground] = useState([theme.palette.neutral.white,
    theme.palette.neutral.white]);

  const setBackground = (newBackground) => _setBackground((oldBg) => [oldBg[1], newBackground]);

  return (
    <PWThemeContextProvider
      value={{
        background,
        setBackground,
      }}
    >
      { children }
    </PWThemeContextProvider>
  );
};

PWThemeProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
