import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Section from '../Section';

const useStyles = makeStyles((theme) => ({
  container: {
    color: theme.palette.products.approvalChainDark,
  },
  titleText: {
    marginBottom: `${theme.spacing(6)}px`,
    color: 'black',
  },
  emphasisItem: {
    marginBottom: `${theme.spacing(3)}px`,
  },
  emphasisedImage: {
    display: 'block',
    objectFit: 'contain',
    height: '80px',
    [theme.breakpoints.up('sm')]: {
      height: '100px',
    },
    [theme.breakpoints.up('md')]: {
      height: '130px',
    },
    pointerEvents: 'none',
  },
  image: {
    display: 'block',
    objectFit: 'contain',
    height: '50px',
    [theme.breakpoints.up('sm')]: {
      height: '70px',
    },
    [theme.breakpoints.up('md')]: {
      height: '90px',
    },
    pointerEvents: 'none',
  },
  featureTitleText: {
    color: '#027D6F',
    textAlign: 'left',
    marginTop: `${theme.spacing(2)}px`,
  },
  featureBodyText: {
    textAlign: 'left',
    color: 'black',
  },
  titleContainer: {
    marginBottom: `${theme.spacing(5)}px`,
    [theme.breakpoints.up('md')]: {
      marginBottom: `${theme.spacing(15)}px`,
    },
  },
}));

export default function ApprovalChainAdvantagesPanel() {
  const classes = useStyles();

  return (
    <Section
      spacingTop={2}
      spacingBottom={15}
      subContainerClassName={classes.container}
    >
      <Typography variant="h2" classes={{ root: classes.titleText }}>
        Advantages
      </Typography>
      <Grid container spacing={5}>
        <Grid item xs={12} md={6} lg={6} className={classes.emphasisItem}>
          <img src="/images/approvalchain/ms-spoof.svg" alt="ms-spoof" className={classes.emphasisedImage} />
          <Typography
            variant="h3"
            classes={{ root: classes.featureTitleText }}
          >
            Millisecond anti-spoofing facial recognition
          </Typography>
          <Typography
            variant="h5"
            classes={{ root: classes.featureBodyText }}
          >
            Transactions are only approved upon facial recognitions, increasing
            workplace accountability
          </Typography>
        </Grid>
        <Grid item xs={12} md={6} lg={6} className={classes.emphasisItem}>
          <img src="/images/approvalchain/provenance.svg" alt="provenance" className={classes.emphasisedImage} />
          <Typography
            variant="h3"
            classes={{ root: classes.featureTitleText }}
          >
            Provenance tracking
          </Typography>
          <Typography
            variant="h5"
            classes={{ root: classes.featureBodyText }}
          >
            Keeps track of the “who” and “where” for each piece of data’s point of origin
          </Typography>
        </Grid>
        <Grid item xs={6} md={4} lg={4}>
          {/* eslint-disable jsx-a11y/img-redundant-alt */}
          <img src="/images/approvalchain/image-proccessing.svg" alt="Image processing" className={classes.image} />
          <Typography
            variant="h3"
            classes={{ root: classes.featureTitleText }}
          >
            Real-time image processing
          </Typography>
          <Typography
            variant="h5"
            classes={{ root: classes.featureBodyText }}
          >
            Real-time images of procurement stages are captured to ensure each evaluation
            is conducted professionally
          </Typography>
        </Grid>
        <Grid item xs={6} md={4} lg={4}>
          <img src="/images/approvalchain/stamp.svg" alt="Stamp" className={classes.image} />
          <Typography
            variant="h3"
            classes={{ root: classes.featureTitleText }}
          >
            Time stamp submission
          </Typography>
          <Typography
            variant="h5"
            classes={{ root: classes.featureBodyText }}
          >
            Verifies that a document existed at a particular date and time
          </Typography>
        </Grid>
        <Grid item xs={6} md={4} lg={4}>
          <img src="/images/approvalchain/smart-contracts.svg" alt="Smart contracts" className={classes.image} />
          <Typography
            variant="h3"
            classes={{ root: classes.featureTitleText }}
          >
            User-programmable smart contracts
          </Typography>
          <Typography
            variant="h5"
            classes={{ root: classes.featureBodyText }}
          >
            Users are granted the authority to compile and programme smart contracts
            for transaction efficiency
          </Typography>
        </Grid>
        <Grid item xs={6} md={3} lg={3}>
          <img src="/images/approvalchain/gps.svg" alt="GPS" className={classes.image} />
          <Typography
            variant="h3"
            classes={{ root: classes.featureTitleText }}
          >
            GPS location
          </Typography>
          <Typography
            variant="h5"
            classes={{ root: classes.featureBodyText }}
          >
            Identify the exact address and coordinates of users at each transaction point
          </Typography>
        </Grid>
        <Grid item xs={6} md={3} lg={3}>
          <img src="/images/approvalchain/offline.svg" alt="offline" className={classes.image} />
          <Typography
            variant="h3"
            classes={{ root: classes.featureTitleText }}
          >
            Offline operation mode
          </Typography>
          <Typography
            variant="h5"
            classes={{ root: classes.featureBodyText }}
          >
            Support remote on-site inspection, especially at locations without Internet connection
          </Typography>
        </Grid>
        <Grid item xs={6} md={3} lg={3}>
          <img src="/images/approvalchain/permission-control.svg" alt="Permission control" className={classes.image} />
          <Typography
            variant="h3"
            classes={{ root: classes.featureTitleText }}
          >
            User permission control
          </Typography>
          <Typography
            variant="h5"
            classes={{ root: classes.featureBodyText }}
          >
            Authorization is only given to users with appropriate access to confidential
            business information
          </Typography>
        </Grid>
        <Grid item xs={6} md={3} lg={3}>
          <img src="/images/approvalchain/immutable-records.svg" alt="Immutable records" className={classes.image} />
          <Typography
            variant="h3"
            classes={{ root: classes.featureTitleText }}
          >
            Immutable records
          </Typography>
          <Typography
            variant="h5"
            classes={{ root: classes.featureBodyText }}
          >
            Transaction records are stored permanently on the blockchain and cannot be tampered with
          </Typography>
        </Grid>
      </Grid>
    </Section>
  );
}
