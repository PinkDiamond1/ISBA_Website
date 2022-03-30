import { makeStyles, useTheme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useBackdrop } from 'use-backdrop';
import FadeIn from '../FadeIn';
import MagicBox from '../MagicBox';
import ParallelChainWebDemoPopup from '../parallelchain/ParallelChainWebDemoPopup';
import ParallelChainHomeDemo from './ParallelChainHomeDemo';
import BlockLink from '../BlockLink';

const useStyles = makeStyles((theme) => ({
  textContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  image: {
    width: '100%',
    pointerEvents: 'none',
  },
  logoImage: {
    width: '90%',
    pointerEvents: 'none',
    margin: 'auto auto',
  },
  button: {
    marginTop: `${theme.spacing(2)}px`,
  },
  title: {
    fontWeight: '600',
    color: 'black',
  },
  body2: {
    marginTop: `${theme.spacing(2)}px`,
    fontWeight: '100',
  },
  container: {
    position: 'relative',
    width: '100%',
    overflow: 'hidden',
    display: 'flex',
    zIndex: 1,
    backgroundColor: 'white',
    boxShadow: '2px 2px 2px 2px #D3D3D3',
  },
  item1: {
    flex: '1 1 0%', /* ADDED */
    minWidth: '0', /* ADDED */
    textAlign: 'center',
    display: 'inline-block',
    width: '50%',
    height: '400px',
    '&:hover': {
      cursor: 'pointer',
      flexBasis: '100%',
      transition: 'flex-basis 1s ease-out',
      zIndex: '100',
    },
    '&:hover > $titleContainer': {
      opacity: '0',
    },
    '&:hover > $titleHoverContainer': {
      opacity: '1',
    },
  },
  item2: {
    flex: '1 1 0%', /* ADDED */
    minWidth: '0', /* ADDED */
    textAlign: 'center',
    display: 'inline-block',
    width: '50%',
    height: '400px',
    backgroundImage: 'url(\'/images/parallelchain/mainnet/mainnetbg.gif\')',
    '&:hover': {
      cursor: 'pointer',
      flexBasis: '100%',
      transition: 'flex-basis 0.6s ease-out',
    },
    '&:hover > $titleContainer2': {
      opacity: '0',
    },
    '&:hover > $titleHoverContainer2': {
      opacity: '1',
    },
  },
  titleContainer: {
    position: 'relative',
    top: '50%',
  },
  titleHoverContainer: {
    opacity: '0',
    textAlign: 'left',
    padding: '16px',
    position: 'absolute',
    width: '70%',
    left: '10%',
    marginTop: '30px',
  },
  titleContainer2: {
    position: 'relative',
    top: '50%',
  },
  titleHoverContainer2: {
    opacity: '0',
    textAlign: 'left',
    padding: '16px',
    position: 'absolute',
    width: '70%',
    left: '10%',
    marginTop: '30px',
  },
  body: {
    textAlign: 'left',
  },
}));

export default function HomeMainnetEnterpriseSliderPanel() {
  const classes = useStyles();
  const { displayBackdrop } = useBackdrop();
  const theme = useTheme();
  const sm = useMediaQuery(theme.breakpoints.down('sm'));

  const displayWebDemo = () => displayBackdrop((closeBackdrop) => (
    <>
      <ParallelChainWebDemoPopup closeBackdrop={closeBackdrop} />
    </>
  ));

  return (
    <MagicBox
      render={(boxIn, boxRef) => (
        <FadeIn variant="up" in={boxIn} boxRef={boxRef}>
          <div className={classes.container}>
            <BlockLink className={classes.item1} href="/parallelchain/enterprise">
              <div className={classes.titleContainer}>
                <Typography variant="h2" className={classes.title}>
                  ParallelChain Enterprise
                </Typography>
              </div>
              <div className={classes.titleHoverContainer}>
                <Typography variant="h2" className={classes.title}>
                  ParallelChain Enterprise
                </Typography>
                <br />
                <br />
                <Typography variant="h6" className={classes.body} style={{ color: 'black' }}>
                  ParallelChain Enterprise is a layer-1, permissioned blockchain with tested and
                  proven speeds of 120,000 TPS and ~0.003 second latency.
                </Typography>
                <br />
                <br />
                <Typography variant="h6" className={classes.body} style={{ color: 'black' }}>
                  With a wide range of layer-2 applications built atop, ParallelChain Enterprise powers the most performant, scalable,
                  privacy-protected and GDPR-friendly solutions tailored for your business.
                </Typography>
              </div>
            </BlockLink>
            <BlockLink className={classes.item2} href="/parallelchain/mainnet">
              <div className={classes.titleContainer2}>
                <Typography variant="h2" className={classes.title} style={{ color: 'white' }}>
                  ParallelChain Mainnet
                </Typography>
              </div>
              <div className={classes.titleHoverContainer2}>
                <Typography variant="h2" className={classes.title} style={{ color: 'white' }}>
                  ParallelChain Mainnet
                </Typography>
                <br />
                <br />
                <Typography variant="h6" className={classes.body} style={{ color: 'white' }}>
                  ParallelChain Mainnet is a layer-1 open-source blockchain technology that can
                  perform at an optimal speed of 80,000 TPS, providing the most powerful smart contract platform for decentralised applications
                </Typography>
                <br />
                <br />
                <Typography variant="h6" className={classes.body} style={{ color: 'white' }}>
                  The network is secured by ParallelBFT, a unique proof-of-stake mechanism with a masterfully-crafted class
                  system to ensure accountable and efficient node operation.
                </Typography>
              </div>
            </BlockLink>
          </div>
        </FadeIn>
      )}
    />
  );
}
