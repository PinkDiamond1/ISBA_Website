import Head from 'next/head';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Layout from '../components/layout';
import OurEcosystemPage from '../components/OurEcosystemPage';

const useStyles = makeStyles((theme) => ({
  container: {
    position: 'relative',
    paddingTop: `${theme.spacing(14)}px`,
    textAlign: 'center',
  },
}));

export default function OurProducts() {
  const theme = useTheme();
  const classes = useStyles();

  return (
    <Layout
      backgroundColor={theme.palette.future.dark}
    >
      <Head>
        <title>Ecosystem | ParallelChain Lab</title>
        <meta
          name="description"
          content="One blockchain to <b>rule them all</b>"
        />
      </Head>
      <div className={classes.container}>
        <OurEcosystemPage />
      </div>
    </Layout>
  );
}
