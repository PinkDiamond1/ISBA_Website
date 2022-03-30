import PropTypes from 'prop-types';
import NextLink from 'next/link';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import { ArrowDropDown } from '@material-ui/icons';
import BlockLink from '../BlockLink';

const useStyles = makeStyles((theme) => ({
  container: {
    '&:hover .products-scroll-container': {
      height: '220px',
      paddingTop: `${theme.spacing(4)}px`,
      paddingBottom: `${theme.spacing(1)}px`,
      opacity: 1,
    },
  },
  sectionLabel: {
    cursor: 'pointer',
    color: ({ textColor }) => textColor,
    padding: ` ${theme.spacing(2)}px`,
    transition: 'color 300ms ease-in-out',
    textTransform: 'uppercase',
    fontWeight: 300,
    display: 'flex',
  },
  productsScrollContainer: {
    position: 'absolute',
    left: 0,
    height: 0,
    opacity: 0,
    overflowY: 'hidden',
    transition: '300ms opacity ease-in',
    width: '100%',
  },
  productsContainer: {
    width: '100%',
    height: '100%',
    overflowY: 'hidden',
    [theme.breakpoints.down('md')]: {
      width: '100%',
    },
  },
  coreTechnologyContainer: {
    height: '100%',
  },
  implementationsContainer: {
    height: '100%',
  },
  productContainer: {
    height: '100%',
  },
  productPairContainer: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  parallelChainLogoContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  parallelChainLogo: {
    height: '80px',
    marginBottom: `${theme.spacing(1)}px`,
  },
  parallelChainTextContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  parallelChainCard: {
    display: 'flex',
    alignItems: 'center',
    background: 'linear-gradient(90deg, rgba(17,168,142,1) 10%, rgba(0,76,66,1) 100%)',
  },
  preventiveChainCard: {
    display: 'flex',
    alignItems: 'center',
    background: 'linear-gradient(90deg, #d53369 0%, #daae51 100%)',
  },
  ekycChainCard: {
    display: 'flex',
    alignItems: 'center',
    background: 'linear-gradient(90deg, rgba(0,144,158,1) 0%, rgba(40,74,110,1) 100%)',
  },
  approvalChainCard: {
    display: 'flex',
    alignItems: 'center',
    background: 'linear-gradient(-90deg, rgba(76,198,179,1) 0%, rgba(94,200,81,1) 100%)',
  },
  chattelChainCard: {
    display: 'flex',
    alignItems: 'center',
    background: 'linear-gradient(90deg, rgba(0,88,91,1) 0%, rgba(1,182,184,1) 100%)',
  },
  otherSolutionCard: {
    display: 'flex',
    alignItems: 'center',
    background: 'rgba(47,54,99,0.7)',
  },
  productCard: {
    color: theme.palette.neutral.white,
    borderRadius: '8px',
    height: '100%',
    padding: `${theme.spacing(2)}px`,
    marginRight: `${theme.spacing(2)}px`,
    position: 'relative',
    textAlign: 'center',
  },
  mediumLogo: {
    height: '60px',
    marginBottom: `${theme.spacing(1)}px`,
  },
  smallLogo: {
    width: '28px',
    marginRight: `${theme.spacing(1)}px`,
  },
  mediumFadedLogo: {
    position: 'absolute',
    right: '-150px',
    opacity: '0.15',
  },
  smallFadedLogo: {
    position: 'absolute',
    right: '-10px',
    height: '100px',
    opacity: '0.15',
  },
  insiderThreatsCard: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  smartCityCard: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundImage: 'url(\'/images/ecosystems-and-solutions/smart_city_bg.jpg\')',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    '&::before': {
      content: '" "',
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      background: 'linear-gradient(45deg, rgba(214,214,214,0.6) -20%, rgba(40,115,46,0.95) 130%)',
    },
  },
  fintechCard: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundImage: 'url(\'/images/ecosystems-and-solutions/fintech_bg.png\')',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    '&::before': {
      content: '" "',
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      background: 'linear-gradient(45deg, rgba(214,214,214,0.4) -20%, rgba(109,111,255,0.95) 130%)',
    },
  },
}));

