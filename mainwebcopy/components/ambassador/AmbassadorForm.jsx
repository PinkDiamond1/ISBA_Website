/* eslint-disable max-len */
import { makeStyles, useTheme } from '@material-ui/core/styles';

import useMediaQuery from '@material-ui/core/useMediaQuery';
import Typography from '@material-ui/core/Typography';

import Grid from '@material-ui/core/Grid';

import { Button } from '@material-ui/core';
import { useEffect, useState, useRef } from 'react';
import Alert from '@material-ui/lab/Alert';
import { ArrowBack } from '@material-ui/icons';
import PropTypes from 'prop-types';
import { WEBAPI_URL } from '../../apiService/api';

const useStyles = makeStyles((theme) => ({
  formCard: {
    borderRadius: '8px',
    backgroundColor: '#F6F6F6',
    height: 'auto',
    width: 'auto',
    marginTop: '80px',
    padding: '20px',
    paddingRight: '60px',
    paddingLeft: '60px',
    color: 'black',
    [theme.breakpoints.down('sm')]: {
      paddingRight: '30px',
      paddingLeft: '30px',
    },

  },
  title: {
    textAlign: 'center',
    paddingBottom: '8px',
  },
  inputText: {
    margin: '6px',
    [theme.breakpoints.down('sm')]: {
      textAlign: 'center',
    },
  },
  inputField: {
    width: '90%',
    border: '1.5px solid black',
    borderRadius: '8px',
    height: '38px',
    padding: '8px',
    margin: `${theme.spacing(1)}px`,
    [theme.breakpoints.down('sm')]: {
      width: '70vw',
    },
  },
  inputField2: {
    width: '90%',
    border: '1.5px solid black',
    borderRadius: '8px',
    height: '70px',
    padding: '8px',
    margin: `${theme.spacing(1)}px`,
    [theme.breakpoints.down('sm')]: {
      width: '70vw',
    },
  },
  inputField3: {
    width: '90%',
    border: '1.5px solid black',
    borderRadius: '8px',
    height: '38px',
    padding: '8px',
    backgroundColor: 'white',
    margin: `${theme.spacing(1)}px`,
    [theme.breakpoints.down('sm')]: {
      width: '70vw',
    },
  },
  radioField: {
    margin: '6px',
  },
  submitBtn: {
    backgroundColor: 'white',
    border: '1.5px solid black',
    borderRadius: '8px',
    height: '38px',
    width: '100px',
    pointer: 'cursor',
    zIndex: 100,
    '& hover': {
      backgroundColor: 'black',
      color: 'white',
    },

  },
  uploadBtn: {
    backgroundColor: 'white',
    border: '1.5px solid black',
    borderRadius: '8px',
    height: '20px',
    width: '80px',
    fontSize: '10px',
    marginLeft: '2px',
    textTransform: 'none',

  },
  centerInput: {
    [theme.breakpoints.down('sm')]: {
      alignItems: 'center',
    },
  },
  centerButton: {
    [theme.breakpoints.down('sm')]: {
      justifyContent: 'center',
      alignItems: 'center',
    },
  },
  toggle: {
    backgroundColor: 'black!important',

  },

}));
export default function AmbassadorForm({ closeBackdrop }) {
  const classes = useStyles();
  const theme = useTheme();
  const sm = useMediaQuery(theme.breakpoints.down('sm'));
  const [error, setError] = useState({ err: false, message: '' });
  const [success, setSuccess] = useState({ success: false, message: '' });
  const [fileNames, setFileNames] = useState([]);
  const [files, setFiles] = useState(null);
  const [fields, setFields] = useState({
    name: '',
    telegram: '',
    email: '',
    holder: '',
    story: '',
    position: '',
    link: '',
  });
  const initialRender = useRef(true);

  const handleFiles = (e) => {
    const { length } = e.target.files;
    const files = [];

    for (let i = 0; i < length; i++) {
      files.push(e.target.files[i].name);
    }
    setFileNames(files);
    setFiles(e.target.files);
  };

  const validateEmail = (email) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  const validateInput = () => {
    if (fields.name === '' || fields.telegram === '' || fields.email === '' || fields.holder === '' || fields.story === '' || fields.position === '') {
      setError({ err: true, message: 'Please fill in all the fields to continue...' });
      setSuccess({ success: false, message: '' });
    } else if (!validateEmail(fields.email)) {
      setError({ err: true, message: 'Please enter a valid email...' });
      setSuccess({ success: false, message: '' });
    } else {
      setError({ err: false, message: '' });
    }
  };

  const handleSubmit = () => {
    if (!error.err) {
      const fd = new FormData();
      fd.append('name', fields.name);
      fd.append('telegram', fields.telegram);
      fd.append('email', fields.email);
      fd.append('holder', fields.holder);
      fd.append('story', fields.story);
      fd.append('position', fields.position);
      fd.append('link', fields.link);

      if (files) {
        for (const file of files) {
          fd.append('files', file);
        }
      }

      const options = {
        method: 'POST',
        body: fd,
      };

      fetch(`${WEBAPI_URL}/ambassador`, options)
        .then((res) => {
          if (!res.ok) throw new Error();
          setSuccess({ success: true, message: 'Form submitted successfully' });
          setError({ err: false, message: '' });
        })
        .catch(() => {
          setError({ err: true, message: 'Server Error: Please try again later!' });
          setSuccess({ success: false, message: '' });
        });
    }
  };
  useEffect(() => {
    if (initialRender.current) {
      initialRender.current = false;
    } else {
      validateInput();
    }
  }, [fields]);
  return (
    <div className={classes.formCard}>
      {sm
      && (
      <Typography variant="body" style={{ fontWeight: 'bold', display: 'flex', alignItems: 'center' }} className={classes.back}>
        <ArrowBack onClick={closeBackdrop} />
        Back
        <br />
      </Typography>
      )}

      {!sm
      && (
      <Typography variant="h5" className={classes.title}>
        Apply to be a ParallelChain Ambassador
      </Typography>
      )}
      <Typography variant="body">
        Thank you for your interest in working with us. Please fill out the following form to complete the application.
      </Typography>
      {error.err && <Alert variant="outlined" severity="error">{error.message}</Alert> }
      {success.success && <Alert variant="outlined" severity="success">{success.message}</Alert> }
      <Grid container direction="row" justifyContent="space-evenly">
        <Grid container item md={6}>
          <Grid item container direction="column" className={classes.centerInput}>
            <Typography variant="body" className={classes.inputText}>
              Name
            </Typography>
            <input
              type="name"
              className={classes.inputField}
              onChange={(e) => {
                setFields({ ...fields, name: e.target.value });
              }}
            />
          </Grid>
          <Grid item container direction="column" className={classes.centerInput}>
            <Typography variant="body" className={classes.inputText}>
              Telegram Username
            </Typography>
            <input
              type="text"
              className={classes.inputField}
              onChange={(e) => {
                setFields({ ...fields, telegram: e.target.value });
              }}
            />
          </Grid>
          <Grid item container direction="column" className={classes.centerInput}>
            <Typography variant="body" className={classes.inputText}>
              Email
            </Typography>
            <input
              type="email"
              className={classes.inputField}
              onChange={(e) => {
                setFields({ ...fields, email: e.target.value });
              }}
            />
          </Grid>
          {!sm && (
          <Grid item container direction="column" className={classes.centerInput}>
            <Typography variant="body" className={classes.inputText}>
              Tell us about you and your story with ParallelChain
            </Typography>
            <textarea
              type="text"
              className={classes.inputField2}
              onChange={(e) => {
                setFields({ ...fields, story: e.target.value });
              }}
            />
          </Grid>
          )}
        </Grid>
        <Grid container item md={6}>
          <Grid item container direction="column" className={classes.centerInput}>
            <Typography variant="body" className={classes.inputText}>
              Which position are you applying for?
            </Typography>
            {/* <input type="text" className={classes.inputField} /> */}
            <select
              className={classes.inputField3}
              onChange={(e) => {
                setFields({ ...fields, position: e.target.value });
              }}
            >
              <option hidden selected />
              <option value="Club Representative">Club Representative</option>
              <option value="Content Writer">Content Writer</option>
              <option value="Creative Designer">Creative Designer</option>
              <option value="Influencer">Influencer</option>
              <option value="Translator">Translator</option>
            </select>
          </Grid>
          <Grid item container direction="column" className={classes.centerInput}>
            <Typography variant="body" className={classes.inputText}>
              Are you an XPLL holder?
            </Typography>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <input
                type="radio"
                name="holder"
                className={classes.radioField}
                value="Yes"
                onChange={(e) => {
                  setFields({ ...fields, holder: e.target.value });
                }}
              />
              <Typography variant="body">
                Yes
              </Typography>
            </div>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <input
                type="radio"
                name="holder"
                className={classes.radioField}
                value="No"
                onChange={(e) => {
                  setFields({ ...fields, holder: e.target.value });
                }}
              />
              <Typography variant="body">
                No
              </Typography>
            </div>
          </Grid>
          <Grid item container direction="column" className={classes.centerInput}>
            <Typography variant="body" className={classes.inputText}>
              Supplementary Documents  (CV, portfolio...)
            </Typography>
            <input
              type="text"
              className={classes.inputField}
              placeholder="Put your link here"
              onChange={(e) => {
                setFields({ ...fields, link: e.target.value });
              }}
            />
            <ul style={{ margin: '6px' }}>
              {fileNames.map((item, i) => <li key={i}>{item}</li>)}
            </ul>
          </Grid>
          {sm && (
          <Grid item container direction="column" className={classes.centerInput}>
            <Typography variant="body" className={classes.inputText}>
              Tell us about you and your story with ParallelChain
            </Typography>
            <textarea
              type="text"
              className={classes.inputField2}
              onChange={(e) => {
                setFields({ ...fields, story: e.target.value });
              }}
            />
          </Grid>
          )}

          {!sm ? (
            <Grid item container direction="row-reverse" style={{ width: '25vw' }}>
              <Button className={classes.submitBtn} onClick={handleSubmit}>Submit</Button>
            </Grid>
          ) : (
            <Grid item container direction="column" className={classes.centerInput}>
              <Button className={classes.submitBtn} onClick={handleSubmit}>Submit</Button>
            </Grid>
          )}

        </Grid>
      </Grid>

    </div>

  );
}

AmbassadorForm.propTypes = {
  closeBackdrop: PropTypes.func.isRequired,
};
