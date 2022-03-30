/* eslint-disable react/jsx-curly-brace-presence */
/* eslint-disable react/no-danger */
import showdown from 'showdown';
import { useRouter } from 'next/router';
import Head from 'next/head';
import DefaultErrorPage from 'next/error';
import PropTypes from 'prop-types';
import { useTheme, makeStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import DOMPurify from 'isomorphic-dompurify';
import Layout from '../../../components/layout';
import Section from '../../../components/Section';
import { CMS_URL } from '../../../apiService/api';

const useStyles = makeStyles((theme) => ({
  subContainer: {
    paddingTop: `${theme.spacing(7)}px`,
    paddingBottom: `${theme.spacing(5)}px`,
  },
  titleText: {
    marginBottom: `${theme.spacing(3)}px`,
  },
  divider: {
    marginTop: `${theme.spacing(3)}px`,
    marginBottom: `${theme.spacing(4)}px`,
  },
  description: {
    '& img': {
      display: 'block',
      maxWidth: '100%',
      margin: `${theme.spacing(5)}px auto`,
    },
  },
}));

export default function NewsOpening({ opening }) {
  const theme = useTheme();
  const classes = useStyles();
  const router = useRouter();

  if (router.isFallback) {
    return (
      <Layout
        background={theme.palette.neutral.white}
      >
        <Section>
          Loading...
        </Section>
      </Layout>
    );
  }

  if (!opening) {
    return (
      <>
        <Head>
          <meta name="robots" content="noindex" />
        </Head>
        <DefaultErrorPage statusCode={404} />
      </>
    );
  }

  return (
    <Layout
      background={theme.palette.neutral.white}
    >

      <Head>
        <title>
          { opening.title }
          {' '}
          | Join Our Team
        </title>
        <meta
          name="description"
          content={opening.summary}
        />
      </Head>
      <Section
        spacingTop={12}
        subContainerClassName={classes.subContainer}
      >
        <Typography variant="h3" className={classes.titleText}>
          { opening.title }
        </Typography>
        <Divider classes={{ root: classes.divider }} />
        <Typography variant="body1" classes={{ root: classes.description }}>
          <div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(opening.description) }} />
        </Typography>
      </Section>
    </Layout>
  );
}

NewsOpening.propTypes = {
  opening: PropTypes.shape({
    url: PropTypes.string,
    category: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
  }).isRequired,
};

export async function getStaticPaths() {
  const response = await fetch(`${CMS_URL}/openings`);
  const openings = JSON.parse(JSON.stringify(await response.json()));

  const paths = openings.map((opening) => ({
    params: {
      openingId: opening.url,
    },
  }));

  return {
    paths,
    fallback: true,
  };
}

export async function getStaticProps({ params }) {
  const converter = new showdown.Converter();
  const response = await fetch(`${CMS_URL}/openings?url=${params.openingId}`);
  const opening = (await response.json())[0];

  if (!opening) {
    return {
      props: {
        opening: null,
      },
    };
  }
  opening.description = converter.makeHtml(opening.description);
  return {
    props: {
      opening,
    },
  };
}
