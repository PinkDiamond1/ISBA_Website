import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  container: {
    padding: `0 ${theme.spacing(1)}px`,
    marginTop: '20px',
  },
  itemContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  image: {
    width: '20px',
    height: '20px',
    marginRight: `${theme.spacing(1)}px`,
    pointerEvents: 'none',
  },
  text: {
    color: theme.palette.neutral.white,
  },
  email: {
    color: theme.palette.neutral.white,
    textDecoration: 'underline',
  },
  copyrightText: {
    color: theme.palette.neutral.white,
    textAlign: 'center',
  },
}));

const Mailto = ({
  email, subject = '', body = '', children,
}) => {
  let params = subject || body ? '?' : '';
  if (subject) params += `subject=${encodeURIComponent(subject)}`;
  if (body) params += `${subject ? '&' : ''}body=${encodeURIComponent(body)}`;

  return <a href={`mailto:${email}${params}`}>{children}</a>;
};

export default function FooterContactsPanel() {
  const classes = useStyles();

  return (
    <Grid container spacing={2} classes={{ root: classes.container }}>
      {/* https://github.com/mui-org/material-ui/issues/7466#issuecomment-509150645 */}
      {/* <Grid item xs={12} sm={4} classes={{ root: classes.itemContainer }}>
        <a href="https://medium.com/digital-transaction-limited" target='_blank' style={{marginRight: '0.2rem'}}>
          <img className={classes.image} src="/images/footer/medium.svg" alt="Medium" />
        </a>
        <a href="https://t.me/parallelchainofficial" target='_blank' style={{marginRight: '0.2rem'}}>
          <img className={classes.image} src="/images/footer/telegram.svg" alt="Telegram" />
        </a>
        <a href=" https://twitter.com/ParallelChainLB" target='_blank' style={{marginRight: '0.2rem'}}>
          <img className={classes.image} src="/images/footer/twitter.svg" alt="Twitter" />
        </a>
        <a href="https://www.youtube.com/c/DigitalTransaction" target='_blank' style={{marginRight: '0.2rem'}}>
          <img className={classes.image} src="/images/footer/youtube.svg" alt="Youtube" />
        </a>
        <a href="https://linkedin.com/company/digital-transaction-limited" target='_blank' style={{marginRight: '0.2rem'}}>
          <img className={classes.image} src="/images/footer/linkedin.svg" alt="Linkedin" />
        </a>
        <a href="https://www.reddit.com/r/XPLL/" target='_blank'>
          <img className={classes.image} src="/images/footer/reddit.svg" alt="Reddit" />
        </a>
      </Grid>
      <Grid item xs={12} sm={4} classes={{ root: classes.itemContainer }} style={{justifyContent: 'center'}}>
        <img className={classes.image} src="/images/footer/phone.svg" alt="Linkedin" />
        <Typography display="inline" variant="caption" classes={{ root: classes.text }}>
          (852) 2325 6667
        </Typography>
      </Grid>
      <Grid item xs={12} sm={4} classes={{ root: classes.itemContainer }} style={{justifyContent: 'flex-end'}}>
        <img className={classes.image} src="/images/footer/email.svg" alt="Linkedin" />
        <Mailto email="info@parallelchain.io">
          <Typography display="inline" variant="caption" classes={{ root: classes.email }}>
            info@parallelchain.io
          </Typography>
        </Mailto>
      </Grid> */}
      <Grid item xs={12}>
        <Typography display="block" variant="body1" classes={{ root: classes.copyrightText }}>
          Copyright © 2021 ParallelChain Lab. All rights reserved.
        </Typography>
      </Grid>
    </Grid>
  );
}

Mailto.propTypes = {
  children: PropTypes.node.isRequired,
  email: PropTypes.string.isRequired,
  subject: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
};
