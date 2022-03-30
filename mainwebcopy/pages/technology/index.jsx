import { useEffect } from 'react';
import Head from 'next/head';
import { useTheme } from '@material-ui/core/styles';
import { BackdropProvider } from 'use-backdrop';
import { firebase as firebaseApp } from '../../utils/firebase';
import 'firebase/analytics';
import Layout from '../../components/layout';
import TechnologyLandingPanel from '../../components/technology/TechnologyLandingPanel';
import ParallelChainModesPanel from '../../components/technology/ParallelChainModesPanel';
import TechnologyFeaturesPanel from '../../components/technology/TechnologyFeaturesPanel';
import TechnologyExplainedPanel from '../../components/technology/TechnologyExplainedPanel';
import TechnologyRoadmapPanel from '../../components/technology/TechnologyRoadmapPanel';
import TechnologyIntroPanel from '../../components/technology/TechnologyIntroPanel';
import TechnologyPatentInfo from '../../components/technology/TechnologyPatentInfo';

export default function Technology() {
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
          <title>Technology | ParallelChain Lab</title>
          <meta
            name="description"
            content="Technology about ParallelChain®, the fastest, most scalable and the only GDPR-friendly blockchain available today with seamless migration with existing blockchains."
          />
        </Head>
        <TechnologyLandingPanel />
        <TechnologyIntroPanel />
        <TechnologyFeaturesPanel />
        <TechnologyPatentInfo />
        <TechnologyExplainedPanel />
        <ParallelChainModesPanel />
        <TechnologyRoadmapPanel />
      </Layout>
    </BackdropProvider>
  );
}
