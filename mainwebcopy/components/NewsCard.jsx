import { useState } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import BlockLink from './BlockLink';
import SmallDateLabel from './SmallDateLabel';

const useStyles = makeStyles((theme) => ({
  card: {
    overflow: 'hidden',
    display: 'flex',
    flexDirection: ({ variant }) => {
      if (variant === 'row') {
        return variant;
      }
      return 'column';
    },
    borderRadius: '8px',
    width: '100%',
    [theme.breakpoints.down('md')]: {
      flexDirection: 'column !important',
    },
    '&:hover': {
      '& $image': {
        transform: 'scale(1.05,1.05)',
        opacity: '0.5',
      },
      '& $details': {
        // transform: 'translateY(-10px)',
      },
    },
    background: '#000000',
  },
  titleText: {
    marginBottom: `${theme.spacing(1)}px`,
  },
  summaryText: {
    marginTop: `${theme.spacing(1)}px`,
    color: theme.palette.neutral.darkestGray,
  },
  image: {
    width: '100%',
    height: '300px',
    verticalAlign: 'middle',
    transition: 'all 400ms ease-in-out',
    zIndex: '0',
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
    transition: 'all 400ms ease-in-out',
    zIndex: '1',
    backgroundColor: '#FFFFFF',
  },
  cardContent: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
}));

export default function NewsCard({
  variant, className, title, pubdate, summary, url, headlinePicture,
}) {
  const [elevation, setElevation] = useState(1);

  const handleMouseOver = () => {
    setElevation(5);
  };

  const handleMouseOut = () => {
    setElevation(1);
  };

  const classes = useStyles({ variant });

  return (
    <BlockLink href={url}>
      <Card
        className={`${classes.card} ${className}`}
        elevation={elevation}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
      >
        <CardMedia
          className={classes.image}
          image={headlinePicture.url}
          title={headlinePicture.name}
        />
        <div className={`${classes.details} newscard-detail`}>
          <CardContent classes={{ root: classes.cardContent }}>
            <Typography variant="h6" classes={{ root: classes.titleText }}>
              { title }
            </Typography>
            { pubdate && (
            <SmallDateLabel date={pubdate} />
            )}
            <Typography variant="subtitle1" classes={{ root: classes.summaryText }}>
              {summary}
            </Typography>
          </CardContent>
        </div>
      </Card>
    </BlockLink>

  );
}

NewsCard.propTypes = {
  variant: PropTypes.oneOf([
    'column',
    'row',
  ]),
  title: PropTypes.string.isRequired,
  pubdate: PropTypes.string.isRequired,
  summary: PropTypes.string,
  url: PropTypes.string,
  headlinePicture: PropTypes.shape({
    url: PropTypes.string,
    name: PropTypes.string,
  }),
  className: PropTypes.string,
};

NewsCard.defaultProps = {
  variant: 'column',
  summary: undefined,
  url: undefined,
  headlinePicture: {
    url: '/images/dtl-logo-box.png',
    name: 'No Image',
  },
  className: undefined,
};
