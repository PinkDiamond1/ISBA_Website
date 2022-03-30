import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { useEffect, useContext } from 'react';
import SocialStickyButtons from './SocialStickyButtons';
import { PWThemeContext } from './PWThemeContext';

const useStyles = makeStyles({
  layout: {
    height: '100%',
    zIndex: '0',
    overflowX: ({ hideOverflow }) => {
      if (hideOverflow) return 'hidden';
      return 'initial';
    },
  },
});

export default function Layout({
  background, children, hideOverflow,
}) {
  const classes = useStyles({ hideOverflow });

  const { setBackground } = useContext(PWThemeContext);

  useEffect(() => {
    setBackground(background);
  }, [background]);

  return (
    <main className={classes.layout}>
      <SocialStickyButtons />
      { children }
    </main>
  );
}

Layout.propTypes = {
  background: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  hideOverflow: PropTypes.bool.isRequired,
};
