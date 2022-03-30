import { Grid, Typography } from '@material-ui/core';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import FadeIn from '../FadeIn';
import MagicBox from '../MagicBox';
import Section from '../Section';

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
    textAlign: 'center',
    color: 'white',
    padding: `${t.spacing(8)}px 0px`,
    [t.breakpoints.down('sm')]: {
      padding: `${t.spacing(4)}px`,
    },
  },

}));

export default function MainnetLogosPanel() {
  const classes = useStyles();
  const theme = useTheme();
  const smOrSmaller = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Section>
      <MagicBox
        render={(boxIn, boxRef) => (
          <FadeIn
            variant="up"
            in={boxIn}
            boxRef={boxRef}
            className={classes.container}
          >
            <Typography variant="h4" className={classes.title}>
              Partners and Investors
            </Typography>
            {smOrSmaller ? (
              <img src="/images/parallelchain/mainnet/mainnet_partners_mobile.png" alt="Logos" className={classes.logos} />
            ) : (
              <img src="/images/parallelchain/mainnet/mainnet_partners.png" alt="Logos" className={classes.logos} />
            )}

          </FadeIn>
        )}
      />
    </Section>
  );
}