export default function TopbarProductsNew({
  textColor, setIsExpanded,
}) {
  const classes = useStyles({ textColor });

  return (
    <div
      onMouseEnter={() => setIsExpanded(true)}
      onMouseLeave={() => setIsExpanded(false)}
      className={classes.container}
    >
      <NextLink href="/parallelchain/enterprise">
        <Link
          display="inline"
          variant="subtitle1"
          classes={{
            root: classes.sectionLabel,
          }}
        >
          Products  <ArrowDropDown />
        </Link>
      </NextLink>
      <div className={`products-scroll-container ${classes.productsScrollContainer}`}>
        <Grid container classes={{ root: classes.productsContainer }}>
          <Grid item xs={6} classes={{ root: classes.coreTechnologyContainer }}>
            <BlockLink href="/parallelchain/enterprise">
              <Card classes={{ root: `${classes.productCard} ${classes.parallelChainCard}` }}>
                <Grid container>
                  <Grid item xs={7} classes={{ root: classes.parallelChainLogoContainer }}>
                    <img
                      src="/images/parallelchain/parallelchainwhite.svg"
                      alt="ParallelChain"
                      className={classes.parallelChainLogo}
                    />
                    <Typography variant="h6">
                      ParallelChain S
                    </Typography>
                  </Grid>
                  <Grid item xs={5} classes={{ root: classes.parallelChainTextContainer }}>
                    <Typography variant="h5" classes={{ root: classes.fastestText }}>
                      Fast
                    </Typography>
                    <Typography variant="h5" classes={{ root: classes.fastestText }}>
                      Secure
                    </Typography>
                    <Typography variant="h5" classes={{ root: classes.fastestText }}>
                      Dependable
                    </Typography>
                  </Grid>
                </Grid>
                <img
                  src="/images/parallelchain/parallelchainwhite.svg"
                  alt="ParallelChain"
                  className={classes.mediumFadedLogo}
                />
              </Card>
            </BlockLink>
          </Grid>
          <Grid item xs={3} classes={{ root: classes.productPairContainer }}>
            <BlockLink href="/ekyc-chain" className="push-bot1">
              <Card classes={{ root: `${classes.productCard} ${classes.ekycChainCard}` }}>
                <img
                  src="/images/ekycchain/ekycchain-logo-white.svg"
                  alt="KYCCompliance"
                  className={classes.smallLogo}
                />
                <Typography variant="subtitle2">
                  eKYC-Chain
                </Typography>
                <img
                  src="/images/ekycchain/ekycchain-logo-white.svg"
                  alt="KYCCompliance"
                  className={classes.smallFadedLogo}
                />
              </Card>
            </BlockLink>
            <BlockLink href="/approvalchain">
              <Card classes={{ root: `${classes.productCard} ${classes.approvalChainCard}` }}>
                <img
                  src="/images/approvalchain/approvalchain-logo-white.svg"
                  alt="ApprovalChain"
                  className={classes.smallLogo}
                />
                <Typography variant="subtitle2">
                  ApprovalChain
                </Typography>
                <img
                  src="/images/approvalchain/approvalchain-logo-white.svg"
                  alt="ApprovalChain"
                  className={classes.smallFadedLogo}
                />
              </Card>
            </BlockLink>
          </Grid>
          <Grid item xs={3} classes={{ root: classes.productPairContainer }}>
            <BlockLink href="/preventivechain" className="push-bot1">
              <Card classes={{ root: `${classes.productCard} ${classes.preventiveChainCard}` }}>
                <img
                  src="/images/preventivechain/preventivechain-logo-white.svg"
                  alt="PreventitiveChain"
                  className={classes.smallLogo}
                />
                <Typography variant="subtitle2">
                  PreventiveChain
                </Typography>
                <img
                  src="/images/preventivechain/preventivechain-logo-white.svg"
                  alt="PreventitiveChain"
                  className={classes.smallFadedLogo}
                />
              </Card>
            </BlockLink>
            <BlockLink href="/chattelchain">
              <Card classes={{ root: `${classes.productCard} ${classes.chattelChainCard}` }}>
                <img
                  src="/images/chattelchain/chattelchain-logo-white.svg"
                  alt="ChattelChain"
                  className={classes.smallLogo}
                />
                <Typography variant="subtitle2">
                  ChattelChain
                </Typography>
                <img
                  src="/images/chattelchain/chattelchain-logo-white.svg"
                  alt="ChattelChain"
                  className={classes.smallFadedLogo}
                />
              </Card>
            </BlockLink>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

TopbarProductsNew.propTypes = {
  textColor: PropTypes.string.isRequired,
  setIsExpanded: PropTypes.func.isRequired,
};
