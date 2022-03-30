import { useEffect } from 'react';
import { useTheme } from '@material-ui/core/styles';
import Head from 'next/head';
import Layout from '../components/layout';
import EkycChainLandingPanel from '../components/ekycchain/eKYCChainLandingPanel';
import EKYCChainDescriptionPanel from '../components/ekycchain/EKYCChainDescriptionPanel';
import EkycChainAdvantagesPanel from '../components/ekycchain/eKYCChainAdvantagesPanel';
import { firebase as firebaseApp } from '../utils/firebase';
import 'firebase/analytics';
import MagicBox from '../components/MagicBox';
import FadeIn from '../components/FadeIn';

export default function ekycChain() {
  useEffect(() => {
    try {
      firebaseApp.analytics().logEvent('page_view');
    } catch (err) {
      console.log(err);
    }
  }, []);

  const theme = useTheme();

  return (

    <Layout
      background={theme.palette.neutral.white}
      hideOverflow
    >
      <Head>
        <title>eKYC-Chain | ParallelChain Lab</title>
      </Head>
      <EkycChainLandingPanel />
      <MagicBox
        render={(boxIn, boxRef) => (
          <FadeIn variant="left" in={boxIn} boxRef={boxRef}>
            <EKYCChainDescriptionPanel />
          </FadeIn>
        )}
      />
      <MagicBox
        render={(boxIn, boxRef) => (
          <FadeIn variant="right" in={boxIn} boxRef={boxRef}>
            <EkycChainAdvantagesPanel />
          </FadeIn>
        )}
      />

    </Layout>
  );
}
