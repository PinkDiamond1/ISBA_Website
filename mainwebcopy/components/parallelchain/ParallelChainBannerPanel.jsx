import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import NextLink from 'next/link';
import Section from '../Section';

const useStyles = makeStyles((t) => ({
  container: {
    [t.breakpoints.down('xs')]: {
      padding: '8 0 8 0',
    },
  },
  card: {
    display: 'flex',
    width: '100%',
    padding: `${t.spacing(4)}px`,
    backgroundImage: 'url(/images/parallelchain/demo/demo-banner-background.jpg)',
    backgroundSize: 'cover',
    color: `${t.palette.neutral.white}`,
  },
  textContainer: {
    display: 'flex',
    alignItems: 'center',
    textAlign: 'center',
    justifyContent: 'center',
    [t.breakpoints.down('sm')]: {
      marginBottom: `${t.spacing(3)}px`,
    },
  },
}));

export default function PreventiveChainBannersPanel() {
  const classes = useStyles();

  return (
    <Section subContainerClassName={classes.container}>
      <NextLink href="/parallelchain/demo">
        <a>
          <Card classes={{ root: classes.card }}>
            <Grid container>
              <Grid item xs={12} classes={{ root: classes.textContainer }}>
                <Typography variant="h3">
                  Schedule your ParallelChain® Experience now
                </Typography>
              </Grid>
            </Grid>
          </Card>
        </a>
      </NextLink>
    </Section>
  );
}
