import Head from 'next/head';
import { useTheme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Section from '../../../components/Section';
import Layout from '../../../components/layout';
import WebpageLocator from '../../../components/WebpageLocator';
import LeadershipPanelCardFlip from '../../../components/LeadershipPanelCardFlip';

export default function Leadership() {
  const theme = useTheme();

  return (
    <Layout
      background={theme.palette.neutral.white}
    >
      <Head>
        <title>Meet the Team | ParallelChain Lab</title>
        <meta
          name="description"
          content="The core team behind Digital Transaction consists of world-renowned technological innovators, multi-patented scientists and entrepreneurs."
        />
      </Head>
      <Section
        spacingTop={12}
      >
        <WebpageLocator />
        <Typography variant="h1">
          Our Team
        </Typography>
        <LeadershipPanelCardFlip baseUrl="/company/team/" />
      </Section>
    </Layout>
  );
}
