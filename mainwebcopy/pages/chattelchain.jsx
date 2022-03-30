import { useEffect } from 'react';
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Head from 'next/head';
import { BackdropProvider } from 'use-backdrop';
import Layout from '../components/layout';
import ChattelChainLandingPanel from '../components/chattelchain/ChattelChainLandingPanel';
import AppShowcaseSmall from '../components/chattelchain/app-showcase/AppShowcaseSmall';
import AppShowcaseLarge from '../components/chattelchain/app-showcase/AppShowcaseLarge';
import ChattelChainAdvantagesPanel from '../components/chattelchain/ChattelChainAdvantagesPanel';
import { firebase as firebaseApp } from '../utils/firebase';
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

  const mdOrLarger = useMediaQuery(theme.breakpoints.up('md'));

  return (
    <BackdropProvider disableDarken zIndex={10}>
      <Layout
        background={theme.palette.neutral.white}
      >
        <Head>
          <title>ChattelChain | ParallelChain Lab</title>
          <meta
            name="description"
            content="ChattelChain is a fast asset tokenization platform that offers immediate settlement, insider fraud prevention and an unhackable wallet."
          />
        </Head>
        <ChattelChainLandingPanel />
        { mdOrLarger ? <AppShowcaseLarge /> : <AppShowcaseSmall /> }
        <ChattelChainAdvantagesPanel />
      </Layout>
    </BackdropProvider>
  );
}
