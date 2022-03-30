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

export default function InternationalPartnersPanel() {
  const classes = useStyles();

  return (
    <Section>
      <Typography variant="h2" className={classes.titleText}>
        Business Partners
      </Typography>
      <Grid container spacing={6}>

        <Grid item xs={12} md={6}>
          <img src="/images/channels-and-partners/ibm.png" alt="IBM" className={classes.image} />

          <Typography variant="body2" className={classes.paragraph}>
            As a certified business partner of IBM, Digital Transaction is now able to provide IBM customers
            access to its high-performing ParallelChain® blockchain technology, accelerating their digital growth
            and up-armoring their robust industry solutions in Artificial Intelligence (AI), cloud computing,
            cybersecurity and digital transformation.
          </Typography>
        </Grid>

        <Grid item xs={12} md={6}>
          <img src="/images/channels-and-partners/digital-china.png" alt="Digital China" className={classes.image} />

          <Typography variant="body2" className={classes.paragraph}>
            Digital China is a leading provider of cloud services and digital solutions for enterprises in China.
            This partnership sees the integration and deployment of Digital Transaction's high-performance blockchain
            technology into Digital China's robust IT solutions to accelerate China's digital transformation framework.
          </Typography>
        </Grid>

        <Grid item xs={12} md={6}>
          <img src="/images/channels-and-partners/aws.png" alt="Digital China" className={classes.image} />

          <Typography variant="body2" className={classes.paragraph}>
            Amazon Web Services (AWS) is a top cloud service provider with millions of customers across all industries.
            As a certified ISV partner, Digital Transaction can leverage AWS' services to expand its business globally,
            offering customers around the world the option to run ParallelChain®-based solutions seamlessly on AWS cloud.
          </Typography>
        </Grid>

        <Grid item xs={12} md={6}>
          <img src="/images/channels-and-partners/paywiser_pic.png" alt="Paywiser" className={classes.image} />

          <Typography variant="body2" className={classes.paragraph}>
            Paywiser is a leading payment solutions FinTech firm with offices in Asia, Europe and the United Kingdom, providing PaaS and OEM solutions in their acquiring and issuing operations. Since 2021,
            Paywiser has launched its debit card business, where its KYC verification process is currently operated by Digital Transaction's ParallelChain® and eKYC-Chain.
          </Typography>
        </Grid>

        <Grid item xs={12} md={6}>
          <img src="/images/channels-and-partners/world-book.png" alt="WorldBook" className={classes.image} />

          <Typography variant="body2" className={classes.paragraph}>
            The NEXUS WorldBook™ is the world’s first crypto liquidity ecosystem committed to create a universal
            liquidity standard for digital assets. In joint effort, the blockchain and A.I. technology of ParallelChain will accelerate institutional adoption
            of digital assets by enhancing the stability, accountability and privacy protection of the ecosystem.
          </Typography>
        </Grid>

        <Grid item xs={12} md={6}>
          <img src="/images/channels-and-partners/digital-assets.png" alt="Digital Assets" className={classes.image} />

          <Typography variant="body2" className={classes.paragraph}>
            Digital Assets Group is a venture capital company with offices in the United Kingdom and Poland. Founded in 2017, Digital Assets
            comprises a team of trusted and experienced team of investors. Beyond early-stage capital investments, it offers professional services in
            graphic design, network testing and product management guidance.
          </Typography>
        </Grid>

        <Grid item xs={12} md={6}>
          <img src="/images/channels-and-partners/esix.png" alt="ESIX network" className={classes.image} />

          <Typography variant="body2" className={classes.paragraph}>
            ESIX Network is a Chinese company that offers decentralized cloud storage solutions to tackle
            issues such as high energy consumption and problems with bandwidth sharing.
            It aims to achieve green cloud computing by utilizing edge-computing, cellular neural network,
            and cloud–network integration.
          </Typography>
        </Grid>

        <Grid item xs={12} md={6}>
          <img src="/images/channels-and-partners/titanium-technologies.png" alt="Titanium Technologies" className={classes.image} />

          <Typography variant="body2" className={classes.paragraph}>
            Titanium Technologies is headquartered in Tel Aviv, Israel.
            Their product, Securer, is tailored for start-ups, investors and accelerators ecosystems.
            Our cooperation combines the high-performance ParallelChain® with FutureBlock,
            providing access to a wide network of business development and investment opportunities.
          </Typography>
        </Grid>

        <Grid item xs={12} md={6}>
          <img src="/images/channels-and-partners/trivver.png" alt="Trivver" className={classes.image} />

          <Typography variant="body2" className={classes.paragraph}>
            Trivver, headquartered in California, is a leader in the Extended Reality (XR) space.
            Their technology combines real and virtual environments by deploying their multi-patented
            digital 3D Smart Objects (aka Digital Twins) onto virtual reality platforms.
            Users can interact with their 3D Smart Objects in a virtual environment.
            The arrayed Objects continuously stream back valuable data such as viewability
            analytics and performance data, etc.
          </Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <img src="/images/channels-and-partners/gs1.png" alt="ESIX network" className={classes.image} />

          <Typography variant="body2" className={classes.paragraph}>
            GS1 Hong Kong&apos;s RFID-based Cold Chain Solution is an effective and reliable tool to
            help monitoring the cold chain to optimise logistics management.
            The GS1 System of Standards is the world’s most widely used supply chain standards, allowing
            the efficient and secure movement of products, services, and information
            between companies and facilitating the interoperability between different business systems.
          </Typography>
        </Grid>

        <Grid item xs={12} md={6}>
          <img src="/images/channels-and-partners/motherapp.png" alt="Motherapp" className={classes.image} />

          <Typography variant="body2" className={classes.paragraph}>
            Motherapp is a Hong Kong based company that offers smart environment, customer
            engagement and digital consulting. The firm develops smart applications that engage
            customers and improve operations.
            With teams in Hong Kong, Ningbo and California, Motherapp brings a
            uniquely caring approach to creating value with proven and emerging technology.
          </Typography>
        </Grid>

      </Grid>
    </Section>
  );
}
