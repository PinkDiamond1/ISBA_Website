import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import PWThemeSection from '../PWThemeSection';

const useStyles = makeStyles((t) => ({
  root: {
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
  },
  subRoot: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    color: t.palette.neutral.white,
    position: 'relative',
  },
  backgroundBlur: {
    position: 'absolute',
    height: '100%',
    width: '100%',
    top: 0,
    left: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    filter: 'blur(16px)',
    borderRadius: '48px',
    zIndex: -1,
  },
}));

const background = (url) => `url(${url}) center/cover`;

export default function InteroperabiltyPanel() {
  const classes = useStyles();
  return (
    <PWThemeSection
      className={classes.root}
      subContainerClassName={classes.subRoot}
      background={`${background('/images/index/interoperability_bg.png')}`}
    >
      <div className={classes.backgroundBlur} />
      <Typography className="push-bot3" align="left" variant="h2">
        Public-Private Interoperability
      </Typography>
      <Typography className="push-bot2" align="left" variant="h3">
        ParallelChain is a scalable blockchain ecosystem of two layer-1 platforms:
        the public Mainnet and Private networks. All networks are interoperable at
        the protocol level through a secure and private channel called
        <strong> Inter-ParallelChain Communication (IPC)</strong>.
      </Typography>
      <Typography className="push-bot2" align="left" variant="h3">
        IPC serves two purposes in ParallelChain.
      </Typography>
      <Typography className="push-bot2" align="left" variant="h3">
        It provides an interface between the metaverse and the real world by enabling
        applications to operate across public and private layers.
      </Typography>
      <Typography className="push-bot2" align="left" variant="h3">
        Second, it allows networks on the private layer to piggyback on the Mainnet&apos;s
        consensus and enjoy stronger security while preserving their privacy and autonomy.
        Another feature in this IPC-powered consensus is
        <strong> Inter-ParallelChain Proof-of-Immutability (IPPoIM)  </strong>
        - an auditing function designed to remove the trust
        barrier between members of a private network by enabling them to verify the
        network&apos;s tamper-proofness without accessing on-chain data.
      </Typography>
    </PWThemeSection>
  );
}
