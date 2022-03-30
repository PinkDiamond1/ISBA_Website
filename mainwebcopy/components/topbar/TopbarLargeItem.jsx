/* eslint-disable jsx-a11y/anchor-is-valid */
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import NextLink from 'next/link';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import { ArrowDropDown } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
  container: {
    position: 'relative',
    '&:hover .sub-sections': {
      height: theme.sizes.topbar.large.expanded,
      opacity: 1,
    },
  },
  sectionLabel: {
    cursor: 'pointer',
    padding: ` ${theme.spacing(2)}px ${theme.spacing(2)}px`,
    transition: 'color 300ms ease-in-out',
    color: ({ textColor }) => textColor,
    textTransform: 'uppercase',
    fontWeight: 300,
    display: 'flex',
  },
  subSectionsContainer: {
    height: 0,
    opacity: 0,
    overflowY: 'hidden',
    position: 'absolute',
    width: 'max-content',
    left: ` ${theme.spacing(2)}px`,
    paddingTop: `${theme.spacing(2)}px`,
    transition: 'opacity 300ms ease-in-out',
  },
  subSectionLabel: {
    cursor: 'pointer',
    whiteSpace: 'no-wrap',
    color: ({ textColor }) => textColor,
  },
}));

export default function TopbarLargeItem({
  label, linkTo, textColor, setIsExpanded, subSections,
}) {
  const classes = useStyles({ textColor });

  return (
    <div
      onMouseEnter={() => setIsExpanded(true)}
      onMouseLeave={() => setIsExpanded(false)}
      className={classes.container}
    >
      { linkTo
        ? (
          <NextLink href={linkTo}>
            <Link
              variant="subtitle1"
              classes={{
                root: classes.sectionLabel,
              }}
            >
              { label } <ArrowDropDown />
            </Link>
          </NextLink>
        )
        : (
          <Typography
            display="inline"
            variant="subtitle1"
            classes={{
              root: classes.sectionLabel,
            }}
          >
            { label }  <ArrowDropDown />
          </Typography>
        )}
      <div className={`sub-sections ${classes.subSectionsContainer}`}>
        { subSections
          && subSections.map((subSection) => (
            <NextLink
              key={subSection.linkTo}
              href={subSection.linkTo}
            >
              <Link
                display="block"
                variant="subtitle1"
                classes={{
                  root: classes.subSectionLabel,
                }}
              >
                { subSection.label }
              </Link>
            </NextLink>
          ))}
      </div>
    </div>

  );
}

TopbarLargeItem.propTypes = {
  label: PropTypes.string.isRequired,
  linkTo: PropTypes.string,
  textColor: PropTypes.string.isRequired,
  setIsExpanded: PropTypes.func.isRequired,
  subSections: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string,
    linkTo: PropTypes.string,
  })),
};

TopbarLargeItem.defaultProps = {
  linkTo: undefined,
  subSections: undefined,
};
