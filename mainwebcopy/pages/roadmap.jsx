import Head from 'next/head';
import { makeStyles } from '@material-ui/core/styles';
import { useEffect, useState } from 'react';
import FutureRoadmapPanel from '../components/home/RoadmapPanel';
import SocialStickyButtons from '../components/SocialStickyButtons';
import Layout from '../components/layout';

const useStyles = makeStyles((theme) => ({
  container: {
    position: 'relative',
    paddingTop: `${theme.spacing(14)}px`,
    textAlign: 'center',
  },
}));

export default function Roadmap() {
  const classes = useStyles();
  const [colorState, setColorState] = useState('gradient');
  useEffect(() => {
    console.log(colorState);
  }, [colorState]);

  return (
    <Layout
      background={colorState === 'gradient' ? 'linear-gradient(0deg, #010033 20%, #000000 100%)' : 'white'}
    >
      <Head>
        <title>Roadmap | ParallelChain Lab</title>
        <meta
          name="description"
          content="One blockchain to <b>rule them all</b>"
        />
      </Head>
      <SocialStickyButtons />
      <div className={classes.container}>
        <FutureRoadmapPanel colorState={colorState} setColorState={setColorState} />
      </div>
    </Layout>
  );
}
