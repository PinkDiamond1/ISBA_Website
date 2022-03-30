import { useEffect } from 'react';
import Head from 'next/head';
import { useTheme } from '@material-ui/core/styles';
import { BackdropProvider } from 'use-backdrop';
import { firebase as firebaseApp } from '../utils/firebase';
import 'firebase/analytics';
import Layout from '../components/layout';
import ReadPanel from '../components/reports-and-whitepapers/ReadPanel';
import RequestPanel from '../components/reports-and-whitepapers/RequestPanel';

export default function ReportsAndWhitepapers() {
  useEffect(() => {
    try {
      firebaseApp.analytics().logEvent('page_view');
    } catch (err) {
      console.error('Firebase initialization error raised', err.stack);
    }
  }, []);

  const theme = useTheme();

  return (
    <BackdropProvider disableDarken zIndex={10}>
      <Layout
        background={theme.palette.neutral.white}
        hideOverflow
      >
        <Head>
          <title>Reports and Whitepapers | ParallelChain Lab</title>
          <meta
            name="description"
            content=""
          />
        </Head>

        <ReadPanel />
        <RequestPanel />
      </Layout>
    </BackdropProvider>
  );
}
