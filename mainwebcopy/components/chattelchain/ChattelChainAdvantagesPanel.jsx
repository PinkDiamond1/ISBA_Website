import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Section from '../Section';

const useStyles = makeStyles((theme) => ({
  container: {
    color: theme.palette.products.chattelChainDark,
  },
  titleText: {
    marginBottom: `${theme.spacing(8)}px`,
    textAlign: 'left',
    color: 'black',
  },
  image: {
    display: 'block',
    objectFit: 'contain',
    height: '45px',
    [theme.breakpoints.up('sm')]: {
      height: '60px',
    },
    [theme.breakpoints.up('md')]: {
      height: '80px',
    },
    pointerEvents: 'none',
  },
  featureTitleText: {
    fontWeight: 'bold',
    color: '#00585B',
    textAlign: 'left',
    marginTop: `${theme.spacing(2)}px`,
  },
  featureBodyText: {
    textAlign: 'left',
    color: 'black',
  },
}));

export default function FeaturesPanel() {
  const classes = useStyles();

  return (
    <Section
      spacingTop={6}
      spacingBottom={15}
      subContainerClassName={classes.container}
    >
      <Typography variant="h2" classes={{ root: classes.titleText }}>
        Advantages
      </Typography>
      <Grid container spacing={5}>
        <Grid item xs={6} md={4}>
          <img src="/images/chattelchain/liquidity.svg" alt="Access control" className={classes.image} />
          <Typography
            variant="h3"
            classes={{ root: classes.featureTitleText }}
          >
            Greater Liquidity
          </Typography>
          <Typography
            variant="h5"
            classes={{ root: classes.featureBodyText }}
          >
            Tokens of illiquid assets such as real estate, fine art,
            and quotas for agricultural goods can be traded on exchanges,
            resulting in increased liquidity.
          </Typography>
        </Grid>
        <Grid item xs={6} md={4}>
          <img src="/images/chattelchain/global.svg" alt="Confirmation" className={classes.image} />
          <Typography
            variant="h3"
            classes={{ root: classes.featureTitleText }}
          >
            Global
          </Typography>
          <Typography
            variant="h5"
            classes={{ root: classes.featureBodyText }}
          >
            Tokens open up investments to a wider audience,
            since the minimum investment amounts are much lower.
          </Typography>
        </Grid>
        <Grid item xs={6} md={4}>
          <img src="/images/chattelchain/24-7.svg" alt="Data Leakage" className={classes.image} />
          <Typography
            variant="h3"
            classes={{ root: classes.featureTitleText }}
          >
            24 hours, 7 days a week, 365 days a year
          </Typography>
          <Typography
            variant="h5"
            classes={{ root: classes.featureBodyText }}
          >
            There is no closing bell in ChattelChain. Buy and sell when the rest
            of the market is asleep.
          </Typography>
        </Grid>
        <Grid item xs={6} md={4}>
          <img src="/images/chattelchain/transparency.svg" alt="File Conversion" className={classes.image} />
          <Typography
            variant="h3"
            classes={{ root: classes.featureTitleText }}
          >
            More Transparency
          </Typography>
          <Typography
            variant="h5"
            classes={{ root: classes.featureBodyText }}
          >
            Tokens are immutable, incorruptible, and the token holder&apos;
            rights can be embedded into the token.This providers greater
            transparency in knowing your rights.
          </Typography>
        </Grid>
        <Grid item xs={6} md={4}>
          <img src="/images/chattelchain/compliance.svg" alt="File Conversion" className={classes.image} />
          <Typography
            variant="h3"
            classes={{ root: classes.featureTitleText }}
          >
            Automated compliance
          </Typography>
          <Typography
            variant="h5"
            classes={{ root: classes.featureBodyText }}
          >
            Compliance with regulations can be programmed into smart contracts,
            reducing and automating the regulatory compliance burden.
          </Typography>
        </Grid>
        <Grid item xs={6} md={4}>
          <img src="/images/chattelchain/settlement.svg" alt="File Conversion" className={classes.image} />
          <Typography
            variant="h3"
            classes={{ root: classes.featureTitleText }}
          >
            Fast Settlement
          </Typography>
          <Typography
            variant="h5"
            classes={{ root: classes.featureBodyText }}
          >
            It generally takes 2 additional days to settle for risk management of sequential steps.
            Smart Contract and real-time information symmetry enables such processes to happen in
            parallel.
          </Typography>
        </Grid>
        <Grid item xs={6} md={4}>
          <img src="/images/chattelchain/programmable.svg" alt="File Conversion" className={classes.image} />
          <Typography
            variant="h3"
            classes={{ root: classes.featureTitleText }}
          >
            Programmable features
          </Typography>
          <Typography
            variant="h5"
            classes={{ root: classes.featureBodyText }}
          >
            Automating dividend payouts, easing voting processes, automating vesting periods etc.
          </Typography>
        </Grid>
        <Grid item xs={6} md={4}>
          <img src="/images/chattelchain/immutable.svg" alt="File Conversion" className={classes.image} />
          <Typography
            variant="h3"
            classes={{ root: classes.featureTitleText }}
          >
            Immutable
          </Typography>
          <Typography
            variant="h5"
            classes={{ root: classes.featureBodyText }}
          >
            Transaction and records, if blockchained properly, are immutable.
            It is an excellent infrastructure to record historical ownerships
            and current ownerships.
          </Typography>
        </Grid>
        <Grid item xs={6} md={4}>
          <img src="/images/chattelchain/efficiency-and-fees.svg" alt="File Conversion" className={classes.image} />
          <Typography
            variant="h3"
            classes={{ root: classes.featureTitleText }}
          >
            Increased efficiencies & cheaper fees
          </Typography>
          <Typography
            variant="h5"
            classes={{ root: classes.featureBodyText }}
          >
            Tokens can use smart contracts to automate the buying and selling.
            This reduces the administrative burden,
            resulting in faster execution and lower transaction fees.
          </Typography>
        </Grid>
      </Grid>
    </Section>
  );
}
