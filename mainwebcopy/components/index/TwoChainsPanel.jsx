import { useState } from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Collapse from '@material-ui/core/Collapse';
import Button from '@material-ui/core/Button';
import Section from '../Section';
import DropDownButton from './DropDownButton';
import BlockLink from '../BlockLink';

const TEXT = {
  mainnet: `Faster than the fastest, ParallelChain Mainnet is a layer-1
  public blockchain capable of processing 80,000 transactions per second
  at a negligible fee, the blockchain finale for decentralized applications.`,
  private: `120,000 transactions per second. 3 millisecond confirmation
  time. Business-built features. ParallelChain Private is the most powerful
  commercial blockchain for permissioned applications.`,
};

const useStyles = makeStyles((t) => ({
  rootLgOrLarger: {
    position: 'relative',
    height: '500px',
  },
  chainCard: {
    textAlign: 'center',
    borderRadius: '16px',
    marginBottom: `${t.spacing(1)}px`,
    padding: `${t.spacing(3)}px`,
  },
  chainCardLarge: {
    position: 'absolute',
    top: 0,
    width: '45%',
    height: '360px',
    transition: `all 800ms ${t.transitions.easing.easeInOut}`,
  },
  chainCardLargeExpand: {
    top: '-30px',
    width: '100%',
    height: '420px',
  },
  chainCardLargeHide: {
    opacity: 0,
  },
  mainnetCard: {
    backgroundColor: t.palette.neutral.black,
    color: t.palette.neutral.white,
    '&:hover': {
      backgroundColor: t.palette.neutral.black,
    },
  },
  privateCard: {
    backgroundColor: t.palette.neutral.white,
    color: t.palette.neutral.black,
  },
  mainnetCardLarge: {
    left: 0,
    boxShadow: `0px 0px 8px ${t.palette.neutral.darkestGray}`,
  },
  privateCardLarge: {
    right: 0,
    boxShadow: `0px 0px 8px ${t.palette.neutral.white}`,
  },
  learnMoreButtonLarge: {
    position: 'relative',
    top: '48px',
  },
  cardInnerExpand: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    textAlign: 'left',
    justifyContent: 'center',
    alignItems: 'flex-start',
    padding: `${t.spacing(8)}px`,
  },
  cardInner: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    textAlign: 'left',
    justifyContent: 'center',
    alignItems: 'center',
  },
  infoTextPrivate: {
    color: '#000',
    textAlign: 'left',
  },
  infoTextMainnet: {
    color: '#fff',
    textAlign: 'left',
  },
  infoGrid: {
    marginTop: `${t.spacing(2)}px`,
    animation: `$fadeDown 2000ms ${t.transitions.easing.easeInOut}`,
    animationDelay: '800ms',
    animationFillMode: 'both',
    overflow: 'hidden',
  },
  contentText: {
    marginTop: `${t.spacing(4)}px`,
    animation: `$fadeDown 2000ms ${t.transitions.easing.easeInOut}`,
    animationDelay: '800ms',
    animationFillMode: 'both',
    overflow: 'hidden',
  },
  '@keyframes fadeDown': {
    from: {
      opacity: 0,
      transform: 'translateY(-40px)',
    },

    to: {
      opacity: 1,
      transform: 'translateY(0px)',
    },
  },
  '@keyframes fadeDownReverse': {
    from: {
      opacity: 1,
      transform: 'translateY(0px)',
    },

    to: {
      opacity: 0,
      transform: 'translateY(-40px)',
    },
  },
}));

