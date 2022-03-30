import { useEffect } from 'react';
import Head from 'next/head';
import { useTheme } from '@material-ui/core/styles';
import { BackdropProvider } from 'use-backdrop';
import { firebase as firebaseApp } from '../../../utils/firebase';
import 'firebase/analytics';
import Layout from '../../../components/layout';
import ParallelChainSLandingPanel from '../../../components/parallelchainS/ParallelChainSLandingPanel';
import ParallelChainSApplicationsPanel from '../../../components/parallelchainS/ParallelChainSApplicationsPanel';
import ParallelChainSTablePanel from '../../../components/parallelchainS/ParallelChainSTablePanel';
import ParallelChainInteroperabilityPanel from '../../../components/parallelchainS/ParallelChainInteroperabilityPanel';
import ParallelChainSEcosystemPanel from '../../../components/parallelchainS/ParallelChainSEcosystemPanel';
import ParallelChainSBannerPanel from '../../../components/parallelchainS/ParallelChainSBannerPanel';
import OurApplicationsPanel from '../../../components/home/EcosystemsAndSolutionsLandingPanel';

export default function ParallelChainS() {
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
          <title>ParallelChain® Enterprise | ParallelChain Lab</title>
          <meta
            name="description"
            content="ParallelChain® is the fastest, most scalable and the only GDPR-friendly blockchain available today with seamless migration with existing blockchains."
          />
        </Head>
        <ParallelChainSLandingPanel />
        <ParallelChainSTablePanel />
        <ParallelChainSEcosystemPanel />
        <ParallelChainSApplicationsPanel />
        <OurApplicationsPanel />
        <ParallelChainInteroperabilityPanel />
        <ParallelChainSBannerPanel />
      </Layout>
    </BackdropProvider>
  );
}
