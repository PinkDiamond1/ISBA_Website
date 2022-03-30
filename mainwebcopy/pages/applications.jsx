import Head from 'next/head';
import { useEffect } from 'react';
import { useTheme } from '@material-ui/core/styles';
import Layout from '../components/layout';
import OurApplicationsPanel from '../components/home/EcosystemsAndSolutionsLandingPanel';
import { firebase as firebaseApp } from '../utils/firebase';
import 'firebase/analytics';
import EcosystemsAndSolutionsLandingPanel from '../components/ecosystems-and-solutions/EcosystemsAndSolutionsLandingPanel';

export default function OurApplications() {
  const theme = useTheme();
  useEffect(() => {
    try {
      firebaseApp.analytics().logEvent('page_view');
    } catch (err) {
      console.log(err);
    }
  }, []);

  return (
    <Layout
      background={theme.palette.neutral.white}
      hideOverflow
    >
      <Head>
        <title>Product Applications | ParallelChain Lab</title>
        <meta
          name="description"
          content="Build custom applications like AR/ VR, KYC, loyalty programs and smart cities on top of the ParallelChain™ blockchain."
        />
      </Head>
      <EcosystemsAndSolutionsLandingPanel />
      <OurApplicationsPanel />
    </Layout>
  );
}
