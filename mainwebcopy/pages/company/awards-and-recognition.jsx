import Head from 'next/head';
import { useTheme, makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Layout from '../../components/layout';
import Section from '../../components/Section';
import AnRPanel from '../../components/AnRPanel';
import WebpageLocator from '../../components/WebpageLocator';

const useStyles = makeStyles((theme) => ({
  titleContainer: {
    position: 'relative',
    paddingTop: `${theme.spacing(14)}px`,
    paddingBottom: `${theme.spacing(6)}px`,
  },
}));

export default function AwardsAndRecognition() {
  const theme = useTheme();

  const classes = useStyles();

  return (
    <Layout
      background={theme.palette.neutral.white}
    >
      <Head>
        <title>Awards and Recognition | ParallelChain Lab</title>
        <meta
          name="description"
          content=""
        />
      </Head>
      <Section
        spacingTop={6}
        spacingBottom={6}
      >
        <div className={classes.titleContainer}>
          <WebpageLocator />
          <Typography variant="h1">
            Awards and Recognition
          </Typography>
        </div>
        <AnRPanel />
      </Section>
    </Layout>
  );
}
