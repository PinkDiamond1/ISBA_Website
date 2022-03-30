import React from 'react';
import Carousel from 'react-material-ui-carousel';
import { Paper, Button } from '@material-ui/core';

export default function AppHorizontalSmall(props) {
  const items = [
    {
      name: 'Name #1',
      image: '/images/parallelwallet/mock/Home.png',
    },
    {
      name: 'Name #2',
      image: '/images/parallelwallet/mock/Onboarding.png',
    },
    {
      name: 'Name #3',
      image: '/images/parallelwallet/mock/Setup Account.png',
    },

  ];

  return (
    <div style={{ marginBottom: 10 }}>
      <Carousel
        autoPlay
        interval={4000}
        stopAutoPlayOnHover
        navButtonsAlwaysVisible
      >
        {
        items.map((item, i) => <Item key={i} item={item} />)
      }
      </Carousel>
    </div>
  );
}

function Item(props) {
  const { key, item } = props;
  return (
    <Paper style={{
      backgroundColor: 'transparent',
      display: 'flex',
      justifyContent: 'center',
      alignContent: 'center',
    }}
    >
      <img
        src={item.image}
        alt="iPhone frame"
        style={{
          height: '70vh',
        }}
        // className={classes.iphoneFrame}
      />
    </Paper>
  );
}
