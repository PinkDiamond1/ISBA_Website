import { useState } from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import Checkbox from '@material-ui/core/Checkbox';
import ListItemText from '@material-ui/core/ListItemText';
import { useBackdrop } from 'use-backdrop';
import { WEBAPI_URL } from '../../../apiService/api';

const useStyles1 = makeStyles((t) => ({
  modalContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
  modalCard: {
    padding: `${t.spacing(3)}px`,
    maxWidth: '480px',
    margin: `0 ${t.spacing(1)}px`,
  },
}));

const useStyles2 = makeStyles((t) => ({
  form: {
    width: '100%',
  },
  benefitIcon: {
    display: 'block',
    objectFit: 'contain',
    height: '40px',
    pointerEvents: 'none',
    marginRight: `${t.spacing(1)}px`,
  },
  benefitTitleContainer: {
    display: 'flex',
    alignItems: 'center',
    marginTop: `${t.spacing(3)}px`,
    marginBottom: `${t.spacing(2)}px`,
  },
}));

const durations = [
  '<1 year',
  '1-2 years',
  '2-3 years',
  '> 3 years',
];

const cryptos = [
  'BitCoin (BTC)',
  'Ether (ETH)',
  'Cardano (ADA)',
  'Tether (USDT)',
  'Polkadot (DOT)',
  'Binance Coin (BNB)',
  'Uniswap (UNI)',
  'Solana (SOL)',
  'Chainlink (LINK)',
  'Avalanche (AVAX)',
  'Terra (LUNA)',
  'Dogecoin (DOGE)',
];
const wallets = [
  'Exodus',
  'Trust Wallet',
  'Metamask',
  'Exchanges',
  'Others',
];

const feedbacks = [
  'Short written feedback',
  'Extensive written report',
  'Verbal interview via Zoom',
];

function SubmitModal({ success }) {
  const classes = useStyles1();

  return (
    <div className={classes.modalContainer}>
      <Card classes={{ root: classes.modalCard }}>
        { success && (
          <>
            <Typography variant="h6">
              Thank you for registering for the closed beta.
            </Typography>
            <Typography variant="subtitle1" classes={{ root: 'push-bot2' }}>
              Your personal details have been submitted.
              Shortlisted applicants will receive the detailed
              arrangement by email on or before 10-10-2021.
            </Typography>
            <Link href="/parallelwallet">
              <a>
                <Button variant="contained" color="primary">
                  Return to ParallelWallet
                </Button>
              </a>
            </Link>
          </>
        )}
        { !success && (
        <>
          <Typography variant="h6">
            It&apos;s not you, it&apos;s us.
          </Typography>
          <Typography variant="subtitle1" classes={{ root: 'push-bot2' }}>
            Something went wrong when we tried to submit your inquiry about XPLL.
            We&apos;d appreciate it if you would inform
            us of the issue at info@parallelchain.io. We are sorry for the
            inconvenience
          </Typography>
          <Link href="/xpll">
            <a>
              <Button variant="contained" color="primary">
                Return to XPLL Token
              </Button>
            </a>
          </Link>
        </>
        )}
      </Card>
    </div>
  );
}

SubmitModal.propTypes = {
  success: PropTypes.bool.isRequired,
};

