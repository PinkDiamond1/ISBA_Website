import PropTypes from 'prop-types';
import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import AmbassadorForm from './AmbassadorForm';

const useStyles = makeStyles((t) => ({
  container: {
    height: '100vh',
    width: '100vw',
    backgroundColor: '#F6F6F6',
  },
  closeButton: {
    backgroundColor: 'rgba(175, 175, 175, 0.7)',
    alignSelf: 'right',
  },
  card: {
    maxWidth: '780px',
    maxHeight: '100%',
    overflowY: 'scroll',
    marginTop: '-80px',
  },

}));

export default function AmbassadorFormNew({ closeBackdrop }) {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <Card classes={{ root: classes.card }}>
        <AmbassadorForm closeBackdrop={closeBackdrop} />
      </Card>
    </div>
  );
}

AmbassadorFormNew.propTypes = {
  closeBackdrop: PropTypes.func.isRequired,
};
