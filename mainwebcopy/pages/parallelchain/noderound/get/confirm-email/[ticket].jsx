import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Link from 'next/link';
import DefaultErrorPage from 'next/error';
import { useTheme, makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import CircularProgress from '@material-ui/core/CircularProgress';
import Button from '@material-ui/core/Button';
import { Overtitle } from 'dtl-react-components';
import Layout from '../../../../../components/layout';
import Section from '../../../../../components/Section';
import { WEBAPI_URL, CMS_URL } from '../../../../../apiService/api';

const useStyles = makeStyles({
  loadingContainer: {
    display: 'flex',
    alignItems: 'center',
  },
});

const Status = {
  IDLE: 0,
  LOADING: 1,
  SUCCESS: 2,
  FAILURE: 3,
};

export default function ConfirmEmailPage({ ticket, isValid }) {
  const router = useRouter();

  const [status, setStatus] = useState(Status.LOADING);

  const theme = useTheme();

  const classes = useStyles();

  // Only run if isValid
  useEffect(() => {
    if (isValid) {
      setStatus(Status.LOADING);
      fetch(`${WEBAPI_URL}/noderound/node-round/confirm-email/${ticket}`, {
        method: 'POST',
      })
        .then((res) => {
          if (!res.ok) setStatus(Status.FAILURE);
          setStatus(Status.SUCCESS);
        });
    }
  }, [isValid]);

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  if (!isValid) {
    return (
      <>
        <Head>
          <meta name="robots" content="noindex" />
        </Head>
        <DefaultErrorPage statusCode={404} />
      </>
    );
  }

  return (
    <Layout
      background={theme.palette.neutral.white}
    >
      <Head>
        <meta name="robots" content="noindex" />
        <title>Confirm your email address</title>
      </Head>
      <Section spacingTop={12}>
        <Overtitle>
          {`Ticket number: ${ticket}`}
        </Overtitle>
        <Typography variant="h5" classes={{ root: 'push-bot3' }}>
          Confirm your email address for the Node Round Registration
        </Typography>
        { status === Status.LOADING && (
        <div className={classes.loadingContainer}>
          <CircularProgress color="primary" classes={{ root: 'push-right2' }} />
          <Typography variant="subtitle1">
            Please wait...
          </Typography>
        </div>
        )}

        { status === Status.SUCCESS && (
        <div>
          <Typography variant="subtitle1">
            Your email address has been confirmed. A ParallelChain
            representative will contact you within 3 working
            days about your interest in the Node Round Registration.
          </Typography>
          <Link href="/parallelchain/mainnet">
            <a>
              <Button variant="contained" color="primary" classes={{ root: 'push-top2' }}>
                Return to Mainnet
              </Button>
            </a>
          </Link>
        </div>
        )}

        { status === Status.FAILURE && (
        <div>
          <Typography variant="h6">
            It&apos;s not you, it&apos;s us.
          </Typography>
          <Typography variant="subtitle1">
            Something went wrong when we tried to confirm your email
            address. We&apos;d apprecate it if you would inform us of
            the issue at info@parallelchain.io. We are sorry
            for the inconvenience
          </Typography>
          <Link href="/parallelchain/mainnet">
            <a>
              <Button variant="contained" color="primary" classes={{ root: 'push-top2' }}>
                Return to Mainnet
              </Button>
            </a>
          </Link>
        </div>
        )}
      </Section>
    </Layout>
  );
}

ConfirmEmailPage.propTypes = {
  ticket: PropTypes.string.isRequired,
  isValid: PropTypes.bool.isRequired,
};

export async function getStaticPaths() {
  const res = await fetch(`${CMS_URL}/node-round-registrations?isEmailVerified=false`);
  const nonVerifiedRequests = await res.json();

  const paths = nonVerifiedRequests.map((request) => ({
    params: {
      ticket: request._id,
    },
  }));

  return {
    paths,
    fallback: true,
  };
}

export async function getStaticProps({ params }) {
  const res = await fetch(`${CMS_URL}/node-round-registrations?_id=${params.ticket}&isEmailVerified=false`);
  const matched = await res.json();

  const isValid = matched.length === 1;

  return {
    props: {
      ticket: params.ticket,
      isValid,
      revalidate: 30,
    },
  };
}
