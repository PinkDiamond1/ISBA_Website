import PropTypes from 'prop-types';
import Head from 'next/head';
import { useTheme, makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import Layout from '../../../components/layout';
import OpeningsGridPanel from '../../../components/OpeningsGridPanel';
import Section from '../../../components/Section';
import { CMS_URL } from '../../../apiService/api';
import WebpageLocator from '../../../components/WebpageLocator';

const useStyles = makeStyles((theme) => ({
  titleContainer: {
    position: 'relative',
    paddingTop: `${theme.spacing(14)}px`,
    textAlign: 'left',
  },
  title: {
    marginBottom: `${theme.spacing(5)}px`,
  },
  subTitle: {
    color: 'black',
    fontWeight: '300',
  },
}));

export default function JoinUs({ openings }) {
  const theme = useTheme();
  const classes = useStyles();

  return (
    <Layout
      background={theme.palette.neutral.white}
    >
      <Head>
        <title>Join Our Team | ParallelChain Lab</title>
        <meta
          name="description"
          content="We are now hiring for positions of different experience levels. Don’t miss the opportunity to work for one of the fastest growing technology startups in Asia."
        />
      </Head>
      <div className={classes.titleContainer}>
        <Section>
          <WebpageLocator />
          <Typography variant="h1" className={classes.title}>
            Join Us!
          </Typography>
          <Typography variant="h3" display="block" className={classes.subTitle}>
            ParallelChain Lab is an equal opportunity employer. We value diversity
            and inclusion. We do not discriminate on the basis of race, religion, color, national
            origin, place of birth, gender, sexual preference, age, and marital status.
          </Typography>
        </Section>
      </div>
      <OpeningsGridPanel
        baseUrl="/company/join-us/"
        openings={openings}
      />
    </Layout>
  );
}

JoinUs.propTypes = {
  openings: PropTypes.arrayOf(PropTypes.shape({
    url: PropTypes.string,
    category: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    priority: PropTypes.number,
  })).isRequired,
};

export async function getStaticProps() {
  const response = await fetch(`${CMS_URL}/openings?_sort=priority:DESC`);
  const openings = await response.json();

  return {
    props: {
      openings,
    },
    revalidate: 30,
  };
}
