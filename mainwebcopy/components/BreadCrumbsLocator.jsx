import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import NextLink from 'next/link';
import Link from '@material-ui/core/Link';
import PropTypes from 'prop-types';

const useStyles = makeStyles((theme) => ({
  breadcrumbs: {
    marginBottom: `${theme.spacing(4)}px`,
    fontSize: '22px',
  },
  breadcrumbLink: {
    cursor: 'pointer',
  },
}));

export default function BreadCrumbsLocator({
  breadCrumbLeftText, breadCrumbRightText, linkForBreadCrumb, darkMode,
}) {
  const classes = useStyles();

  return (
    <Breadcrumbs aria-label="breadcrumb" style={{ color: darkMode ? '#000000' : '#FFFFFF' }} classes={{ root: classes.breadcrumbs }}>
      <NextLink href={linkForBreadCrumb}>
        <Link to={linkForBreadCrumb} style={{ color: darkMode ? '#000000' : '#FFFFFF' }} classes={{ root: classes.breadcrumbLink }}>
          <Typography variant="h3" style={{ color: darkMode ? '#000000' : '#FFFFFF', fontWeight: '400' }}>
            {breadCrumbLeftText.toUpperCase()}
          </Typography>
        </Link>
      </NextLink>
      <Typography variant="h3" style={{ color: darkMode ? '#000000' : '#FFFFFF', fontWeight: '400' }}>
        {breadCrumbRightText.toUpperCase()}
      </Typography>
    </Breadcrumbs>
  );
}

BreadCrumbsLocator.propTypes = {
  breadCrumbLeftText: PropTypes.string.isRequired,
  breadCrumbRightText: PropTypes.string.isRequired,
  linkForBreadCrumb: PropTypes.string.isRequired,
  darkMode: PropTypes.bool,

};

BreadCrumbsLocator.defaultProps = {
  darkMode: true,
};
