import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import OpeningsCard from './OpeningsCard';
import Section from './Section';

export default function OpeningsGridPanel({ baseUrl, openings }) {
  return (
    <Section spacingBottom={15}>
      <Grid container spacing={3}>
        { openings.map((opening) => (
          <Grid item xs={12} sm={6} md={4}>
            <OpeningsCard
              title={opening.title}
              category={opening.category}
              url={`${baseUrl}${opening.url}`}
            />
          </Grid>
        ))}
      </Grid>
    </Section>
  );
}

OpeningsGridPanel.propTypes = {
  baseUrl: PropTypes.string.isRequired,
  openings: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    pubdate: PropTypes.string,
    summary: PropTypes.string,
    body: PropTypes.string,
    url: PropTypes.string,
    priority: PropTypes.number,
  })).isRequired,
};
