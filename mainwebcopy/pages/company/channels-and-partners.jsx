import Head from 'next/head';
import { useEffect } from 'react';
import { useTheme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import InternationalPartnersPanel from '../../components/channels-and-partners/InternationalPartnersPanel';
import MediaPartnersPanel from '../../components/channels-and-partners/MediaPartnersPanel';
import { firebase as firebaseApp } from '../../utils/firebase';
import 'firebase/analytics';
import WebpageLocator from '../../components/WebpageLocator';
import BlockAnchor from '../../components/BlockAnchor';
import Layout from '../../components/layout';
import Section from '../../components/Section';

export default function ChannelsAndPartners() {
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
      spacingTop={12}
      background={theme.palette.neutral.white}
    >
      <Head>
        <title>Global Partner Network | ParallelChain Lab</title>
        <meta
          name="description"
          content="Digital Transaction is growing a vibrant global network of consulting companies and niche partners who are driving industry adoption of blockchain technology."
        />
      </Head>
      <Section spacingTop={6}>
        <WebpageLocator />
        <Typography variant="h1">
          Channels & Partners
        </Typography>
      </Section>
      <BlockAnchor name="international-partners">
        <InternationalPartnersPanel />
      </BlockAnchor>
      <BlockAnchor name="media-partners">
        <MediaPartnersPanel />
      </BlockAnchor>
    </Layout>
  );
}
