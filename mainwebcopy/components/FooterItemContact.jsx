/* eslint-disable jsx-a11y/anchor-is-valid */
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import { Email, Phone } from '@material-ui/icons';
import BlockLink from './BlockLink';

const useStyles = makeStyles((theme) => ({
  container: {
    margin: `0 ${theme.spacing(1)}px`,
  },
  sectionLabel: {
    color: '#94EECB',
    fontFamily: theme.fonts.poppins,
    marginBottom: `${theme.spacing(1)}px`,
    fontWeight: 'bold',
  },
  subSectionLabel: {
    display: 'flex',
    gap: '8px',
    alignItems: 'center',
    color: theme.palette.neutral.white,
    fontFamily: theme.fonts.poppins,
    cursor: 'pointer',
    whiteSpace: 'nowrap',
    marginBottom: `${theme.spacing(1)}px`,
    '&:hover': {
      textShadow: `0 0 16px ${theme.palette.primary.darkWhite}`,
      textDecoration: 'none',
    },
  },
}));

export default function FooterItemContact() {
  const classes = useStyles();

  return (
    <div className={classes.container}>

      <Typography
        variant="subtitle2"
        classes={{ root: classes.sectionLabel }}
      >
        Contact Us
      </Typography>

      <Link display="block" variant="body1" classes={{ root: classes.subSectionLabel }}>
        <Email /> info@parallelchain.io
      </Link>

      <Link display="block" variant="body1" classes={{ root: classes.subSectionLabel }}>
        <Phone /> (852) 2325 6667
      </Link>

    </div>
  );
}