export default function Form() {
  const { displayBackdrop } = useBackdrop();

  const classes = useStyles2();

  const [fields, setFields] = useState({
    firstName: '',
    middleName: '',
    lastName: '',
    email: '',
    duration: '',
    cryptoList: '',
    wallet: '',
    feedbackType: '',
    idDoc: null,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(fields);

    const fd = new FormData();
    fd.append('title', fields.title);
    fd.append('firstName', fields.firstName);
    fd.append('middleName', fields.middleName);
    fd.append('duration', fields.duration);
    fd.append('cryptoList', fields.cryptoList);
    fd.append('wallet', fields.wallet);
    fd.append('feedbackType', fields.feedbackType);
    fd.append('email', fields.email);

    const options = {
      method: 'POST',
      body: fd,
    };

    fetch(`${WEBAPI_URL}/parallelwallet/get-beta`, options)
      .then((res) => {
        if (!res.ok) throw new Error();

        displayBackdrop(() => <SubmitModal success />);
      })
      .catch(() => {
        displayBackdrop(() => <SubmitModal success={false} />);
      });
  };
  const [duration, setDuration] = useState([]);
  const [crypto, setCryptos] = useState([]);
  const [wallet, setWallets] = useState([]);
  const [feedback, setFeedback] = useState([]);

  const handleDurationChange = (event) => {
    const {
      target: { value },
    } = event;
    setDuration(
      // On autofill we get a the stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
    setFields({ ...fields, duration: value.toString() });
  };
  const handleCryptoChange = (event) => {
    const {
      target: { value },
    } = event;
    setCryptos(
      // On autofill we get a the stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
    setFields({ ...fields, cryptoList: value.toString() });
  };
  const handleWalletChange = (event) => {
    const {
      target: { value },
    } = event;
    setWallets(
      // On autofill we get a the stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
    setFields({ ...fields, wallet: value.toString() });
  };
  const handleFeedbackChange = (event) => {
    const {
      target: { value },
    } = event;
    console.log(value);
    setFeedback(
      // On autofill we get a the stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
    setFields({ ...fields, feedback: value.toString() });
  };

  return (
    <>
      <Typography variant="h3" className="push-bot3">
        Personal details
      </Typography>
      <Typography variant="body1" classes={{ root: 'push-bot3' }}>
        Help to improve ParallelWallet by joining this closed-beta test. Hurry up only 50 slots available.
      </Typography>
      <Typography variant="body1" classes={{ root: 'push-bot3' }}>
        <i>**Please note that only XPLL  pre-sale participants are eligible to join
          the closed beta.
        </i>

      </Typography>
      <form className={classes.form} onSubmit={(handleSubmit)}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={4}>
            <TextField
              label="First name"
              onChange={(e) => {
                setFields({ ...fields, firstName: e.target.value });
              }}
              fullWidth
              required
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <TextField
              label="Middle name(s)"
              onChange={(e) => {
                setFields({ ...fields, middleName: e.target.value });
              }}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <TextField
              label="Last name"
              onChange={(e) => {
                setFields({ ...fields, lastName: e.target.value });
              }}
              fullWidth
              required
            />
          </Grid>
          <Grid item xs={12} md={12}>
            <TextField
              label="Apple App Store/Google Play Store Email"
              type="email"
              onChange={(e) => {
                setFields({ ...fields, email: e.target.value });
              }}
              fullWidth
              required
              classes={{ root: 'push-top2' }}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <InputLabel id="demo-multiple-name-label">Trading crypto since*</InputLabel>
            <Select
              labelId="demo-multiple-name-label"
              fullWidth
              value={duration}
              onChange={handleDurationChange}
              required
            >
              {durations.map((name) => (
                <MenuItem
                  key={name}
                  value={name}
                >
                  {name}
                </MenuItem>
              ))}
            </Select>
          </Grid>
          <Grid item xs={12} md={6}>
            <InputLabel id="demo-multiple-name-label">Tokens owned*</InputLabel>
            <Select
              label="Name"
              multiple
              fullWidth
              value={crypto}
              onChange={handleCryptoChange}
              required
            >
              {cryptos.map((name) => (
                <MenuItem
                  key={name}
                  value={name}
                >
                  {name}
                </MenuItem>
              ))}
            </Select>
          </Grid>
          <Grid item xs={12} md={6}>
            <InputLabel id="demo-multiple-name-label">Crypto Wallets*</InputLabel>
            <Select
              label="Name"
              multiple
              fullWidth
              value={wallet}
              onChange={handleWalletChange}
              required
            >
              {wallets.map((name) => (
                <MenuItem
                  key={name}
                  value={name}
                >
                  {name}
                </MenuItem>
              ))}
            </Select>
          </Grid>
          <Grid item xs={12} md={6}>
            <InputLabel id="demo-multiple-name-label">Feedback Type*</InputLabel>
            <Select
              label="Name"
              fullWidth
              value={feedback}
              onChange={handleFeedbackChange}
              required
              multiple
            >
              {feedbacks.map((name) => (
                <MenuItem
                  key={name}
                  value={name}
                >
                  {name}
                </MenuItem>
              ))}
            </Select>
          </Grid>
        </Grid>
        <Button
          variant="contained"
          type="submit"
          color="primary"
          className="push-top3"
          fullWidth
        >
          Submit
        </Button>
      </form>
    </>
  );
}
