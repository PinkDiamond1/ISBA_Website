import { useEffect } from 'react';
import Head from 'next/head';
import { useTheme } from '@material-ui/core/styles';
import Layout from '../components/layout';
import ApprovalChainLandingPanel from '../components/approvalchain/ApprovalChainLandingPanel';
import ApprovalChainAdvantagesPanel from '../components/approvalchain/ApprovalChainAdvantagesPanel';
import { firebase as firebaseApp } from '../utils/firebase';
import 'firebase/analytics';

export default function approvalChain() {
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
      currentLocation="approvalChain"
      hideOverflow
    >
      <Head>
        <title>ApprovalChain | ParallelChain Lab</title>
        <meta
          name="description"
          content="ApprovalChain is a modernized web+mobile platform designed to help companies enhance workflow transparency, supply chain management and provenance tracking."
        />
      </Head>
      <ApprovalChainLandingPanel />
      <ApprovalChainAdvantagesPanel />
    </Layout>
  );
}
