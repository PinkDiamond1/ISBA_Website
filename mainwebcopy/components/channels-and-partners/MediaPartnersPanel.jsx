/* eslint-disable max-len */
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Section from '../Section';

const useStyles = makeStyles((theme) => ({
  titleText: {
    marginBottom: `${theme.spacing(2)}px`,
    color: '#027D6F',
    fontWeight: 400,
  },
  image: {
    display: 'block',
    float: 'centre',
    margin: '10px auto 10px auto',
    maxHeight: '200px',
    maxWidth: '500px',
    pointerEvents: 'none',
    [theme.breakpoints.down('xs')]: {
      maxWidth: '300px',
    },
  },
  paragraph: {
    fontWeight: 300,
    marginTop: `${theme.spacing(0.5)}px`,
  },
}));

export default function MediaPartnersPanel() {
  const classes = useStyles();

  return (
    <Section spacingBottom={15}>
      <Typography variant="h2" className={classes.titleText}>
        Media & Marketing Partners
      </Typography>
      <Grid container spacing={6}>

        <Grid item xs={12} md={6}>
          <img src="/images/channels-and-partners/coin-codex.png" alt="Avalon Wealth Club" className={classes.image} />

          <Typography variant="body2" className={classes.paragraph}>
            CoinCodex is an aggregator and the largest tracking tool for cryptocurrency market information. They provide real-time
            price data tracking as well as watchlist and portfolio features to help users stay up-to-date on important cryptocurrency and blockchain developments.
          </Typography>
        </Grid>

        <Grid item xs={12} md={6}>
          <img src="/images/channels-and-partners/asia-token-fund.png" alt="Asia Token Fund" className={classes.image} />

          <Typography variant="body2" className={classes.paragraph}>
            Asia Token Fund provides the latest updates on news, market analysis, ratings,
            and insights on the global blockchain landscape and cryptocurrency. They
            are the media and news arm of the ATF platform, a global platform
            and ecosystem that aims to drive mass adoption of digital currencies
            for new-to-market users.
          </Typography>
        </Grid>

        <Grid item xs={12} md={6}>
          <img src="/images/channels-and-partners/avalon-wealth-club.png" alt="Avalon Wealth Club" className={classes.image} />

          <Typography variant="body2" className={classes.paragraph}>
            Avalon Wealth Club is a dynamic group of marketing experts and blockchain veterans who are constantly on the lookout
            for the most innovative and promising projects in the crypto space. They are keen to assist projects by
            providing the funds, experience and expertise needed to take them to the next level.
          </Typography>
        </Grid>

        <Grid item xs={12} md={6}>
          <img src="/images/channels-and-partners/bitcourier.png" alt="BitCourier" className={classes.image} />

          <Typography variant="body2" className={classes.paragraph}>
            Founded in 2020, BitCourier is the first UK-focused crypto community and media website.
            It covers a wide range of news on blockchain technology adoption, crypto-asset
            regulations and emerging financial technology trends across the United
            Kingdom and globally. BitCourier also publishes beginner guides and
            product reviews that help newcomers navigate the cryptocurrency market.
          </Typography>
        </Grid>

        <Grid item xs={12} md={6}>
          <img src="/images/channels-and-partners/block-tides.png" alt="Block Tides" className={classes.image} />

          <Typography variant="body2" className={classes.paragraph}>
            Block Tides is an event services and marketing agency based in Manila, Philippines.
            Since 2015, they provide a host of services including blockchain advisory, digital, outsourcing,
            social media and business management to companies based in Asia Pacific, including China, Japan, Singapore and Malaysia.
          </Typography>
        </Grid>

        <Grid item xs={12} md={6}>
          <img src="/images/channels-and-partners/coinpedia.png" alt="CoinPedia" className={classes.image} />

          <Typography variant="body2" className={classes.paragraph}>
            CoinPedia is a leading independent digital media resource based in
            Los Angeles covering a wide range of news on blockchain technology,
            crypto assets and emerging FinTech trends. As a non-funded organization,
            CoinPedia's primary focus is to provide its readers with the latest,
            unbiased and carefully researched cryptocurrency news stories with a compelling narrative,
            increasing their readers' understanding of the centralized and decentralized web,
            and above all, help them make better decisions.
          </Typography>
        </Grid>

        <Grid item xs={12} md={6}>
          <img src="/images/channels-and-partners/cryptoknowmics1.png" alt="Cryptoknowmics" className={classes.image} />

          <Typography variant="body2" className={classes.paragraph}>
            Cryptoknowmics, based in Mont Buxton in Seychelles, is a media portal that closely follows every aspect of the
            cryptocurrency and blockchain markets. Apart from real-time crypto news, Cryptoknowmics feature airdrops, events, ICOs,
            CEOs, STOs, market fundamentals, tokens, coins, cryptocurrency exchange platforms and wallets.
          </Typography>
        </Grid>

        <Grid item xs={12} md={6}>
          <img src="/images/channels-and-partners/cryptoticker.png" alt="Cryptoticker" className={classes.image} />

          <Typography variant="body2" className={classes.paragraph}>
            CryptoTicker is a Berlin-based cryptocurrency, blockchain and tech news platform comprised of
            an international team of experts dedicated to sharing their knowledge with the community.
            Their aim is to create an educated and informed decentralized world by delivering news,
            expert opinions, interviews, documentaries and announcements from all corners of the world.
          </Typography>
        </Grid>

        <Grid item xs={12} md={6}>
          <img src="/images/channels-and-partners/e-crypto-news.png" alt="E-Crypto-News" className={classes.image} />

          <Typography variant="body2" className={classes.paragraph}>
            E-Crypto News is a US-headquartered online publication developed to assist all cryptocurrency
            investors in developing profitable cryptocurrency portfolios through the provision of timely and
            much-needed information. They provide the latest articles on technology which may affect market
            currents and cryptocurrency prices.
          </Typography>
        </Grid>

        <Grid item xs={12} md={6}>
          <img src="/images/channels-and-partners/Jumpstart.png" alt="Jumpstart" className={classes.image} />

          <Typography variant="body2" className={classes.paragraph}>
            Jumpstart Media is a platform that connects and supports Asia's entrepreneurial ecosystem
            through content, non-profit initiatives and corporate partnerships. Its print magazine
            <i> Jumpstart </i> is the largest English print publication in Asia Pacific that covers innovation and
            technology in the startup ecosystem, with circulation in over 39 cities across 11 countries.
          </Typography>
        </Grid>

        <Grid item xs={12} md={6}>
          <img src="/images/channels-and-partners/visionary-financial.png" alt="Visionary Financial" className={classes.image} />

          <Typography variant="body2" className={classes.paragraph}>
            Visionary Financial (VF) is an independent media and news organisation that started operations in late 2018.
            Aside from global news and PR coverage, VF focuses on industry research and analysis.
            They operate on social journalism, meaning they thrive on community involvement and contribution from companies in the digital asset space.
          </Typography>
        </Grid>

        <Grid item xs={12} md={6}>
          <img src="/images/channels-and-partners/avacapital.png" alt="Visionary Financial" className={classes.image} />

          <Typography variant="body2" className={classes.paragraph}>

            AVA Capital is a blockchain investment fund that provides capital raising, strategic management,
            and community building supports for promising blockchain projects since 2018.
            It is the incubator of "Moon Invest" platform and is known as one of the pioneering units to support projects from the first stages of development.

          </Typography>
        </Grid>
      </Grid>
    </Section>
  );
}
