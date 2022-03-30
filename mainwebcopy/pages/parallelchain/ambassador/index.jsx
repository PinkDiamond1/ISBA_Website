import { useEffect } from 'react';
import Head from 'next/head';
import { useTheme, makeStyles } from '@material-ui/core/styles';
import { BackdropProvider } from 'use-backdrop';
import { firebase as firebaseApp } from '../../../utils/firebase';
import 'firebase/analytics';
import Header from '../../../components/ambassador/Header';
import FormContent from '../../../components/ambassador/FormContent';
import SocialStickyButtons from '../../../components/SocialStickyButtons';
import Layout from '../../../components/layout';

const useStyles = makeStyles((theme) => ({
  container: {
    background: 'linear-gradient(0deg, #000000 20%, #010033 100%)',
    overflowX: 'hidden',
  },
}));

const background = (url) => `url(${url}) center/cover`;

export default function Ambassdor() {
  useEffect(() => {
    try {
      firebaseApp.analytics().logEvent('page_view');
    } catch (err) {
      console.error('Firebase initialization error raised', err.stack);
    }
  }, []);

  const classes = useStyles();

  return (
    <BackdropProvider disableDarken zIndex={20}>
      <Layout
        background={`${background('/images/parallelchain/mainnet/ambassador_background.png')}`}
        hideOverflow
      >
        <Head>
          <title>ParallelChain® Ambassador | ParallelChain Lab</title>
          <meta
            name="description"
            content="ParallelChain® is the fastest, most scalable and the only GDPR-friendly blockchain available today with seamless migration with existing blockchains."
          />
        </Head>
        <Header />
        <FormContent />

      </Layout>
    </BackdropProvider>
  );
}
