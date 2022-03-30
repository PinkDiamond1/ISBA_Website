import Head from 'next/head';
import PropTypes from 'prop-types';
import React, { useEffect } from 'react';
import { useTheme, makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Layout from '../../../components/layout';
import Section from '../../../components/Section';
import NewsGridPanel from '../../../components/newsroom/NewsGridPanel';
import { getArticles } from '../../../apiService/newsroom';
import { firebase as firebaseApp } from '../../../utils/firebase';
import 'firebase/analytics';
import NewsFeatured from '../../../components/newsroom/NewsFeatured';
import WebpageLocator from '../../../components/WebpageLocator';

const useStyles = makeStyles((theme) => ({
  titleContainer: {
    position: 'relative',
    marginTop: `${theme.spacing(5)}`,
  },
  newsText: {
    color: theme.palette.primary.dark,
  },
  featureLogo: {
    width: 250,
    height: 100,
    // marginTop: 16, height: '40vh', width: '75vw',
  },
  imageContainer: {
    display: 'flex',
    position: 'relative',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    width: '270px',
    height: '80px',
  },
  sourceImage: {
    transition: 'transform 300ms ease-out, opacity 300ms ease-out',
    marginBottom: `${theme.spacing(2)}px`,
    display: 'block',
    width: '200px',
    height: '90px',
    padding: 2,
    [theme.breakpoints.up('xs')]: {
      width: '120px',
      height: '70px',
    },
    [theme.breakpoints.up('sm')]: {
      width: '140px',
      height: '70px',
    },
    [theme.breakpoints.up('lg')]: {
      width: '175px',
      height: '80px',
    },
    [theme.breakpoints.down('xs')]: {
      width: '85px',
      height: '70px',
    },
    pointerEvents: 'none',
  },
  bitcoinist: {
    width: '300px',
    height: '45px',
    [theme.breakpoints.down('md')]: {
      width: '230px',
      height: '45px',
    },
    [theme.breakpoints.down('sm')]: {
      width: '150px',
      height: '40px',
    },
    [theme.breakpoints.down('xs')]: {
      width: '120px',
      height: '40px',
    },
  },
  vf: {
    paddingTop: 2,
    width: '90px',
    [theme.breakpoints.down('xs')]: {
      width: '60px',
      height: '50px',
    },
  },
  digfin: {
    paddingBottom: 14,
  },
}));

export default function NewsRoom({ articles }) {
  const theme = useTheme();

  const classes = useStyles();

  useEffect(() => {
    try {
      firebaseApp.analytics().logEvent('page_view');
    } catch (err) {
      console.log(err);
    }
  }, []);

  return (
    <Layout
      background={theme.palette.neutral.white}
    >
      <Head>
        <title>Newsroom | ParallelChain Lab</title>
        <meta
          name="description"
          content="View the latest news releases, announcements, product updates and media resources from Digital Transaction."
        />
      </Head>
      <Section
        spacingTop={10}
        spacingBottom={6}
      >
        <div className={classes.titleContainer}>
          <WebpageLocator />
          <Typography display="inline" variant="h1">
            Newsroom
            {' '}
          </Typography>
        </div>
        <NewsFeatured />
        <NewsGridPanel
          baseUrl="/company/newsroom/"
          articles={articles}
        />
      </Section>
    </Layout>
  );
}

NewsRoom.propTypes = {
  articles: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    pubdate: PropTypes.string,
    summary: PropTypes.string,
    body: PropTypes.string,
    url: PropTypes.string,
  })).isRequired,
};

export async function getStaticProps() {
  const articles = await getArticles();

  return {
    props: {
      articles,
    },
    revalidate: 30,
  };
}
