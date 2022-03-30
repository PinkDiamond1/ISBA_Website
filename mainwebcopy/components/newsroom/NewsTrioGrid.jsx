import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import NewsCard from '../NewsCard';

export default function NewsTrioGrid({ baseUrl, articles }) {
  return (
    <>
      <Grid item xs={12}>
        <NewsCard
          variant="row"
          title={articles[0].title}
          pubdate={articles[0].pubdate}
          summary={articles[0].summary}
          url={`${baseUrl}${articles[0].url}`}
          headlinePicture={articles[0].headlinePicture}
        />
      </Grid>
      <Grid item xs={12} md={7}>
        <NewsCard
          title={articles[1].title}
          pubdate={articles[1].pubdate}
          summary={articles[1].summary}
          url={`${baseUrl}${articles[1].url}`}
          headlinePicture={articles[1].headlinePicture}
        />
      </Grid>
      <Grid item xs={12} md={5}>
        <NewsCard
          title={articles[2].title}
          pubdate={articles[2].pubdate}
          summary={articles[2].summary}
          url={`${baseUrl}${articles[2].url}`}
          headlinePicture={articles[2].headlinePicture}
        />
      </Grid>
    </>
  );
}

NewsTrioGrid.propTypes = {
  baseUrl: PropTypes.string.isRequired,
  articles: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    pubdate: PropTypes.string,
    summary: PropTypes.string,
    body: PropTypes.string,
    url: PropTypes.string,
    headlinePicture: PropTypes.shape({
      url: PropTypes.string,
      name: PropTypes.string,
    }),
  })).isRequired,
};
