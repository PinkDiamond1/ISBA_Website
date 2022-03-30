import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import MagicBox from '../MagicBox';
import Section from '../Section';

const useStyles = makeStyles((theme) => ({
  imageContainer: {
    display: 'flex',
    position: 'relative',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    width: '270px',
    height: '80px',
  },
  sourceImage: {
    transition: 'transform 300ms ease-out, opacity 300ms ease-out',
    marginBottom: `${theme.spacing(2)}px`,
    display: 'block',
    width: '200px',
    height: '90px',
    padding: 2,
    [theme.breakpoints.up('xs')]: {
      width: '120px',
      height: '70px',
    },
    [theme.breakpoints.up('sm')]: {
      width: '140px',
      height: '70px',
    },
    [theme.breakpoints.up('lg')]: {
      width: '175px',
      height: '80px',
    },
    [theme.breakpoints.down('xs')]: {
      width: '75px',
      height: '70px',
    },
    pointerEvents: 'none',
  },
  bitcoinist: {
    width: '300px',
    height: '45px',
    [theme.breakpoints.down('md')]: {
      width: '230px',
      height: '45px',
    },
    [theme.breakpoints.down('sm')]: {
      width: '150px',
      height: '40px',
    },
    [theme.breakpoints.down('xs')]: {
      width: '110px',
      height: '40px',
    },
  },
  vf: {
    paddingTop: 2,
    width: '90px',
    [theme.breakpoints.down('xs')]: {
      width: '50px',
      height: '50px',
    },
  },
  digfin: {
    paddingBottom: 14,
  },
  logoImage: {
    width: '90%',
    pointerEvents: 'none',
    margin: 'auto auto',
  },
}));

export default function NewsFeatured({ baseUrl, articles }) {
  const classes = useStyles();

  return (
    <Section spacingTop={0}>
      <div>
        <Typography variant="h2" style={{ marginBottom: 30, color: '#027D6F', fontWeight: 400 }}>News Featured in</Typography>
      </div>

      <Grid container spacing={6} direction="row" spacingBottom={0}>
        <Grid item xs={12} lg={12} style={{ marginTop: '1rem', display: 'flex', paddingBottom: '0px' }}>
          <MagicBox
            render={() => (
              <img src="/images/newsroom/featured_in.png" alt="News" className={classes.logoImage} />
            )}
          />
        </Grid>
      </Grid>

      {/* <Grid container spacing={4} justify="center">
        <Grid item xs={4} md={2} lg={2} className={classes.imageContainer}>
          <img src="/images/newsroom/cointelegraph.png" alt="" className={classes.sourceImage} />
        </Grid>
        <Grid item xs={3} md={3} lg={3} className={classes.imageContainer}>
          <img src="/images/newsroom/beincrypto.png" alt="" className={classes.sourceImage} />
        </Grid>
        <Grid item xs={3} md={2} lg={2} className={classes.imageContainer}>
          <img src="/images/newsroom/ambcrypto.png" alt="" className={classes.sourceImage} />
        </Grid>
        <Grid item xs={3} md={3} lg={3} className={classes.imageContainer}>
          <img src="/images/newsroom/today.png" alt="" className={classes.sourceImage} />
        </Grid>
        <Grid item xs={3} md={2} lg={2} className={classes.imageContainer}>
          <img src="/images/newsroom/unlock.png" alt="" className={classes.sourceImage} />
        </Grid>
        <Grid item xs={3} md={3} lg={3} className={classes.imageContainer}>
          <img src="/images/newsroom/cryptopotato.png" alt="" className={classes.sourceImage} />
        </Grid>
        <Grid item xs={3} md={3} lg={3} className={classes.imageContainer}>
          <img src="/images/newsroom/blockchainnews.png" alt="" className={classes.sourceImage} />
        </Grid>
        <Grid item xs={4} md={3} lg={3} classes={classes.imageContainer}>
          <img src="/images/newsroom/bitcoinist.png" alt="" className={`${classes.sourceImage} ${classes.bitcoinist}`} />
        </Grid>
        <Grid item xs={3} md={3} lg={3} className={classes.imageContainer}>
          <img src="/images/newsroom/vf.png" alt="" className={`${classes.sourceImage} ${classes.vf}`} />
        </Grid>
        <Grid item xs={3} md={3} lg={3} className={classes.imageContainer}>
          <img src="/images/newsroom/digfin.png" alt="" className={`${classes.sourceImage} ${classes.digfin}`} />
        </Grid>
        <Grid item xs={3} md={3} lg={3} className={classes.imageContainer}>
          <img src="/images/newsroom/mergermarket.png" alt="" className={classes.sourceImage} />
        </Grid>
        <Grid item xs={3} md={3} lg={3} className={classes.imageContainer}>
          <img src="/images/newsroom/ecryptonews.png" alt="" className={classes.sourceImage} />
        </Grid>
        <Grid item xs={3} md={3} lg={3} className={classes.imageContainer}>
          <img src="/images/newsroom/techbullion.png" alt="" className={classes.sourceImage} />
        </Grid>
        <Grid item xs={3} md={3} lg={3} className={classes.imageContainer}>
          <img src="/images/newsroom/singtao.png" alt="" className={classes.sourceImage} />
        </Grid>
        <Grid item xs={3} md={3} lg={3} className={classes.imageContainer}>
          <img src="/images/newsroom/hongkongeconomic.png" alt="" className={classes.sourceImage} />
        </Grid>
        <Grid item xs={3} md={3} lg={3} className={classes.imageContainer}>
          <img src="/images/newsroom/hket.png" alt="" className={classes.sourceImage} />
        </Grid>
        <Grid item xs={3} md={3} lg={3} className={classes.imageContainer}>
          <img src="/images/newsroom/fintechtimes.png" alt="" className={classes.sourceImage} />
        </Grid>
      </Grid> */}
    </Section>
  );
}

NewsFeatured.propTypes = {
  baseUrl: PropTypes.string.isRequired,
  articles: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    pubdate: PropTypes.string,
    summary: PropTypes.string,
    body: PropTypes.string,
    url: PropTypes.string,
  })).isRequired,
};
