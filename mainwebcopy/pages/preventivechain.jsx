import { useEffect } from 'react';
import Head from 'next/head';
import { useTheme } from '@material-ui/core/styles';
import { BackdropProvider } from 'use-backdrop';
import MagicBox from '../components/MagicBox';
import FadeIn from '../components/FadeIn';
import Layout from '../components/layout';
import PreventiveChainLandingPanel from '../components/preventivechain/PreventiveChainLandingPanel';
import EnhancedSecurityPanel from '../components/preventivechain/EnhancedSecurityPanel';
import AntiSpoofingPanel from '../components/preventivechain/AntiSpoofingPanel';
// import DynamicWatermarksPanel from '../components/preventivechain/DynamicWatermarksPanel';
/* eslint-disable max-len */
// import StaysInPreventiveChainPanel from '../components/preventivechain/StaysInPreventiveChainPanel';
import PreventiveChainFunctionsPanel from '../components/preventivechain/PreventiveChainFunctionsPanel';
import { firebase as firebaseApp } from '../utils/firebase';
import 'firebase/analytics';

export default function PreventiveChain() {
  useEffect(() => {
    try {
      firebaseApp.analytics().logEvent('page_view');
    } catch (err) {
      console.log(err);
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
          <title>PreventiveChain | ParallelChain Lab</title>
          <meta
            name="description"
            content="PreventiveChain is a biometric security management system built to help companies monitor insider user behaviours and prevent improper use of data."
          />
        </Head>
        <PreventiveChainLandingPanel />
        <MagicBox
          render={(boxIn, boxRef) => (
            <FadeIn variant="left" in={boxIn} boxRef={boxRef}>
              <EnhancedSecurityPanel />
            </FadeIn>
          )}
        />
        <MagicBox
          render={(boxIn, boxRef) => (
            <FadeIn variant="right" in={boxIn} boxRef={boxRef}>
              <AntiSpoofingPanel />
            </FadeIn>
          )}
        />
        <PreventiveChainFunctionsPanel />
      </Layout>
    </BackdropProvider>
  );
}
