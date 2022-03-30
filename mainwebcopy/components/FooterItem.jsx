/* eslint-disable jsx-a11y/anchor-is-valid */
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
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

export default function FooterItem({ label, linkTo, sub }) {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      { linkTo
        ? (
          <BlockLink href={linkTo}>
            <Link
              display="block"
              variant="subtitle2"
              classes={{ root: classes.sectionLabel }}
            >
              { label }
            </Link>
          </BlockLink>
        )
        : (
          <Typography
            variant="subtitle2"
            classes={{ root: classes.sectionLabel }}
          >
            { label }
          </Typography>
        )}
      {
        sub
        && sub.map((subSection) => (
          <BlockLink key={subSection.label} href={subSection.linkTo}>
            <Link display="block" variant="body1" classes={{ root: classes.subSectionLabel }}>
              {subSection.label}
            </Link>
          </BlockLink>
        ))
      }
    </div>
  );
}

FooterItem.propTypes = {
  label: PropTypes.string.isRequired,
  linkTo: PropTypes.string,
  sub: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string,
    linkTo: PropTypes.string,
  })),
};

FooterItem.defaultProps = {
  linkTo: null,
  sub: null,
};
