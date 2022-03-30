import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';
import TickIcon from '@material-ui/icons/Check';
import CrossIcon from '@material-ui/icons/Close';
import { Overtitle } from 'dtl-react-components';
import Section from '../Section';

const useStyles = makeStyles((theme) => ({
  table: {
    marginBottom: `${theme.spacing(4)}px`,
  },
  container: {
    color: theme.palette.primary.dark,
    paddingBottom: '0',
  },
  logoImage: {
    objectFit: 'contain',
    height: '40px',
    marginBottom: `${theme.spacing(1)}px`,
    pointerEvents: 'none',
  },
  titleText: {
    color: theme.palette.neutral.dark,
  },
  subTitleText: {
    fontWeight: '400',
    marginBottom: `${theme.spacing(10)}px`,
    color: 'black',
    lineHeight: '21.98px'
  },
  parallelLogoImage: {
    width: '100px',
    pointerEvents: 'none',
  },
  fieldCell: {
    borderBottom: '2px solid #ededed',
    borderRight: '2px solid #ededed',
  },
  commonCell: {
    borderBottom: '2px solid #ededed',
    borderRight: '2px solid #ededed',
  },
  parallelCell: {
    backgroundColor: '#027D6F',
    borderBottom: 'none',
  },
  parallel: {
    color: theme.palette.neutral.white,
    fontWeight: 'bold',
  },
  parallelOld: {
    color: theme.palette.neutral.darkestGray,
    fontWeight: 'bold',
  },
  others: {
    color: theme.palette.neutral.darkestGray,
  },
  noteText: {
    textAlign: 'right',
    color: theme.palette.neutral.darkestGray,
    marginTop: `${theme.spacing(3)}px`,
  },
  mainText: {
    color: '#027D6F',
  },
  fieldText: {
    color: '#003D61',
  },
}));

