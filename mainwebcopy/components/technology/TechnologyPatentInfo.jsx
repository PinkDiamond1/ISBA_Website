import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import FadeIn from '../FadeIn';
import MagicBox from '../MagicBox';
import Section from '../Section';

const useStyles = makeStyles((theme) => ({
  featureTitle: {
    color: '#003D61',
  },
  featureSubTitle: {
    color: '#678783',
    marginBottom: `${theme.spacing(2)}px`,
    fontWeight: '400',
  },
  cardTitleLeft: {
    marginTop: `${theme.spacing(1)}px`,
    marginBottom: `${theme.spacing(2)}px`,
    fontWeight: '800',
  },
  cardTitleRight: {
    marginTop: `${theme.spacing(1)}px`,
    marginBottom: `${theme.spacing(2)}px`,
    textAlign: 'right',
    fontWeight: '800',
  },
  cardBodyLeft: {
    fontWeight: '400',
    color: 'black',
    marginBottom: `${theme.spacing(1)}px`,
    [theme.breakpoints.down('sm')]: {
      marginTop: `${theme.spacing(4)}px`,
    },
  },
  cardBodyRight: {
    fontWeight: '400',
    color: 'black',
    textAlign: 'left',
    marginBottom: `${theme.spacing(2)}px`,
  },
  infoText: {
    color: '#546563',
    fontWeight: '300',
  },
}));

export default function TechnologyPatentInfo() {
  const classes = useStyles();

  return (
    <Section>
      <MagicBox
        render={(boxIn, boxRef) => (
          <FadeIn
            variant="up"
            in={boxIn}
            boxRef={boxRef}
          >
            <Typography variant="h2" classes={{ root: classes.featureTitle }}>
              A New Blockchain Built from Scratch
            </Typography>
            <Typography variant="h3" classes={{ root: classes.featureSubTitle }}>
              11 blockchain patents applied worldwide.
            </Typography>
            <Grid container>
              <Grid container xs={12} item>
                <Grid item xs={12}>
                  <Typography variant="h3" classes={{ root: classes.cardBodyLeft }}>
                    Parallel Blockchain Processing
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography variant="h6" classes={{ root: classes.cardBodyRight }}>
                    (US 16/739,083*)
                  </Typography>
                </Grid>
              </Grid>
              <Grid container xs={12} item>
                <Grid item xs={12}>
                  <Typography variant="h3" classes={{ root: classes.cardBodyLeft }}>
                    Ability to Forget
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography variant="h6" classes={{ root: classes.cardBodyRight }}>
                    (US 16/739,092*) (CN 202110031180.X*) (EP21150793.4^)
                  </Typography>
                </Grid>
              </Grid>
              <Grid container xs={12} item>
                <Grid item xs={12}>
                  <Typography variant="h3" classes={{ root: classes.cardBodyLeft }}>
                    System & Methods Proving Immutability
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography variant="h6" classes={{ root: classes.cardBodyRight }}>
                    (US 16/827,339*)(CN 202110030264.1^)
                  </Typography>
                </Grid>
              </Grid>
              <Grid container xs={12} item>
                <Grid item xs={12}>
                  <Typography variant="h3" classes={{ root: classes.cardBodyLeft }}>
                    Blockchain Enhancements: Scalability, Testability, and Usability
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography variant="h6" classes={{ root: classes.cardBodyRight }}>
                    (US 16/629,951^)
                  </Typography>
                </Grid>
              </Grid>
              <Grid container xs={12} item>
                <Grid item xs={12}>
                  <Typography variant="h3" classes={{ root: classes.cardBodyLeft }}>
                    Blockchain-based Failsafe Mechanisms for Autonomous Systems
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography variant="h6" classes={{ root: classes.cardBodyRight }}>
                    (US 16/986,145*)
                  </Typography>
                </Grid>
              </Grid>
              <Grid container xs={12} item>
                <Grid item xs={12}>
                  <Typography variant="h3" classes={{ root: classes.cardBodyLeft }}>
                    Methods of Proving Immutability of Digital Records
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography variant="h6" classes={{ root: classes.cardBodyRight }}>
                    (US 16/827,329*)  (EP 21150794.2*) (CN 113515754 A^)
                  </Typography>
                </Grid>
              </Grid>
              <Grid container xs={12} item style={{ marginTop: '20px' }}>
                <Grid item xs={12}>
                  <Typography variant="h6" classes={{ root: classes.infoText }}>
                    * pending approval
                  </Typography>
                  <Typography variant="h6" classes={{ root: classes.infoText }}>
                    ^ published
                  </Typography>
                </Grid>
              </Grid>

            </Grid>

          </FadeIn>
        )}
      />
    </Section>
  );
}
