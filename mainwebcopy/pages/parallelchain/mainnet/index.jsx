import { useEffect } from 'react';
import Head from 'next/head';
import { BackdropProvider } from 'use-backdrop';
import { firebase as firebaseApp } from '../../../utils/firebase';
import 'firebase/analytics';
import ParallelChainFLandingPanel from '../../../components/parallelchainF/ParallelChainFLandingPanel';
import ParallelChainFIntroPanel from '../../../components/parallelchainF/ParallelChainFIntroPanel';
import ParallelChainFGovernancePanel from '../../../components/parallelchainF/ParallelChainFGovernancePanel';
import ParallelChainFAmbassador from '../../../components/parallelchainF/ParallelChainFAmbassador';
import ParallelChainFFeatures from '../../../components/parallelchainF/ParallelChainFFeatures';
import DTTFaqsPanel from '../../../components/DTT/DTTFaqsPanel';
import SocialStickyButtons from '../../../components/SocialStickyButtons';
import Layout from '../../../components/layout';
import MainnetLogosPanel from '../../../components/parallelchainF/MainnetLogosPanel';

export default function ParallelChainS() {
  useEffect(() => {
    try {
      firebaseApp.analytics().logEvent('page_view');
    } catch (err) {
      console.error('Firebase initialization error raised', err.stack);
    }
  }, []);

  return (
    <BackdropProvider disableDarken zIndex={10}>
      <Layout
        background="linear-gradient(0deg, #010033 20%, #000000 100%)"
        hideOverflow
      >
        <Head>
          <title>ParallelChain® Mainnet | ParallelChain Lab</title>
          <meta
            name="description"
            content="ParallelChain® is the fastest, most scalable and the only GDPR-friendly blockchain available today with seamless migration with existing blockchains."
          />
        </Head>
        <SocialStickyButtons />
        <ParallelChainFLandingPanel />
        <ParallelChainFIntroPanel />
        <ParallelChainFAmbassador />
        <ParallelChainFGovernancePanel />
        <ParallelChainFFeatures />
        <MainnetLogosPanel />
        <DTTFaqsPanel bright />
      </Layout>
    </BackdropProvider>
  );
}
