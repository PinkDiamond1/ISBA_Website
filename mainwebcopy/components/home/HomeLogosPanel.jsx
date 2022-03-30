import { Grid, Typography } from '@material-ui/core';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import FadeIn from '../FadeIn';
import MagicBox from '../MagicBox';

const useStyles = makeStyles((t) => ({
  container: {
    overflow: 'hidden',
  },
  logos: {
    width: '100%',
    pointerEvents: 'none',
    zIndex: 1,
    padding: `${t.spacing(1)}px`,
    [t.breakpoints.down('sm')]: {
      padding: `${t.spacing(4)}px`,
    },
  },
  title: {
    textAlign: 'left',
    color: 'black',
    fontWeight: '700',
    padding: `${t.spacing(8)}px 0px`,
    [t.breakpoints.down('sm')]: {
      padding: `${t.spacing(4)}px`,
    },
  },

}));

export default function HomeLogosPanel() {
  const classes = useStyles();
  const theme = useTheme();
  const smOrSmaller = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <div>
      <MagicBox
        render={(boxIn, boxRef) => (
          <FadeIn
            variant="up"
            in={boxIn}
            boxRef={boxRef}
            className={classes.container}
          >
            <Typography variant="h2" className={classes.title}>
              Built by a Team with Proven Excellence
            </Typography>
            {smOrSmaller ? (
              <Grid container justifyContent="center" alignItems="center">
                <Grid item xs={12} sm={12}>
                  <img src="/images/index/credentials_mobile.png" alt="Logos" className={classes.logos} />
                </Grid>
              </Grid>
            ) : (
              <>
                <Grid container justifyContent="space-between" alignItems="center">
                  <Grid item md={12}>
                    <img src="/images/index/credentials.png" alt="Logos" className={classes.logos} />
                  </Grid>
                </Grid>
              </>
            )}

          </FadeIn>
        )}
      />
    </div>
  );
}
