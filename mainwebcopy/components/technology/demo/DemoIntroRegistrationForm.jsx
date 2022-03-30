import { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { forwardParallelChainExperienceRequest } from '../../../apiService/email';

const useStyles = makeStyles((theme) => ({
  card: {
    position: 'relative',
    padding: `${theme.spacing(2.5)}px`,
    overflow: 'visible',
  },
  flexContainer: {
    display: 'flex',
  },
  nameField: {
    flex: 1,
    marginBottom: `${theme.spacing(2)}px`,
    backgroundColor: theme.palette.neutral.white,
    borderRadius: '4px',
    '&:first-child': {
      marginRight: `${theme.spacing(1)}px`,
    },
    '&:last-child': {
      marginLeft: `${theme.spacing(1)}px`,
    },
    '&:hover': {
      boxShadow: `0 0 4px ${theme.palette.neutral.white}`,
    },
  },
  emailField: {
    backgroundColor: theme.palette.neutral.white,
    borderRadius: '4px',
    marginBottom: `${theme.spacing(2)}px`,
    '&:hover': {
      boxShadow: `0 0 4px ${theme.palette.neutral.white}`,
    },
  },
  controlsContainer: {
    display: 'flex',
  },
  submit: {
    boxShadow: 'none',
    borderRadius: '16px',
    minWidth: '175px',
    border: '2px solid black',
    transition: 'all 300ms',
    backgroundColor: 'white',
    color: 'black',
    '&:hover': {
      boxShadow: `0 3px 15px 0 ${theme.palette.primary.mainFaded}`,
      backgroundColor: 'rgba(53,163,220,1)',
    },
    '&:hover h6': {
      color: theme.palette.neutral.white,
    },
  },
  formControl: {
    marginBottom: `${theme.spacing(2)}px`,
  },
  submitMessage: {
    display: ({ submissionState }) => {
      if (submissionState === '') {
        return 'none';
      }
      return 'block';
    },
    color: theme.palette.neutral.black,
  },
}));

export default function DemoIntroRegistrationForm() {
  const [title, setTitle] = useState(null);
  const [firstName, setFirstName] = useState(null);
  const [lastName, setLastName] = useState(null);
  const [organization, setOrganization] = useState(null);
  const [jobTitle, setJobTitle] = useState(null);
  const [location, setLocation] = useState(null);
  const [workEmail, setWorkEmail] = useState(null);
  const [phoneNumber, setPhoneNumber] = useState(null);
  const [inquiry, setInquiry] = useState(null);

  const [submissionState, setSubmissionState] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmissionState('loading');
    forwardParallelChainExperienceRequest(title, firstName, lastName, organization,
      jobTitle, location, workEmail, phoneNumber, inquiry)
      .then((response) => {
        if (response.ok) {
          setSubmissionState('success');
        } else {
          throw new Error('Something went wrong');
        }
      })
      .catch(() => {
        setSubmissionState('error');
      });
  };

  const classes = useStyles({ submissionState });

  return (
    <Card classes={{ root: classes.card }} elevation={6}>
      <form onSubmit={handleSubmit}>
        <div className={classes.flexContainer}>
          <TextField
            required
            id="title"
            label="Title"
            placeholder="Mr/Ms/Mx"
            variant="outlined"
            classes={{ root: classes.nameField }}
            onChange={(e) => setTitle(e.target.value)}
          />
          <TextField
            required
            id="firstName"
            label="First Name"
            placeholder="Jane"
            variant="outlined"
            classes={{ root: classes.nameField }}
            onChange={(e) => setFirstName(e.target.value)}
          />
          <TextField
            required
            id="lastName"
            label="Last Name"
            placeholder="Doe"
            variant="outlined"
            classes={{ root: classes.nameField }}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
        <div className={classes.flexContainer}>
          <TextField
            required
            id="company"
            label="Company"
            variant="outlined"
            classes={{ root: classes.nameField }}
            fullWidth
            onChange={(e) => setOrganization(e.target.value)}
          />
          <TextField
            required
            id="jobTitle"
            label="Job Title"
            variant="outlined"
            classes={{ root: classes.nameField }}
            fullWidth
            onChange={(e) => setJobTitle(e.target.value)}
          />
        </div>
        <TextField
          required
          id="location"
          label="Country / Location"
          variant="outlined"
          classes={{ root: classes.emailField }}
          fullWidth
          onChange={(e) => setLocation(e.target.value)}
        />
        <TextField
          required
          type="email"
          id="workEmail"
          label="Work Email"
          variant="outlined"
          classes={{ root: classes.emailField }}
          fullWidth
          onChange={(e) => setWorkEmail(e.target.value)}
        />
        <TextField
          required
          id="phoneNumber"
          label="Phone Number"
          variant="outlined"
          classes={{ root: classes.emailField }}
          fullWidth
          onChange={(e) => setPhoneNumber(e.target.value)}
        />
        <TextField
          required
          id="inquiry"
          label="Inquiry"
          placeholder="How may we assist?"
          variant="outlined"
          rows={3}
          rowsMax={10}
          classes={{ root: classes.emailField }}
          fullWidth
          multiline
          onChange={(e) => setInquiry(e.target.value)}
        />
        <div className={classes.controlsContainer}>
          <Button
            type="submit"
            variant="contained"
            classes={{ root: classes.submit }}
          >
            <Typography variant="subtitle1">
              Register
            </Typography>
          </Button>
        </div>
        <br />
        <Typography
          variant="subtitle2"
          classes={{ root: classes.submitMessage }}
        >
          { submissionState === 'success'
            ? 'Your application has been submitted. You should receive a confirmation email soon.'
            : (submissionState === 'loading')
              ? 'Loading...'
              : `There was a technical error and your application was not submitted. We'd appreciate
              it if you'd inform our staff at info@parallelchain.io of this error.`}
        </Typography>
      </form>
    </Card>
  );
}
