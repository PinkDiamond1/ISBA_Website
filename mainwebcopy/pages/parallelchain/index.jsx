import { useEffect } from 'react';
import Head from 'next/head';
import { useTheme } from '@material-ui/core/styles';
import { BackdropProvider } from 'use-backdrop';
import { firebase as firebaseApp } from '../../utils/firebase';
import 'firebase/analytics';
import Layout from '../../components/layout';
import ParallelChainLandingPanel from '../../components/parallelchain/ParallelChainLandingPanel';
import ParallelChainFeaturesPanel from '../../components/parallelchain/ParallelChainFeaturesPanel';
import ParallelChainTablePanel from '../../components/parallelchain/ParallelChainTablePanel';
import ParallelChainModesPanel from '../../components/parallelchain/ParallelChainModesPanel';
import ParallelChainInteroperabilityPanel from '../../components/parallelchain/ParallelChainInteroperabilityPanel';
import ParallelChainBannerPanel from '../../components/parallelchain/ParallelChainBannerPanel';

export default function ParallelChain() {
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
          <title>ParallelChain® | ParallelChain Lab</title>
          <meta
            name="description"
            content="ParallelChain® is the fastest, most scalable and the only GDPR-friendly blockchain available today with seamless migration with existing blockchains."
          />
        </Head>
        <ParallelChainLandingPanel />
        <ParallelChainBannerPanel />
        <ParallelChainFeaturesPanel />
        <ParallelChainTablePanel />
        <ParallelChainModesPanel />
        <ParallelChainInteroperabilityPanel />
      </Layout>
    </BackdropProvider>
  );
}
