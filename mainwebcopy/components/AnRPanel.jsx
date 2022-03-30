import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Section from './Section';

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: '5px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  card: {
    padding: '15px 15px',
    marginBottom: `${theme.spacing(3)}px`,
    transition: 'transform 300ms ease-out, opacity 300ms ease-out',
    '&:hover': {
      transform: 'scaleX(1.08) scaleY(1.08)',
      transition: 'transform 300ms ease-out, opacity 300ms ease-out',
    },
    '&:hover > $container > $awardContainer > $hoverLogo': {
      opacity: '1',
      transition: 'opacity 300ms ease-out',
    },
  },
  organiser: {
    marginBottom: `${theme.spacing(1)}px`,
    color: '#003D61',
  },
  body: {
    color: '#003D61',
  },
  awardName: {
    color: '#003D61',
    marginBottom: `${theme.spacing(2)}px`,
  },
  textContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  awardContainer: {
    postion: 'relative',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  awardLogo: {
    height: '300px',
  },
  hoverLogo: {
    position: 'absolute',
    display: 'flex',
    height: '130px',
    bottom: '10px',
    right: '10px',
    opacity: '0',
    transition: 'opacity 300ms ease-out',
  },
  overtitle: {
    color: '#027D6F',
    textTransform: 'uppercase',
  },
}));

export default function AnRPanel() {
  const classes = useStyles();

  return (
    <Section>
      <Card classes={{ root: classes.card }} elevation={4}>
        <Grid container spacing={6} classes={{ root: classes.container }}>
          <Grid item xs={12} md={8} classes={{ root: classes.textContainer }}>
            <Typography variant="h3" className={classes.overtitle}>
              2020 FinTech Awards
            </Typography>
            <Typography variant="h3" className={classes.organiser}>
              ET Net / Hong Kong Economic Times
            </Typography>
            <Typography variant="h2" className={classes.awardName}>
              Grand Prize: "FinTech of the Year 2020 in Start-up"
            </Typography>
          </Grid>
          <Grid item xs={12} md={4} className={classes.awardContainer}>
            <img
              className={classes.awardLogo}
              src="/images/awards-and-recognition/startup_award.png"
              alt="ETnet Startup Award"
            />
            <img
              className={classes.hoverLogo}
              src="/images/awards-and-recognition/etnet.png"
              alt="ETNet"
            />
          </Grid>
        </Grid>
      </Card>

      <Card classes={{ root: classes.card }} elevation={4}>
        <Grid container spacing={3} classes={{ root: classes.container }}>
          <Grid item xs={12} md={8} classes={{ root: classes.textContainer }}>
            <Typography variant="h3" className={classes.overtitle}>
              2020 FinTech Awards
            </Typography>
            <Typography variant="h3" className={classes.organiser}>
              ET Net / Hong Kong Economic Times
            </Typography>
            <Typography variant="h2" className={classes.awardName}>
              "Outstanding Real-Time Monitoring Blockchain Application System Solution"
            </Typography>
          </Grid>
          <Grid item xs={12} md={4} className={classes.awardContainer}>
            <img
              className={classes.awardLogo}
              src="/images/awards-and-recognition/BC_award.png"
              alt="ETnet Blockchain Award"
            />
            <img
              className={classes.hoverLogo}
              src="/images/awards-and-recognition/etnet.png"
              alt="ETNet"
            />
          </Grid>
        </Grid>
      </Card>

      <Card classes={{ root: classes.card }} elevation={4}>
        <Grid container spacing={3} classes={{ root: classes.container }}>
          <Grid item xs={12} md={8} classes={{ root: classes.textContainer }}>
            <Typography variant="h3" className={classes.overtitle}>
              HONG KONG BUSINESS TECHNOLOGY EXELLENCE AWARDS 2020
            </Typography>
            <Typography variant="h3" className={classes.organiser}>
              Hong Kong Business Magazine
            </Typography>
            <Typography variant="h2" className={classes.awardName}>
              "Blockchain - Computer Software"
            </Typography>
          </Grid>
          <Grid item xs={12} md={4} className={classes.awardContainer}>
            <img
              className={classes.awardLogo}
              src="/images/awards-and-recognition/HKB_award.png"
              alt="HKB Award"
            />
            <img
              className={classes.hoverLogo}
              src="/images/awards-and-recognition/HKB.png"
              alt="HKB"
            />
          </Grid>
        </Grid>
      </Card>
      <Card classes={{ root: classes.card }} elevation={4}>
        <Grid container spacing={3} classes={{ root: classes.container }}>
          <Grid item xs={12} md={8} classes={{ root: classes.textContainer }}>
            <Typography variant="h3" className={classes.overtitle}>
              ADL Report on ParallelChain®
            </Typography>
            <Typography variant="h3" className={classes.organiser}>
              Arthur D. Little
            </Typography>
            <Typography variant="h2" className={classes.awardName}>
              Ranked #1 Blockchain in the World for:
            </Typography>
            <Typography variant="h3" className={classes.body}>
              Blockchain Performance
            </Typography>
            <Typography variant="h3" className={classes.body}>
              Total Cost of Ownership
            </Typography>
            <div className={classes.awardName} />
            <Typography variant="h2" className={classes.awardName}>
              The Best Blockchain Solution for:
            </Typography>
            <Typography variant="h3" className={classes.body}>
              Contract Management
            </Typography>
            <Typography variant="body1" className={classes.body}>
              Security Token Offering
            </Typography>
            <Typography variant="body1" className={classes.body}>
              Clean Energy
            </Typography>
            <Typography variant="h3" className={classes.body}>
              Know Your Customer (KYC)
            </Typography>
          </Grid>
          <Grid item xs={12} md={4} className={classes.awardContainer}>
            <img
              className={classes.awardLogo}
              src="/images/awards-and-recognition/ADL.png"
              alt="ADL"
            />
          </Grid>
        </Grid>
      </Card>
    </Section>
  );
}
