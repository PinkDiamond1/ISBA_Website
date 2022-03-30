import { useEffect } from 'react';
import Head from 'next/head';
import { BackdropProvider } from 'use-backdrop';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import Layout from '../components/layout';
import LandingPanel from '../components/index/LandingPanel';
import TwoChainsPanel from '../components/index/TwoChainsPanel';
import InteroperabilityPanel from '../components/index/InteroperabilityPanel';
import { firebase } from '../utils/firebase';
import MagicBox from '../components/MagicBox';
import FadeIn from '../components/FadeIn';
import QuotesFromExpertPanelNew from '../components/home/QuotesFromExpertPanelNew';
import HomeTeamPanel from '../components/home/HomeTeamPanel';
import HomeMainnetUseCases from '../components/home/HomeMainnetUseCases';
import HomePrivateUseCases from '../components/home/HomePrivateUseCases';
import InteroperabiltyPanelSmall from '../components/index/InteroperabilityPanelSmall';
import HomeMainnetUseCasesSmall from '../components/home/HomeMainnetUseCasesSmall';

const background = (url) => `url(${url}) center/cover`;

export default function Index() {
  useEffect(() => {
    firebase.analytics().logEvent('page_view');
  }, []);
  const theme = useTheme();
  const smOrSmaller = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <BackdropProvider disableDarken zIndex={10}>
      <Layout
        background={`${background('/images/index/landing_bg.svg')}`}
        hideOverflow
      >
        <Head>
          <title>ParallelChain Lab</title>
          <meta
            name="description"
            content="ParallelChain Lab is leading the distributed ledger and AI technology movement with unmatched blockchain products to unlock enterprises’ digital transformation initiatives."
          />
          <meta name="keywords" content="Blockchain, High-Performance, AI Technology, Biometrics, Secure, Private" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <meta property="og:title" content="Breakthrough All-in-One Blockchain - ParallelChain Lab" />
          <meta property="og:url" content="https://parallelchain.io" />
        </Head>
        <LandingPanel />
        <MagicBox
          render={(boxIn, boxRef) => (
            <FadeIn variant="up" in={boxIn} boxRef={boxRef}>
              <TwoChainsPanel />
            </FadeIn>
          )}
        />
        <MagicBox
          render={(boxIn, boxRef) => (
            <FadeIn variant="up" in={boxIn} boxRef={boxRef} delay="500ms">
              {smOrSmaller ? <InteroperabiltyPanelSmall /> : <InteroperabilityPanel />}
            </FadeIn>
          )}
        />
        <MagicBox
          render={(boxIn, boxRef) => (
            <FadeIn variant="up" in={boxIn} boxRef={boxRef} delay="500ms">
              {smOrSmaller ? <HomeMainnetUseCasesSmall /> : <HomeMainnetUseCases />}
            </FadeIn>
          )}
        />
        <MagicBox
          render={(boxIn, boxRef) => (
            <FadeIn variant="up" in={boxIn} boxRef={boxRef} delay="500ms">
              <HomePrivateUseCases />
            </FadeIn>
          )}
        />
        <QuotesFromExpertPanelNew />
        <HomeTeamPanel />
      </Layout>
    </BackdropProvider>
  );
}
