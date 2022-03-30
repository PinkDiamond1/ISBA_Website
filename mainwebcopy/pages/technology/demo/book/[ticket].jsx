import PropTypes from 'prop-types';
import { useRouter } from 'next/router';
import DefaultErrorPage from 'next/error';
import Head from 'next/head';
import { BackdropProvider } from 'use-backdrop';
import { useTheme } from '@material-ui/core/styles';
import { CMS_URL } from '../../../../apiService/api';
import Layout from '../../../../components/layout';
import DemoBookLandingPanel from '../../../../components/parallelchain/demo/DemoBookLandingPanel';
import DemoBookBookingPanel from '../../../../components/parallelchain/demo/DemoBookBookingPanel';
import DemoIntroHowItWorksPanel from '../../../../components/parallelchain/demo/DemoIntroHowItWorksPanel';

export default function DemoBooking({ ticket, isApproved }) {
  const router = useRouter();

  const theme = useTheme();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  if (!isApproved) {
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
    <BackdropProvider>
      <Layout
        background={theme.palette.neutral.white}
      >
        <Head>
          <title>ParallelChain® Experience - book your time slot</title>
          <meta name="robots" content="noindex" />
        </Head>
        <DemoBookLandingPanel />
        <DemoBookBookingPanel ticket={ticket} />
        <DemoIntroHowItWorksPanel />
      </Layout>
    </BackdropProvider>
  );
}

DemoBooking.propTypes = {
  ticket: PropTypes.string.isRequired,
  isApproved: PropTypes.bool.isRequired,
};

export async function getStaticPaths() {
  const response = await fetch(`${CMS_URL}/parallel-chain-experience-applications?approved=true`);
  const approvedApps = await response.json();

  const paths = approvedApps.map((application) => ({
    params: {
      ticket: application._id,
    },
  }));

  return {
    paths,
    fallback: true,
  };
}

export async function getStaticProps({ params }) {
  const response = await fetch(`${CMS_URL}/parallel-chain-experience-applications?_id=${params.ticket}&approved=true`);
  const application = await response.json();

  const isApproved = application.length === 1;

  return {
    props: {
      ticket: params.ticket,
      isApproved,
      revalidate: 30,
    },
  };
}
