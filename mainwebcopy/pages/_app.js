/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/jsx-filename-extension */
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from '@material-ui/core/styles';
import Head from 'next/head';
import { theme } from 'dtl-react-components';
import { PWThemeProvider } from '../components/PWThemeContext';
import 'firebase/analytics';
import 'react-circular-progressbar/dist/styles.css';
import 'animate.css/animate.min.css';
import AppHelper from '../components/AppHelper';
import '../components/DTT/DTTTimelineNew.css';
import '../components/parallelchainF/TimelineSnake.css';

const extendTheme = {
  sizes: {
    topbar: {
      large: {
        top: '80px',
        scrolled: '80px',
        expanded: '300px',
      },
      small: {
        top: '80px',
        scrolled: '60px',
      },
    },
    content: {
      small: '640px',
      medium: '900px',
      large: '1200px',
      xlarge: '1200px',
    },
  },
};

theme.typography.h1 = { // Heading 1
  fontSize: 'clamp(50px,5vw,60px)',
  fontFamily: 'Poppins',
  fontStyle: 'normal',
  fontWeight: 700,
  lineHeight: '1.5',
};

theme.typography.h2 = { // Heading 2
  fontSize: 'clamp(28px,5vw,35px)',
  fontFamily: 'Poppins',
  fontStyle: 'normal',
  fontWeight: 600,
  lineHeight: '1.28',
};

theme.typography.h3 = { // Heading 3
  fontSize: 'clamp(20px,5vw,22px)',
  fontFamily: 'Poppins',
  fontStyle: 'normal',
  fontWeight: 500,
  lineHeight: '1.5',
};

theme.typography.h4 = { // Paragraph 1
  fontSize: 'clamp(18px,5vw,20px)',
  fontFamily: 'Poppins',
  fontStyle: 'normal',
  fontWeight: 400,
  lineHeight: '1.5',
};

theme.typography.h5 = { // Paragraph 2
  fontSize: 'clamp(16px,5vw,18px)',
  fontFamily: 'Poppins',
  fontStyle: 'normal',
  fontWeight: 400,
  lineHeight: '1.56',
};

theme.typography.h6 = { // Paragraph 3
  fontSize: 'clamp(14px,5vw,14px)',
  fontFamily: 'Poppins',
  fontStyle: 'normal',
  fontWeight: 400,
  lineHeight: '1.57',
};

theme.typography.body1 = { // Paragraph 4
  fontSize: 'clamp(12px,5vw,12px)',
  fontFamily: 'Poppins',
  fontStyle: 'normal',
  fontWeight: 400,
  lineHeight: '22px',
};

theme.typography.body2 = { // Paragraph 4
  fontSize: 'clamp(12px,5vw,12px)',
  fontFamily: 'Poppins',
  fontStyle: 'normal',
  fontWeight: 400,
  lineHeight: '22px',
};

theme.typography.caption = { // Text Labels
  fontSize: '1rem',
  fontFamily: 'Poppins',
  fontStyle: 'italic',
  fontWeight: 700,
};

export default function MyApp({ Component, pageProps }) {
  // Remove the server-side injected CSS.
  useEffect(() => {
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <>
      <Head>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
        <meta name="theme-color" content="#143160" />
        <meta name="msapplication-navbutton-color" content="#143160" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="#143160" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:ital@0;1&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Comfortaa:wght@300;400;500;700&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,300;0,500;0,700;1,500;1,700&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r121/three.min.js" />
      </Head>
      <ThemeProvider theme={theme}>
        <ThemeProvider theme={(genericTheme) => ({ ...genericTheme, ...extendTheme })}>
          <PWThemeProvider>
            <AppHelper>
              <Component {...pageProps} />
            </AppHelper>
          </PWThemeProvider>
        </ThemeProvider>
      </ThemeProvider>

      <style jsx global>
        {`
            * {
              padding: 0;
              margin: 0;
            }

            code {
              font-family: 'Poppins', monospace;
              font-size: 10pt;
            } 

            h1 {
              font-size: 60px;
              font-weight: 700;
            }

            h2 {
              font-size: 35px;
              font-weight: 600;
            }

            h3 {
              font-size: 22px;
              font-weight: 600;
            }

            h4 {
              font-size: 22px;
              font-weight: 400;
            }

            h5 {
              font-size: 18px;
              font-weight: 400;
            }

            h6 {
              font-size: 14px;
              font-weight: 400;
            }

            p {
              font-size: 12px;
              font-weight: 400;
            }

            a {
              text-decoration: none;
              font-size: 14px;
              line-height: 120%;
              font-weight: 600;
            }

            q {
              font-size: 30px;
              font-weight: 900;
            }

            * {
              box-sizing: border-box;
            }

            .push-top1 {
              margin-top: 8px !important;
            }

            .push-top2 {
              margin-top: 16px !important;
            }

            .push-top3 {
              margin-top: 24px !important;
            }

            .push-top6 {
              margin-top: 48px !important;
            }

            .push-bot1 {
              margin-bottom: 8px !important;
            }

            .push-bot2 {
              margin-bottom: 16px !important;
            }

            .push-bot3 {
              margin-bottom: 24px !important;
            }

            .push-bot4 {
              margin-bottom: 32px !important;
            }

            .push-bot5 {
              margin-bottom: 40px !important;
            }

            .push-bot6 {
              margin-bottom: 48px !important;
            }

            .push-left1 {
              margin-left: 8px !important;
            }

            .push-left2 {
              margin-left: 16px !important;
            }

            .push-right1 {
              margin-right: 8px !important;
            }

            .push-right2 {
              margin-right: 16px !important;
            }

            @keyframes fadeup {
              from {
                transform: translateY(40px);
              }
              to {
                transform: translateY(0px);
              }
            }

            @keyframes fadedown {
              from {
                transform: translateY(-40px)
              }

              to {
                transform: translateY(0px);
              }
            }

            @keyframes fadeleft {
              from {
                transform: translateX(40px);
              }

              to {
                transform: translateX(0px);
              }
            }

            @keyframes faderight {
              from {
                transform: translateX(-40px);
              }

              to {
                transform: translateX(0px);
              }
            }
          `}
      </style>
    </>
  );
}

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
// MyApp.getInitialProps = async (appContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);
//
//   return { ...appProps }
// }

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.objectOf(PropTypes.object).isRequired,
};
