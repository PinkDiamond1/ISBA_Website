import { useState } from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Collapse from '@material-ui/core/Collapse';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Section from './Section';
import CardFlip from './CardFlip';
import LeadershipTeamLarge from './LeadershipTeamLarge';
import LeadershipTeamMedium from './LeadershipTeamMedium';
import LeadershipTeamSmall from './LeadershipTeamSmall';

const memberInfo = {
  'dr-dileep': {
    bio: [
      `Dr. Bhandarkar has earned his computer design legacy 
      at Qualcomm (VP of Technology), Microsoft (Distinguished Engineer), 
      Intel (Director of Advanced Architecture) and DEC (Technical Director). 
      He is an inventor of 16 US patents and has published more than 30 
      papers in reputable journals.`,
      `Dr. Bhandarkar holds a MS and PhD in 
      Electrical Engineering from Carnegie Mellon University.`,
    ],
  },
  'raj-jain': {
    bio: [
      `Prof. Jain is a world-renowned, 
      highly-cited scholar in blockchain 
      and network performance measurement. 
      His scholarship began as a MIT lecturer, 
      then a professor at Ohio State University. 
      He now serves as Barbara J. and Jerome R. Cox, Jr., 
      Professor of Computer Science and Engineering at 
      Washington University. He is also an inventor of 14 US Patents.`,
      `Prof. Jain holds a PhD in 
      Computer Science from Harvard University.`,
    ],
  },
  'shawn-day': {
    bio: [
      `Dr. Day is a technologist with 41 US 
      Patents and an entrepreneur with proven success
       in leading multi-national technology development 
       from the start-up stage to IPO and full commercial 
       deployment. He was VP of Technology and CTO at Synaptics (Silicon Valley).`,
      `Dr. Day holds a PhD in Electrical 
      Engineering from the University of British Columbia.`,
    ],
  },
  'nii-quaynor': {
    bio: [
      `Dr. Quaynor is a pioneering figure in Africa’s 
      Internet development and helped establish some of the 
      continent’s first Internet connections. He was also inducted 
      into the Internet Hall of Fame, 2013. Before returning to Ghana, 
      Dr. Quaynor was with DEC (Massachusetts) in charge of the Cluster
       engineering and later fault tolerance VAX.`,
      `Dr. Quaynor holds a PhD in Computer 
      Science from the State University of New York, Stony Brook.`,
    ],
  },

};

