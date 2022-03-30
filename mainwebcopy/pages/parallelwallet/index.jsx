import { useEffect } from 'react';
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Head from 'next/head';
import { BackdropProvider } from 'use-backdrop';
import Layout from '../../components/layout';
import ParallelWalletLandingPanel from '../../components/parallelwallet/ParallelwalletLandingPanel';
import ParallelWalletButtonBar from '../../components/parallelwallet/ParallelwalletButtonBar';
import ParallelWalletPromotion from '../../components/parallelwallet/ParallelwalletPromotion';
import AppShowcaseSmall from '../../components/parallelwallet/app-showcase/AppShowcaseSmall';
import AppShowcaseLarge from '../../components/parallelwallet/app-showcase/AppShowcaseLarge';
import AppHorizontalLarge from '../../components/parallelwallet/app-showcase/AppHorizontalLarge';
import AppHorizontalSmall from '../../components/parallelwallet/app-showcase/AppHorizontalSmall';
import FeatureGrid from '../../components/parallelwallet/FeatureGrid';
import Footer from '../../components/parallelwallet/Footer';
import { firebase as firebaseApp } from '../../utils/firebase';
import 'firebase/analytics';

export default function ChattelChain() {
  useEffect(() => {
    try {
      firebaseApp.analytics().logEvent('page_view');
    } catch (err) {
      console.log(err);
    }
  }, []);

  const theme = useTheme();

  const smallOrLarge = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <BackdropProvider disableDarken zIndex={10}>
      <Layout
        background="#293636"
      >
        <Head>
          <title>ParallelWallet | ParallelChain Lab</title>
          <meta
            name="description"
            content="ParallelWallet | ParallelChain Lab"
          />
        </Head>
        <ParallelWalletLandingPanel />
        {smallOrLarge ? <AppHorizontalSmall /> : <AppHorizontalLarge />}
        <FeatureGrid />
        <Footer />

        {/* <ParallelWalletButtonBar /> */}
        {/* { mediumOrLarger ? <AppShowcaseLarge /> : <AppShowcaseSmall /> } */}
        {/* <ParallelWalletPromotion /> */}
      </Layout>
    </BackdropProvider>
  );
}
