import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import NewsCard from '../NewsCard';
import Section from '../Section';
import NewsTrioGrid from './NewsTrioGrid';

export default function NewsGridPanel({ baseUrl, articles }) {
  return (
    <Section>
      <Grid container spacing={3}>
        <NewsTrioGrid
          baseUrl={baseUrl}
          articles={articles.slice(0, 3)}
        />
        { articles.slice(3).map((article) => (
          <Grid item xs={12} md={6}>
            <NewsCard
              title={article.title}
              pubdate={article.pubdate}
              summary={article.summary}
              headlinePicture={article.headlinePicture}
              url={`${baseUrl}${article.url}`}
            />
          </Grid>
        ))}
      </Grid>
    </Section>
  );
}

NewsGridPanel.propTypes = {
  baseUrl: PropTypes.string.isRequired,
  articles: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    pubdate: PropTypes.string,
    summary: PropTypes.string,
    body: PropTypes.string,
    url: PropTypes.string,
  })).isRequired,
};