export default function ParallelChainSTablePanel() {
  const classes = useStyles();

  const tableFields = [
    'Availability',
    'Type of Blockchain',
    'Transactions Per Second (Single Chain)',
    'Transaction Confirmation',
    'Data Privacy Compliance',
    'Right to be Forgotten',
    'User Registration: Secured and Trusted Access',
  ];

  const tableParallel_2 = {
    name: 'ParallelChain Enterprise 2.0',
    icon: <img
      className={classes.parallelLogoImage}
      src="/images/table/ParallelChain-icon-white.svg"
      alt="Parallelchain"
    />,
    properties: [
      'Now',
      'Private',
      '120,000+ TPS',
      '~ 0.003 second',
      'GDPR-friendly',
      <TickIcon />,
      'Multi-biometrics',
    ],
  };

  const tableParallel_1 = {
    name: 'ParallelChain Enterprise 1.0',
    icon: <img
      className={classes.logoImage}
      src="/images/table/ParallelChain-icon-grey.svg"
      alt="Parallelchain"
    />,
    properties: [
      'Now',
      'Private',
      '100,000+ TPS',
      '0.01 second',
      'GDPR-friendly',
      <TickIcon />,
      'Two-Factor Authentication + Biometrics',
    ],
  };

  const tableValues = [
    // {
    //   name: 'Bitcoin',
    //   icon: <img
    //     className={classes.logoImage}
    //     src="/images/table/bitcoin-gray.svg"
    //     alt="Bitcoin"
    //   />,
    //   properties: [
    //     'Now',
    //     'Public',
    //     '3+ TPS',
    //     '(10-60) * 5 Minutes',
    //     'Unlimited',
    //     <CrossIcon />,
    //     <CrossIcon />,
    //     'N/A',
    //   ],
    // },
    {
      name: 'Ethereum 2.0',
      icon: <img
        className={classes.logoImage}
        src="/images/table/eth-gray.svg"
        alt="Ethereum"
      />,
      properties: [
        '>2022',
        'Public',
        '1,000 TPS',
        '5,000 seconds',
        <CrossIcon />,
        <CrossIcon />,
        'N/A',
      ],
    },
    {
      name: 'Hyperledger Fabric',
      icon: <img
        className={classes.logoImage}
        src="/images/table/hyperledger-gray.svg"
        alt="Hyperledger"
      />,
      properties: [
        'Now',
        'Consortium',
        '3,500+ TPS',
        '0.1 second',
        <CrossIcon />,
        <CrossIcon />,
        'Two-Factor Authentication',
      ],
    },
    {
      name: 'Corda',
      icon: <img
        className={classes.logoImage}
        src="/images/table/corda-gray.png"
        alt="Hyperledger"
      />,
      properties: [
        'Now',
        'Private',
        '800+ TPS',
        '"Near instant"',
        <TickIcon />,
        <CrossIcon />,
        'Two-Factor Authentication',
      ],
    },
    // {
    //   name: 'Binance Smart Chain',
    //   icon: <img
    //     className={classes.logoImage}
    //     src="/images/table/binance-gray.svg"
    //     alt="BSC"
    //   />,
    //   properties: [
    //     'Now',
    //     'Public',
    //     '100 TPS',
    //     '3 seconds',
    //     'Unlimited',
    //     <CrossIcon />,
    //     <CrossIcon />,
    //     'N/A',
    //   ],
    // },
    // {
    //   name: 'Solana',
    //   icon: <img
    //     className={classes.logoImage}
    //     src="/images/table/solana-gray.svg"
    //     alt="Solana"
    //   />,
    //   properties: [
    //     '>2021',
    //     'Public',
    //     '50,000 TPS',
    //     '0.4 seconds',
    //     'Unlimited',
    //     <CrossIcon />,
    //     <CrossIcon />,
    //     'N/A',
    //   ],
    // },
    // {
    //   name: 'Polkadot',
    //   icon: <img
    //     className={classes.logoImage}
    //     src="/images/table/polkadot-gray.png"
    //     alt="Polkadot"
    //   />,
    //   properties: [
    //     'Now',
    //     'Cross-chain',
    //     '1,000 TPS (single chain)',
    //     'Up to 1 hour',
    //     <CrossIcon />,
    //     <CrossIcon />,
    //     'N/A',
    //   ],
    // },
  ];

  return (
    <Section
      subContainerClassName={classes.container}
      spacingBottom={4}
    >
      <Typography variant="h3" classes={{ root: classes.mainText }}>
        Light-years Ahead
      </Typography>
      <Typography variant="h2" classes={{ root: classes.titleText }}>
        How ParallelChain Enterprise Compares.
      </Typography>
      <Typography variant="h3" classes={{ root: classes.subTitleText }}>
        Putting our blockchain head-to-head with other enterprise <br/>
        blockchain solutions on the market.
      </Typography>
      <TableContainer className={classes.table}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell classes={{ root: classes.commonCell }} />
              {tableValues.map((tableValue) => (
                <TableCell
                  key={tableValue.name}
                  align="center"
                  classes={{ root: classes.commonCell }}
                >
                  {tableValue.icon}
                  {tableValue.name === 'Bitcoin' || tableValue.name === 'Ethereum'
                    ? (
                      <Typography variant="subtitle2" classes={{ root: classes.others }}>
                        {tableValue.name}
                        <sup>1</sup>
                      </Typography>
                    )
                    : (
                      <Typography variant="subtitle2" classes={{ root: classes.others }}>
                        {tableValue.name}
                      </Typography>
                    )}
                </TableCell>
              ))}
              <TableCell align="center" classes={{ root: classes.commonCell }}>
                {tableParallel_1.icon}
                <Typography variant="subtitle2" classes={{ root: classes.parallelOld }}>
                  {tableParallel_1.name}
                </Typography>
              </TableCell>
              <TableCell align="center" classes={{ root: classes.parallelCell }}>
                {tableParallel_2.icon}
                <Typography variant="subtitle2" classes={{ root: classes.parallel }}>
                  {tableParallel_2.name}
                </Typography>
              </TableCell>
            </TableRow>
          </TableHead>
          {tableFields.map((tableField, index) => (
            <TableRow>
              <TableCell align="right" classes={{ root: classes.fieldCell }}>
                <Typography variant="subtitle2" classes={{ root: classes.fieldText }}>
                  {tableField}
                </Typography>
              </TableCell>
              {tableValues.map((tableValue) => (
                <TableCell align="center" classes={{ root: classes.commonCell }}>
                  <Typography variant="subtitle2" classes={{ root: classes.others }}>
                    {tableValue.properties[index]}
                  </Typography>
                </TableCell>
              ))}
              <TableCell align="center" classes={{ root: classes.commonCell }}>
                <Typography variant="subtitle2" classes={{ root: classes.parallelOld }}>
                  {tableParallel_1.properties[index]}
                </Typography>
              </TableCell>
              <TableCell align="center" classes={{ root: classes.parallelCell }}>
                <Typography variant="subtitle2" classes={{ root: classes.parallel }}>
                  {tableParallel_2.properties[index]}
                </Typography>
              </TableCell>
            </TableRow>
          ))}
          <TableBody />
        </Table>
      </TableContainer>
      <Typography variant="subtitle2" className={classes.noteText}>
        <sup>1</sup>
        {' '}
        Note: Bitcoin and Ethereum requires (N + 5) transactions in order to confirm the N
        <sup>th</sup>
        {' '}
        transaction.
      </Typography>
    </Section>
  );
}
