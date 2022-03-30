import PropTypes from 'prop-types';
import { useTheme, makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import BlockLink from './BlockLink';
import HoverCard from './HoverCard';

const useStyles = makeStyles((theme) => ({
  card: {
    borderRadius: '8px',
    padding: `${theme.spacing(2)}px`,
    height: '100%',
  },
  titleText: {
    marginBottom: `${theme.spacing(1)}px`,
  },
  summaryText: {
    color: ({ openingColor }) => openingColor,
    fontWeight: 'bold',
    marginTop: `${theme.spacing(1)}px`,
  },
}));

export default function OpeningsCard({
  title, category, url,
}) {
  const theme = useTheme();

  const openingEnumToOpeningName = {
    sales_and_marketing: 'Sales & Marketing',
    finance_and_administration: 'Finance & Administration',
    engineering: 'Engineering',
  };

  const openingEnumToOpeningColor = {
    sales_and_marketing: theme.palette.primary.main,
    finance_and_administration: theme.palette.secondary.main,
    engineering: theme.palette.products.constructionChain,
  };

  const openingColor = openingEnumToOpeningColor[category];
  const classes = useStyles({ openingColor });

  return (
    <HoverCard
      idleElevation={6}
      hoverElevation={9}
      className={classes.card}
    >
      <BlockLink href={url}>
        <Typography variant="h6" classes={{ root: classes.titleText }}>
          { title }
        </Typography>
        <Typography variant="subtitle1" classes={{ root: classes.summaryText }}>
          { openingEnumToOpeningName[category] }
        </Typography>
      </BlockLink>
    </HoverCard>
  );
}

OpeningsCard.propTypes = {
  url: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};
