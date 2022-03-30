import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Section from '../Section';

const useStyles = makeStyles((theme) => ({
  featureTitle: {
    color: '#003D61',
    marginBottom: `${theme.spacing(2)}px`,
  },
  featureSubTitle: {
    color: 'black',
    marginBottom: `${theme.spacing(3)}px`,
  },
}));

export default function TechnologyIntroPanel() {
  const classes = useStyles();

  return (
    <Section>
      <Typography variant="h2" classes={{ root: classes.featureTitle }}>
        Fostering Blockchain Adoption
      </Typography>
      <Typography variant="h5" classes={{ root: classes.featureSubTitle }}>
        ParallelChain is a public + private layer-1 blockchain protocol building an accountable, fair and solid backbone infrastructure for the digital economy.
      </Typography>
      <Typography variant="h5" classes={{ root: classes.featureSubTitle }}>
        Since its birth in 2018, ParallelChain has been a permissioned blockchain platform where high performance enterprise-grade applications are built on and operated, such as KYC, data security, supply chain solutions. Built from the ground up, ParallelChain was designed for commercial and business adoption, its unique features have enabled enterprises to leverage blockchain technology without compromising their business autonomy and data privacy, or risking compliance.
      </Typography>
      <Typography variant="h5" classes={{ root: classes.featureSubTitle }}>
        Meanwhile, the DeFi and cryptocurrency space has gained enormous traction and is destined to play a significant role in the present and future financial system. Because of their distinctive characteristics, the DeFi community and traditional enterprises will face significant challenges as they become more intertwined. There is a pressing need of an environment that enables seamless access between enterprises and DeFi, more importantly, an ecosystem that understands their respective needs and values – and that is what ParallelChain shall deliver. The ParallelChain Mainnet project is a distributed, public smart contract platform powered by ParallelBFT, a proof-of-stake consensus based on sharding and hashing algorithms unique to ParallelChain. The ParallelChain ecosystem, comprising public and enterprise networks, provides the means for DeFi to thrive in the regulated world system and accelerates enterprises’ migration to a blockchain-enabled, more crypto-friendly business model.
      </Typography>
    </Section>
  );
}