const useStyles = makeStyles((theme) => ({
  titleText: {
    marginBottom: `${theme.spacing(2)}px`,
    color: '#027D6F',
    fontWeight: 400,
    textAlign: 'left',
  },
  subtitleText: {
    marginTop: `${theme.spacing(0.5)}px`,
    textAlign: 'center',
  },
  executiveImageContainer: {
    marginBottom: `${theme.spacing(2)}px`,
    position: 'relative',
    display: 'flex',
    height: '150px',
    [theme.breakpoints.up('sm')]: {
      height: '155px',
    },
    [theme.breakpoints.up('md')]: {
      height: '170px',
    },
    pointerEvents: 'none',
    justifyContent: 'center',
  },
  executiveImage: {
    transition: 'transform 300ms ease-out, opacity 300ms ease-out',
    marginBottom: `${theme.spacing(2)}px`,
    border: '1px solid #027D6F',
    borderRadius: '90px',
    padding: `${theme.spacing(1)}px`,
    display: 'block',
    width: '150px',
    height: '150px',
    [theme.breakpoints.up('sm')]: {
      width: '155px',
      height: '155px',
    },
    [theme.breakpoints.up('md')]: {
      width: '170px',
      height: '170px',
    },
    pointerEvents: 'none',
  },
  categoryContainer: {
    marginTop: `${theme.spacing(0.5)}px`,
    marginBottom: `${theme.spacing(6)}px`,
    display: 'flex',
    justifyContent: 'center',
    flexGrow: '2',
    alignItems: 'baseline',
  },
  pastTitles: {
    fontWeight: 300,
    marginTop: `${theme.spacing(0.5)}px`,
    textAlign: 'center',
  },
  bioContainer: {
    display: 'flex',
    position: 'relative',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  bio: {
    fontWeight: 300,
    marginTop: `${theme.spacing(0.5)}px`,
    marginBottom: `${theme.spacing(1.5)}px`,
    color: theme.palette.neutral.darkestGray,
  },
  mywTitleText: {
    fontSize: 15,
  },
  memberDescText: {
    textAlign: 'center',
    transition: 'color 300ms ease',
  },
  managementDescText: {
    textAlign: 'center',
    cursor: 'pointer',
  },
  title: {
    color: 'black',
    fontWeight: 700,
    textAlign: 'center',
  },
  hovertitle: {
    color: '#027D6F',
  },
  nameTitle: {
    color: '#0C2454',
    fontWeight: 700,
    textAlign: 'center',
  },
}));

export default function LeadershipPanelCardFlip({ baseUrl }) {
  const classes = useStyles();
  const theme = useTheme();
  const [teamBio, setTeamBio] = useState(0);
  const [teamImage, setTeamImage] = useState(0);
  const smOrSmaller = useMediaQuery(theme.breakpoints.down('sm'));
  const mediumOrSmaller = useMediaQuery(theme.breakpoints.down('md'));
  const largeOrLarger = useMediaQuery(theme.breakpoints.up('lg'));

  return (
    <Section>
      <Typography variant="h2" className={classes.titleText}>
        Management
      </Typography>
      {largeOrLarger && <LeadershipTeamMedium />}
      {mediumOrSmaller && !smOrSmaller && <LeadershipTeamMedium />}
      {smOrSmaller && <LeadershipTeamSmall />}
      <Typography variant="h2" className={classes.titleText}>
        Technology Strategy Task Force
      </Typography>
      <Grid container spacing={6} classes={{ root: classes.categoryContainer }}>
        <Grid item xs={12} md={6} lg={6} classes={{ root: classes.bioContainer }}>
          <CardFlip content={memberInfo['dr-dileep'].bio}>
            <div className={classes.memberDescText}>
              <div className={classes.executiveImageContainer}>
                <img
                  src="/images/leadership/team/dileep_icon.png"
                  className={classes.executiveImage}
                  alt="Dileep BHANDARKAR"
                />
              </div>
              <Typography variant="h5" classes={{ root: classes.nameTitle }}>
                Dr. Dileep BHANDARKAR
              </Typography>
              <Typography variant="h5" classes={{ root: classes.title }} gutterBottom>
                Fellow
              </Typography>
            </div>
          </CardFlip>
        </Grid>
        <Grid item xs={12} md={6} classes={{ root: classes.bioContainer }}>
          <CardFlip content={memberInfo['raj-jain'].bio}>
            <div className={classes.memberDescText}>
              <div className={classes.executiveImageContainer}>
                <img
                  src="/images/leadership/team/raj_icon.png"
                  className={classes.executiveImage}
                  alt="Raj JAIN"
                />
              </div>
              <Typography variant="h5" classes={{ root: classes.nameTitle }}>
                Dr. Raj JAIN
              </Typography>
              <Typography variant="h5" classes={{ root: classes.title }} gutterBottom>
                Fellow
              </Typography>
            </div>
          </CardFlip>
        </Grid>
        <Grid item xs={12} md={6} classes={{ root: classes.bioContainer }}>
          <CardFlip content={memberInfo['shawn-day'].bio}>
            <div className={classes.memberDescText}>
              <div className={classes.executiveImageContainer}>
                <img
                  src="/images/leadership/team/shawn_icon.png"
                  className={classes.executiveImage}
                  alt="Shawn DAY"
                />
              </div>
              <Typography variant="h5" classes={{ root: classes.nameTitle }}>
                Dr. Shawn DAY
              </Typography>
              <Typography variant="h5" classes={{ root: classes.title }} gutterBottom>
                Fellow
              </Typography>
            </div>
          </CardFlip>
        </Grid>
        <Grid item xs={12} md={6} classes={{ root: classes.bioContainer }}>
          <CardFlip content={memberInfo['nii-quaynor'].bio}>
            <div className={classes.memberDescText}>
              <div className={classes.executiveImageContainer}>
                <img
                  src="/images/leadership/team/nii_icon.png"
                  className={classes.executiveImage}
                  alt="Nii QUAYNOR"
                />
              </div>
              <Typography variant="h5" classes={{ root: classes.nameTitle }}>
                Dr. Nii QUAYNOR
              </Typography>
              <Typography variant="h5" classes={{ root: classes.title }} gutterBottom>
                Fellow
              </Typography>
            </div>
          </CardFlip>
        </Grid>
      </Grid>

      <Typography variant="h2" className={classes.titleText}>
        Advisors
      </Typography>
      <Grid container spacing={6} classes={{ root: classes.categoryContainer }}>
        <Grid item xs={12} md={4} classes={{ root: classes.bioContainer }}>
          <div className={classes.memberDescText}>
            <div className={classes.executiveImageContainer}>
              <img
                src="/images/leadership/team/roderick.png"
                className={classes.executiveImage}
                alt="Roderick McKINLEY, CFA"
              />
            </div>
            <Typography variant="h5" classes={{ root: classes.nameTitle }}>
              Roderick McKINLEY, CFA
            </Typography>
          </div>
          <Typography variant="h5" classes={{ root: classes.title }} gutterBottom>
            Tokenomics Modeller
          </Typography>
          <Typography variant="body2" className={classes.pastTitles}>
            rmckinley.net
          </Typography>
        </Grid>
        <Grid item xs={12} md={4} classes={{ root: classes.bioContainer }}>
          <div className={classes.memberDescText}>
            <div className={classes.executiveImageContainer}>
              <img
                src="/images/leadership/team/anand_icon.png"
                className={classes.executiveImage}
                alt="Anand CHANDRASEKHER"
              />
            </div>
            <Typography variant="h5" classes={{ root: classes.nameTitle }}>
              Anand CHANDRASEKHER
            </Typography>
          </div>
          <Typography variant="h5" classes={{ root: classes.title }} gutterBottom>
            Global Sales & Marketing
          </Typography>
          <Typography variant="body2" className={classes.pastTitles}>
            Fmr. SVP, Worldwide Sales & Marketing, Intel
          </Typography>
        </Grid>
        <Grid item xs={12} md={4} classes={{ root: classes.bioContainer }}>
          <div className={classes.memberDescText}>
            <div className={classes.executiveImageContainer}>
              <img
                src="/images/leadership/team/paul_icon.png"
                className={classes.executiveImage}
                alt="Paul P. CHEN"
              />
            </div>
            <Typography variant="h5" classes={{ root: classes.nameTitle }}>
              Paul P. CHEN, JD
            </Typography>
          </div>
          <Typography variant="h5" classes={{ root: classes.title }} gutterBottom>
            Corporate M&A
          </Typography>
          <Typography variant="body2" className={classes.pastTitles}>
            Partner, Mayer Brown (Silicon Valley)
          </Typography>
        </Grid>
        <Grid item xs={12} md={4} classes={{ root: classes.bioContainer }}>
          <div className={classes.memberDescText}>
            <div className={classes.executiveImageContainer}>
              <img
                src="/images/leadership/team/dr-chudi_icon.png"
                className={classes.executiveImage}
                alt="Dr. Chudi ADI, MD"
              />
            </div>
            <Typography variant="h5" classes={{ root: classes.nameTitle }}>
              Dr. Chudi ADI, MD
            </Typography>
          </div>
          <Typography variant="h5" classes={{ root: classes.title }} gutterBottom>
            Enterprise Adoption
          </Typography>
          <Typography variant="body2" className={classes.pastTitles}>
            Founder & CEO, CADIS HealthTech
          </Typography>
        </Grid>
        <Grid item xs={12} md={4} classes={{ root: classes.bioContainer }}>
          <div className={classes.memberDescText}>
            <div className={classes.executiveImageContainer}>
              <img
                src="/images/leadership/team/andy_advisor.png"
                className={classes.executiveImage}
                alt="Andy BIEN"
              />
            </div>
            <Typography variant="h5" classes={{ root: classes.nameTitle }}>
              Andy BIEN
            </Typography>
          </div>
          <Typography variant="h5" classes={{ root: classes.title }} gutterBottom>
            Enterprise Adoption
          </Typography>
          <Typography variant="body2" className={classes.pastTitles}>
            Chief Digital Officer for Global Aviation, Huawei Technologies
          </Typography>
        </Grid>
        <Grid item xs={12} md={4} classes={{ root: classes.bioContainer }}>
          <div className={classes.memberDescText}>
            <div className={classes.executiveImageContainer}>
              <img
                src="/images/leadership/team/kyle.png"
                className={classes.executiveImage}
                alt="Kyle CHASSÉ"
              />
            </div>
            <Typography variant="h5" classes={{ root: classes.nameTitle }}>
              Kyle CHASSÉ
            </Typography>
          </div>
          <Typography variant="h5" classes={{ root: classes.title }} gutterBottom>
            DeFi Ecosystem
          </Typography>
          <Typography variant="body2" className={classes.pastTitles}>
            Founder & CEO, Master Venture
          </Typography>
        </Grid>
        <Grid item xs={12} md={4} classes={{ root: classes.bioContainer }}>
          <div className={classes.memberDescText}>
            <div className={classes.executiveImageContainer}>
              <img
                src="/images/leadership/team/elliot_advisor.png"
                className={classes.executiveImage}
                alt="Elliot HAGEMEIJER"
              />
            </div>
            <Typography variant="h5" classes={{ root: classes.nameTitle }}>
              Elliot HAGEMEIJER
            </Typography>

          </div>
          <Typography variant="h5" classes={{ root: classes.title }} gutterBottom>
            DeFi Ecosystem
          </Typography>
          <Typography variant="body2" className={classes.pastTitles}>
            Founder & CEO, Decubate
          </Typography>
        </Grid>
      </Grid>

      <Typography variant="h2" className={classes.titleText}>
        Board Of Directors
      </Typography>
      <Grid container spacing={6} classes={{ root: classes.categoryContainer }}>
        <Grid item xs={12} md={6} classes={{ root: classes.bioContainer }}>
          <div className={classes.executiveImageContainer}>
            <img
              src="/images/leadership/director/ho_director.png"
              className={classes.executiveImage}
              alt="Ho Leung CHEUNG"
            />
          </div>
          <Typography variant="h5" classes={{ root: classes.nameTitle }}>
            Ho Leung CHEUNG
          </Typography>
          <Typography variant="h5" classes={{ root: classes.title }} gutterBottom>
            Director
          </Typography>
          <Typography variant="body2" className={classes.pastTitles}>
            Former Senior Vice President and General Manager, Apple
          </Typography>
        </Grid>
        <Grid item xs={12} md={6} classes={{ root: classes.bioContainer }}>
          <div className={classes.executiveImageContainer}>
            <img
              src="/images/leadership/team/ian huang_icon.png"
              className={classes.executiveImage}
              alt="Ian HUANG"
            />
          </div>
          <Typography variant="h5" classes={{ root: classes.nameTitle }}>
            Ian HUANG
          </Typography>
          <Typography variant="h5" classes={{ root: classes.title }} gutterBottom>
            Chairman and Director
          </Typography>
          <Typography variant="body2" className={classes.pastTitles}>
            Chief Executive Officer, ParallelChain Lab
          </Typography>
        </Grid>
        <Grid item xs={12} md={6} classes={{ root: classes.bioContainer }}>
          <img
            src="/images/leadership/director/romilly_director.png"
            className={classes.executiveImage}
            alt="Romilly SINCLAIR"
          />
          <Typography variant="h5" classes={{ root: classes.nameTitle }}>
            Romilly SINCLAIR
          </Typography>
          <Typography variant="h5" classes={{ root: classes.title }} gutterBottom>
            Director
          </Typography>
          <Typography variant="body2" className={classes.pastTitles}>
            Director, Refoveo <br />
            Co-Founder, IMAPAC
          </Typography>
        </Grid>
        <Grid item xs={12} md={6} classes={{ root: classes.bioContainer }}>
          <img
            src="/images/leadership/director/ming_director.png"
            className={classes.executiveImage}
            alt="Ming-yam WONG"
          />
          <Typography display="inline" variant="h5" classes={{ root: classes.nameTitle }}>
            Ming-yam WONG
            {' '}
            <Typography classes={{ root: classes.mywTitleText }} display="inline" variant="h5">
              SBS BBS JP
            </Typography>
          </Typography>
          <Typography variant="h5" classes={{ root: classes.title }} gutterBottom>
            Director
          </Typography>
          <Typography variant="body2" className={classes.pastTitles}>
            Former Chairman, Hong Kong Applied Science & Technology
            Research Institute Company Limited (ASTRI)
          </Typography>
        </Grid>
      </Grid>

    </Section>
  );
}

LeadershipPanelCardFlip.propTypes = {
  baseUrl: PropTypes.string.isRequired,
};
