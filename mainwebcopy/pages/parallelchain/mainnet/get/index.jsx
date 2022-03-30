import { useEffect } from 'react';
import Head from 'next/head';
import { BackdropProvider } from 'use-backdrop';
import { useTheme } from '@material-ui/core/styles';
import { firebase as firebaseApp } from '../../../../utils/firebase';
import Layout from '../../../../components/layout';
import LandingPanel from '../../../../components/parallelchainF/get/LandingPanel';
import FormPanel from '../../../../components/parallelchainF/get/FormPanel';

export default function GetXPLLPage() {
  useEffect(() => {
    try {
      firebaseApp.analytics().logEvent('page_view');
    } catch (err) {}
  }, []);

  const theme = useTheme();

  return (
    <BackdropProvider>
      <Layout
        background={theme.palette.neutral.white}
      >
        <Head>
          <title>Register for Node Round | ParallelChain Lab</title>
        </Head>
        <LandingPanel />
        <FormPanel />
      </Layout>
    </BackdropProvider>
  );
}
