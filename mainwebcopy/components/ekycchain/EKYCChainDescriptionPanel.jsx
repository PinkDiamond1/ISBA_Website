import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Section from '../Section';

const useStyles = makeStyles((t) => ({
  root: {
    color: '#fffff',
  },
  titleContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  textContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  contentText: {
    fontWeight: '400',
    color: 'black',
  },
  titleText: {
    color: '#003D61',
  },
}));

export default function EKYCChainDescriptionPanel() {
  const classes = useStyles();

  return (
    <Section component="section" subContainerClassName={classes.root}>
      <Grid container spacing={6}>
        <Grid item xs={12} md={4} classes={{ root: classes.titleContainer }}>
          <Typography variant="h2" classes={{ root: classes.titleText }}>
            Why is ParallelChain® necessary for KYC?
          </Typography>
        </Grid>
        <Grid item xs={12} md={8} classes={{ root: classes.textContainer }}>
          <Typography variant="h3" classes={{ root: classes.contentText }}>
            ParallelChain® completes the functionality of eKYC-Chain by ensuring
            safe and proper handling of data collected from the verification process.
            In addition to the fact that all data are stored immutably on ParallelChain®
            , each and every access to the data is also tracked and recorded,
            effectively detering insiders from leaking or misusing the data.
            ParallelChain® also uniquely addresses any concerns of privacy by allowing certain data
            to be permanently removed upon request, making it the only blockchain available
            today that helps organisations comply with the highest standards of data protection
            laws, including the EU&apos;s GDPR.
          </Typography>
        </Grid>
      </Grid>
    </Section>
  );
}
