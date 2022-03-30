/* eslint-disable max-len */
import { makeStyles, useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Grid from '@material-ui/core/Grid';
import { useBackdrop } from 'use-backdrop';
import { Typography } from '@material-ui/core';
import Section from '../Section';
import AmbassadorForm from './AmbassadorForm';
import AmbassadorFormNew from './AmbassadorFormNew';

const useStyles = makeStyles((theme) => ({
  container: {
    color: theme.palette.primary.dark,
    [theme.breakpoints.down('sm')]: {
      overflow: 'hidden',
    },
  },
  itemsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconImage: {
    height: '50px',
    width: '50px',
    margin: `${theme.spacing(1)}px`,
  },
  iconImageMobile: {
    height: '100px',
    width: '100px',
    margin: `${theme.spacing(1)}px`,
  },
  headerFitText: {
    color: '#fff',
    textAlign: 'center',
    margin: `${theme.spacing(1)}px`,
    marginBottom: `${theme.spacing(6)}px`,
    fontWeight: '700',
  },
  headerText: {
    color: '#fff',
    margin: `${theme.spacing(1)}px`,
    fontWeight: '700',
  },
  headerTitleText: {
    color: '#fff',
    margin: `${theme.spacing(1)}px`,
    fontWeight: '700',
    fontSize: '20px',
  },
  contentText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: '300',
    margin: `${theme.spacing(1)}px`,
  },
  contentBox: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  contentBoxMobile: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: `${theme.spacing(6)}px`,
    justifyContent: 'space-around',
  },
  pushDown: {
    marginTop: `${theme.spacing(8)}px`,
  },
  btnImage: {
    width: '100%',
    height: 'auto',
  },

}));
export default function FormContent() {
  const classes = useStyles();
  const theme = useTheme();
  const smOrSmaller = useMediaQuery(theme.breakpoints.down('sm'));
  const mediumOrSmaller = useMediaQuery(theme.breakpoints.down('md'));
  const largeOrLarger = useMediaQuery(theme.breakpoints.up('lg'));
  const { displayBackdrop } = useBackdrop();
  const displayForm = () => displayBackdrop((closeBackdrop) => (
    <>
      <AmbassadorFormNew closeBackdrop={closeBackdrop} />
    </>
  ));
  return (
    <Section
      className={classes.container}
    >
      {mediumOrSmaller && (
      <Typography className={classes.headerTitleText}>
        Find Your Fit!
      </Typography>
      )}
      <Grid container>
        { !smOrSmaller ? (
          <Grid container item xs={12} sm={12} md={12}>
            <Grid item md={6} lg={4} className={largeOrLarger && classes.pushDown}>
              <div className={classes.contentBox}>
                <img src="/images/parallelchain/mainnet/content.svg" alt="Content Icon" className={classes.iconImage} />
                <Typography variant="h3" className={classes.headerText}>
                  Content Writers
                </Typography>
                <Typography variant="h4" className={classes.contentText}>
                  Compose informative, entertaining and engaging editorial pieces to educate readers
                  about the ParallelChain project, from perspectives ranging from technical to philosophical.
                </Typography>
              </div>
            </Grid>
            <Grid item md={6} lg={4}>
              <div className={classes.contentBox}>
                <img src="/images/parallelchain/mainnet/creative.svg" alt="Creative Icon" className={classes.iconImage} />
                <Typography variant="h3" className={classes.headerText}>
                  Creative Designers
                </Typography>
                <Typography variant="h4" className={classes.contentText}>
                  Create appealing and intuitive visual contents that effectively communicate
                  the brand story of ParallelChain and our products. They can be in the form
                  of infographics, videos, posters, banners, or any other form of artistic expression.
                </Typography>
              </div>
            </Grid>
            <Grid item md={6} lg={4} className={largeOrLarger && classes.pushDown}>
              <div className={classes.contentBox}>
                <img src="/images/parallelchain/mainnet/translator.svg" alt="Translator Icon" className={classes.iconImage} />
                <Typography variant="h3" className={classes.headerText}>
                  Translators
                </Typography>
                <Typography variant="h4" className={classes.contentText}>
                  Help to make the communication of ParallelChain accessible to all
                  audiences by providing technically and conceptually accurate translated
                  materials in different languages.
                </Typography>
              </div>
            </Grid>
            <Grid item md={6} lg={4}>
              <div className={classes.contentBox}>
                <img src="/images/parallelchain/mainnet/representative.svg" alt="Representative Icon" className={classes.iconImage} />
                <Typography variant="h3" className={classes.headerText}>
                  Club Representatives
                </Typography>
                <Typography variant="h4" className={classes.contentText}>
                  Help to establish and manage the different clubs within the ParallelChain community.
                  Each club is a sub-community of ParallelChain that is formed out of people with common
                  background or interests.
                </Typography>
              </div>
            </Grid>
            {largeOrLarger ? (
              <>
                <Grid item md={6} lg={4}>
                  <div className={classes.contentBox}>
                    <Typography variant="h3" className={classes.headerFitText}>
                      Find Your Fit!
                    </Typography>
                    <img src="/images/parallelchain/mainnet/moderator.svg" alt="Moderator Icon" className={classes.iconImage} />
                    <Typography variant="h3" className={classes.headerText}>
                      Moderators
                    </Typography>
                    <Typography variant="h4" className={classes.contentText}>
                      (Not Open Yet)
                    </Typography>
                  </div>
                </Grid>
                <Grid item md={6} lg={4}>
                  <div className={classes.contentBox}>
                    <img src="/images/parallelchain/mainnet/influencer.svg" alt="Influencer Icon" className={classes.iconImage} />
                    <Typography variant="h3" className={classes.headerText}>
                      Influencers
                    </Typography>
                    <Typography variant="h4" className={classes.contentText}>
                      Help to promote awareness for ParallelChain among their large following
                      base on social platforms, such as Twitter, YouTube, Instagram, in forms
                      of brand endorsing, project and product reviews, or other types of collaboration.
                    </Typography>
                  </div>
                </Grid>
              </>
            ) : (
              <>
                <Grid item md={6} lg={4}>
                  <div className={classes.contentBox}>
                    <img src="/images/parallelchain/mainnet/influencer.svg" alt="Influencer Icon" className={classes.iconImage} />
                    <Typography variant="h3" className={classes.headerText}>
                      Influencers
                    </Typography>
                    <Typography variant="h4" className={classes.contentText}>
                      Help to promote awareness for ParallelChain among their large following
                      base on social platforms, such as Twitter, YouTube, Instagram, in forms
                      of brand endorsing, project and product reviews, or other types of collaboration.
                    </Typography>
                  </div>
                </Grid>
                <Grid item md={6} lg={4}>
                  <div className={classes.contentBox}>
                    <img src="/images/parallelchain/mainnet/moderator.svg" alt="Moderator Icon" className={classes.iconImage} />
                    <Typography variant="h3" className={classes.headerText}>
                      Moderators
                    </Typography>
                    <Typography variant="h4" className={classes.contentText}>
                      (Not Open Yet)
                    </Typography>
                  </div>
                </Grid>

              </>
            )}

          </Grid>
        ) : (
          <Grid container item xs={12} sm={12} md={12} spacing={0}>
            <Grid item xs={12}>
              <div className={classes.contentBoxMobile}>
                <img src="/images/parallelchain/mainnet/representative_sm.svg" alt="Representative Icon" className={classes.iconImageMobile} />
                <div className={classes.contentBox}>
                  <Typography variant="h3" className={classes.headerText}>
                    Club Representatives
                  </Typography>
                  <Typography variant="h4" className={classes.contentText}>
                    Help to establish and manage the different clubs within the ParallelChain community.
                    Each club is a sub-community of ParallelChain that is formed out of people with common
                    background or interests.
                  </Typography>
                </div>
              </div>
            </Grid>
            <Grid item xs={12}>
              <div className={classes.contentBoxMobile}>
                <div className={classes.contentBox}>
                  <Typography variant="h3" className={classes.headerText}>
                    Content Writers
                  </Typography>
                  <Typography variant="h4" className={classes.contentText}>
                    Compose informative, entertaining and engaging editorial pieces to educate readers
                    about the ParallelChain project, from perspectives ranging from technical to philosophical.
                  </Typography>
                </div>
                <img src="/images/parallelchain/mainnet/content_sm.svg" alt="Content Icon" className={classes.iconImageMobile} />
              </div>
            </Grid>
            <Grid item xs={12}>
              <div className={classes.contentBoxMobile}>
                <img src="/images/parallelchain/mainnet/creative_sm.svg" alt="Creative Icon" className={classes.iconImageMobile} />
                <div className={classes.contentBox}>
                  <Typography variant="h3" className={classes.headerText}>
                    Creative Designers
                  </Typography>
                  <Typography variant="h4" className={classes.contentText}>
                    Create appealing and intuitive visual contents that effectively communicate
                    the brand story of ParallelChain and our products. They can be in the form
                    of infographics, videos, posters, banners, or any other form of artistic expression.
                  </Typography>
                </div>
              </div>
            </Grid>
            <Grid item xs={12}>
              <div className={classes.contentBoxMobile}>
                <div className={classes.contentBox}>
                  <Typography variant="h3" className={classes.headerText}>
                    Influencers
                  </Typography>
                  <Typography variant="h4" className={classes.contentText}>
                    Help to promote awareness for ParallelChain among their large following
                    base on social platforms, such as Twitter, YouTube, Instagram, in forms
                    of brand endorsing, project and product reviews, or other types of collaboration.
                  </Typography>
                </div>
                <img src="/images/parallelchain/mainnet/influencer_sm.svg" alt="Influencer Icon" className={classes.iconImageMobile} />
              </div>
            </Grid>
            <Grid item xs={12}>
              <div className={classes.contentBoxMobile}>
                <img src="/images/parallelchain/mainnet/translator_sm.svg" alt="Translator Icon" className={classes.iconImageMobile} />
                <div className={classes.contentBox}>
                  <Typography variant="h3" className={classes.headerText}>
                    Translators
                  </Typography>
                  <Typography variant="h4" className={classes.contentText}>
                    Help to make the communication of ParallelChain accessible to all
                    audiences by providing technically and conceptually accurate translated
                    materials in different languages.
                  </Typography>
                </div>
              </div>
            </Grid>

            <Grid item xs={12}>
              <div className={classes.contentBoxMobile}>
                <div className={classes.contentBox}>
                  <Typography variant="h3" className={classes.headerText}>
                    Moderators
                  </Typography>
                  <Typography variant="h4" className={classes.contentText}>
                    (Not Open Yet)
                  </Typography>
                </div>
                <img src="/images/parallelchain/mainnet/moderator_sm.svg" alt="Moderator Icon" className={classes.iconImageMobile} />
              </div>
            </Grid>

          </Grid>
        )}
        <Grid item xs={12} sm={12} md={12} className={classes.itemsContainer}>
          {!smOrSmaller ? <AmbassadorForm />
            : (
              <img
                src="/images/parallelchain/mainnet/ambassadorbutton_sm.svg"
                alt="Ambassador Button"
                onClick={displayForm}
                className={classes.btnImage}
              />
            )}
        </Grid>
      </Grid>

    </Section>
  );
}