export default function TwoChainsPanel() {
  const theme = useTheme();
  const mdOrSmaller = useMediaQuery(theme.breakpoints.down('md'));
  const mdOnly = useMediaQuery(theme.breakpoints.only('md'));

  const [mainnetExpand, setMainnetExpand] = useState(false);
  const [privateExpand, setPrivateExpand] = useState(false);

  const classes = useStyles({ mainnetExpand, privateExpand });

  if (mdOrSmaller) {
    return (
      <Section>
        <Grid container spacing={2}>
          <Grid
            item
            xs={12}
            md={6}
            onClick={() => setMainnetExpand(!mainnetExpand)}
          >
            <div className={`${classes.chainCard} ${classes.mainnetCard}`}>
              <Typography variant="h4">
                ParallelChain Mainnet
                {!mdOnly && <DropDownButton toggled={mainnetExpand} />}
              </Typography>
              <Collapse in={mdOnly || mainnetExpand}>
                <Typography className="push-top1 push-bot2" variant="body1" align="left">
                  {TEXT.mainnet}
                </Typography>
                <BlockLink color={theme.palette.neutral.white} href="/parallelchain/mainnet">
                  <Button color="inherit" variant="outlined" fullWidth>
                    Learn more
                  </Button>
                </BlockLink>
              </Collapse>
            </div>
          </Grid>
          <Grid
            item
            xs={12}
            md={6}
            onClick={() => setPrivateExpand(!privateExpand)}
          >
            <div className={`${classes.chainCard} ${classes.privateCard}`}>
              <Typography variant="h4">
                ParallelChain Private
                {!mdOnly && <DropDownButton toggled={privateExpand} /> }
              </Typography>
              <Collapse in={mdOnly || privateExpand}>
                <Typography className="push-top1 push-bot2" variant="body1" align="left">
                  {TEXT.private}
                </Typography>
                <BlockLink color={theme.palette.neutral.black} href="/parallelchain/enterprise">
                  <Button variant="outlined" fullWidth>
                    Learn more
                  </Button>
                </BlockLink>
              </Collapse>
            </div>
          </Grid>
        </Grid>
      </Section>
    );
  }

  return (
    <Section subContainerClassName={classes.rootLgOrLarger}>
      <div
        className={`${classes.chainCard} 
                    ${classes.chainCardLarge}
                    ${mainnetExpand && classes.chainCardLargeExpand}
                    ${privateExpand && classes.chainCardLargeHide}
                    ${classes.mainnetCard}
                    ${classes.mainnetCardLarge}`}
      >
        <div
          onMouseEnter={() => setMainnetExpand(true)}
          onMouseLeave={() => setMainnetExpand(false)}
          onFocus={() => setMainnetExpand(true)}
          onBlur={() => setMainnetExpand(false)}
          className={mainnetExpand ? classes.cardInnerExpand : classes.cardInner}
        >
          <Typography variant="h2">
            ParallelChain Mainnet
          </Typography>
          <Collapse
            in={mainnetExpand}
            style={{ transitionDelay: '800ms' }}
          >
            <Typography className={classes.contentText} variant="h3">
              {TEXT.mainnet}
            </Typography>
            <Grid container spacing={6} direction="row" justifyContent="space-between" className={classes.infoGrid}>
              <Grid item md={4}>
                <div className={classes.infoTextMainnet}>
                  <Typography variant="h3">
                    Delegated
                  </Typography>
                  <Typography variant="h4">
                    Proof-of-Stake
                  </Typography>
                </div>
              </Grid>
              <Grid item md={4}>
                <div className={classes.infoTextMainnet}>
                  <Typography variant="h3">
                    80,000
                  </Typography>
                  <Typography variant="h4">
                    transactions per second
                  </Typography>
                </div>
              </Grid>
              <Grid item md={4}>
                <div className={classes.infoTextMainnet}>
                  <Typography variant="h3">
                    Democratic
                  </Typography>
                  <Typography variant="h4">
                    accountability
                  </Typography>
                </div>
              </Grid>
            </Grid>
          </Collapse>
        </div>
        <BlockLink
          className={classes.learnMoreButtonLarge}
          href="/parallelchain/mainnet"
        >
          <Button className={classes.mainnetCard} variant="contained">
            Learn more
          </Button>
        </BlockLink>

      </div>
      <div
        className={`${classes.chainCard} 
                    ${classes.chainCardLarge}
                    ${privateExpand && classes.chainCardLargeExpand}
                    ${mainnetExpand && classes.chainCardLargeHide}
                    ${classes.privateCard}
                    ${classes.privateCardLarge}`}
      >
        <div
          onMouseEnter={() => setPrivateExpand(true)}
          onMouseLeave={() => setPrivateExpand(false)}
          onFocus={() => setPrivateExpand(true)}
          onBlur={() => setPrivateExpand(false)}
          className={privateExpand ? classes.cardInnerExpand : classes.cardInner}
        >
          <Typography variant="h2">
            ParallelChain Private
          </Typography>
          <Collapse
            in={privateExpand}
            style={{ transitionDelay: '800ms' }}
          >
            <Typography className={classes.contentText} variant="h3">
              {TEXT.private}
            </Typography>
            <Grid container spacing={6} direction="row" justifyContent="space-between" className={classes.infoGrid}>
              <Grid item md={4}>
                <div className={classes.infoTextPrivate}>
                  <Typography variant="h3">
                    120,000
                  </Typography>
                  <Typography variant="h4">
                    transactions per second
                  </Typography>
                </div>
              </Grid>
              <Grid item md={4}>
                <div className={classes.infoTextPrivate}>
                  <Typography variant="h3">
                    3 millisecond
                  </Typography>
                  <Typography variant="h4">
                    confirmation time
                  </Typography>
                </div>
              </Grid>
              <Grid item md={4}>
                <div className={classes.infoTextPrivate}>
                  <Typography variant="h3">
                    GDPR
                  </Typography>
                  <Typography variant="h4">
                    compliance
                  </Typography>
                </div>
              </Grid>
            </Grid>
          </Collapse>
        </div>
        <BlockLink
          className={classes.learnMoreButtonLarge}
          href="/parallelchain/enterprise"
        >
          <Button className={classes.privateCard} variant="contained">
            Learn more
          </Button>
        </BlockLink>

      </div>
    </Section>
  );
}
