/* eslint-disable react/no-danger */
import PropTypes from 'prop-types';
import showdown from 'showdown';
import DOMPurify from 'isomorphic-dompurify';
import { useRouter } from 'next/router';
import DefaultErrorPage from 'next/error';
import Head from 'next/head';
import { useTheme, makeStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import { getArticles } from '../../../apiService/newsroom';
import Layout from '../../../components/layout';
import ArticleContent from '../../../components/ArticleContent';
import SmallDateLabel from '../../../components/SmallDateLabel';
import WebpageLocator from '../../../components/WebpageLocator';

function socialWindow(url) {
  const left = 0;
  const top = 0;
  const params = `menubar=no,toolbar=no,status=no,width=570,height=570,top=${top},left=${left}`;
  window.open(url, 'NewWindow', params);
}

function facebookShare(pageUrl) {
  const url = `https://www.facebook.com/sharer.php?u=${pageUrl}`;
  socialWindow(url);
}

function twitterShare(pageUrl) {
  const url = `https://twitter.com/intent/tweet?url=${pageUrl}`;
  socialWindow(url);
}

function linkedinShare(pageUrl) {
  const url = `https://www.linkedin.com/shareArticle?mini=true&url=${pageUrl}`;
  socialWindow(url);
}

const useStyles = makeStyles((theme) => ({
  subContainer: {
    paddingTop: `${theme.spacing(7)}px`,
    paddingBottom: `${theme.spacing(5)}px`,
  },
  titleText: {
    marginTop: `${theme.spacing(2)}px`,
    marginBottom: `${theme.spacing(1)}px`,
  },
  newsroomText: {
    marginBottom: `${theme.spacing(3)}px`,
    color: '#000',
  },
  summaryText: {
    marginBottom: `${theme.spacing(1)}px`,
    color: 'black',
  },
  divider: {
    marginTop: `${theme.spacing(2)}px`,
    marginBottom: `${theme.spacing(2)}px`,
  },
  body: {
    color: '#000',
    lineHeight: 2.0,
    '& img': {
      display: 'block',
      maxWidth: '100%',
      margin: `${theme.spacing(5)}px auto`,
    },
  },
  facebook: {
    color: '#000', // '#3B5998',
  },
  twitter: {
    color: '#000', // '#0096ff',
  },
  linkedin: {
    color: '#000', // '#0e76a8',
  },
}));

export default function NewsArticle({ article }) {
  const theme = useTheme();
  const classes = useStyles();
  const router = useRouter();
  const innerCss = `
    strong {
      color: #027D6F;
    }
  `;

  if (router.isFallback) {
    return (
      <Layout
        background={theme.palette.neutral.white}
      >
        <ArticleContent>
          Loading...
        </ArticleContent>
      </Layout>
    );
  }

  if (!article) {
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
          { article.title }
          {' '}
          | Digital Transaction
        </title>
        <meta
          name="description"
          content={article.summary}
        />
      </Head>
      <ArticleContent
        spacingTop={12}
        subContainerClassName={classes.subContainer}
      >
        <WebpageLocator />
        <SmallDateLabel date={article.pubdate} />
        <Typography variant="h1" className={classes.titleText}>
          { article.title }
        </Typography>
        <Typography variant="h6" classes={{ root: classes.summaryText }}>
          { article.summary }
        </Typography>
        <IconButton
          onClick={() => facebookShare(window.location)}
          aria-label="facebook"
          className={classes.facebook}
        >
          <FacebookIcon fontSize="large" />
        </IconButton>
        <IconButton
          onClick={() => twitterShare(window.location)}
          aria-label="twitter"
          className={classes.twitter}
        >
          <TwitterIcon fontSize="large" />
        </IconButton>
        <IconButton
          onClick={() => linkedinShare(window.location)}
          aria-label="linkedin"
          className={classes.linkedin}
        >
          <LinkedInIcon fontSize="large" />
        </IconButton>
        <Divider classes={{ root: classes.divider }} />
        <Typography variant="h6" classes={{ root: classes.body }}>
          <div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(article.body) }} />
          <style>
            {innerCss}
          </style>
        </Typography>
      </ArticleContent>
    </Layout>
  );
}

NewsArticle.propTypes = {
  article: PropTypes.shape({
    title: PropTypes.string,
    pubdate: PropTypes.string,
    summary: PropTypes.string,
    body: PropTypes.string,
    url: PropTypes.string,
  }).isRequired,
};

export async function getStaticPaths() {
  const articles = await getArticles();

  const paths = articles.map((article) => (
    { params: { articleId: article.url } }
  ));

  return {
    paths,
    fallback: true,
  };
}

export async function getStaticProps({ params }) {
  const converter = new showdown.Converter();
  const res = await fetch(`https://cms.parallelchain.io/articles/?url=${params.articleId}&_limit=1`);
  const article = (await res.json())[0];

  if (!article) {
    return {
      props: {
        article: null,
      },
    };
  }
  article.body = converter.makeHtml(article.body);
  return {
    props: {
      article,
    },
  };
}
