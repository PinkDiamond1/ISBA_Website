import Head from 'next/head';
import { useTheme } from '@material-ui/core/styles';
import Layout from '../layout';

export default function RequestPanel() {
  const theme = useTheme();

  return (
    <Layout
      background={theme.palette.neutral.white}
    >
      <Head>
        <title>Reports and Whitepaper | ParallelChain Lab</title>
        <meta
          name="description"
          content=""
        />
      </Head>

    </Layout>
  );
}
