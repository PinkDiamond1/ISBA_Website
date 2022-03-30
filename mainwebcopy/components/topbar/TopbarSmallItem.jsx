/* eslint-disable jsx-a11y/anchor-is-valid */
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import NextLink from 'next/link';
import Collapse from '@material-ui/core/Collapse';
import Card from '@material-ui/core/Card';
import IconButton from '@material-ui/core/IconButton';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles((theme) => ({
  sectionDiv: {
    width: '100%',
    padding: `0 ${theme.spacing(2)}px`,
    transition: 'all 500ms ease-in-out',
    color: ({ textColor }) => textColor,
    marginTop: ({ open }) => open && `${theme.spacing(2)}px`,
    marginBottom: ({ open }) => open && `${theme.spacing(2)}px`,
  },
  sectionLabelContainer: {
    width: 'fit-content',
    padding: `${theme.spacing(0.25)}px ${theme.spacing(1.5)}px`,
    marginBottom: `${theme.spacing(1.5)}px`,
    borderRadius: '69px', // heh
    transition: 'all 500ms ease-in-out',
    boxShadow: ({ open }) => open && `0 0 8px ${theme.palette.neutral.darkestGray}`,
    backgroundColor: ({ open }) => open && theme.palette.neutral.white,
    color: ({ open }) => open && theme.palette.neutral.black,
  },
  selected: {
    backgroundColor: theme.palette.neutral.white,
    color: theme.palette.neutral.black,
  },
  sectionLabel: {
    fontFamily: theme.fonts.poppins,
    cursor: 'pointer',
  },
  subSectionsCard: {
    transition: 'box-shadow 500ms ease-in-out',
    boxShadow: ({ open }) => open && `0 0 8px ${theme.palette.neutral.darkerGray}`,
    padding: `${theme.spacing(2)}px ${theme.spacing(2)}px ${theme.spacing(1)}px ${theme.spacing(2)}px`,
  },
  subSectionLabelContainer: {
    marginBottom: `${theme.spacing(1)}px`,
    cursor: 'pointer',
  },
  icon: {
    transition: 'color 500ms ease-in-out',
    color: ({ open, textColor }) => (open ? theme.palette.neutral.black : textColor),
  },
}));

export default function TopbarSmallItem({ textColor, section, setIsExpanded }) {
  const [open, setOpen] = React.useState(false);
  const classes = useStyles({ textColor, open });

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <nav className={classes.sectionDiv}>
      <div className={`${classes.sectionLabelContainer} ${open && classes.selected}`}>
        {section.linkTo
          ? (
            <NextLink href={section.linkTo}>
              <Typography
                display="inline"
                variant="subtitle1"
                classes={{ root: classes.sectionLabel }}
                onClick={() => setIsExpanded(false)}
              >
                {section.label}
              </Typography>
            </NextLink>
          )
          : (
            <Typography
              display="inline"
              variant="subtitle1"
              classes={{ root: classes.sectionLabel }}
            >
              {section.label}
            </Typography>
          )}
        { section.sub && (
        <IconButton
          aria-label="expand"
          size="small"
          onClick={handleClick}
          className={classes.icon}
        >
          {open
            ? <ExpandLess />
            : <ExpandMore />}
        </IconButton>
        )}
      </div>
      <Collapse in={open}>
        <Card className={classes.subSectionsCard}>
          {
          section.sub && section.sub.map((subSection) => (
            <div
              key={subSection.linkTo}
              className={classes.subSectionLabelContainer}
            >
              <NextLink href={subSection.linkTo}>
                <Typography
                  display="inline"
                  variant="subtitle2"
                  classes={{
                    root: classes.sectionLabel,
                  }}
                  onClick={() => setIsExpanded(false)}
                >
                  {subSection.label}
                </Typography>
              </NextLink>
            </div>
          ))
      }
        </Card>
      </Collapse>
    </nav>
  );
}

TopbarSmallItem.propTypes = {
  textColor: PropTypes.string.isRequired,
  section: PropTypes.shape({
    label: PropTypes.string,
    linkTo: PropTypes.string,
    sub: PropTypes.arrayOf(PropTypes.shape({
      label: PropTypes.string,
      linkTo: PropTypes.string,
    })),
  }).isRequired,
  setIsExpanded: PropTypes.func.isRequired,
};
