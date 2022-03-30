import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import NextLink from 'next/link';
import { useBackdrop } from 'use-backdrop';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { FutureButton, Overtitle } from 'dtl-react-components';
import Section from '../../Section';

import {
  forwardParallelChainExperienceBooking,
  getBookedSlotsBetweenDays,
} from '../../../apiService/parallelchain-experience-booking';

const dayNames = [
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
];

const monthNames = [
  { short: 'Jan', long: 'January' },
  { short: 'Feb', long: 'February' },
  { short: 'Mar', long: 'March' },
  { short: 'Apr', long: 'April' },
  { short: 'May', long: 'May' },
  { short: 'Jun', long: 'June' },
  { short: 'Jul', long: 'July' },
  { short: 'Aug', long: 'August' },
  { short: 'Sep', long: 'September' },
  { short: 'Oct', long: 'October' },
  { short: 'Nov', long: 'November' },
  { short: 'Dec', long: 'December' },
];

const startTimes = [10, 11, 12, 13, 14, 15, 16];

function getFirstDayAfterBlackout() {
  const date = new Date();

  const dayOfWeek = date.getDay() - 1;

  // Wednesday or before
  if (dayOfWeek < 3) {
    date.setDate(date.getDate() + 2);
  } else { // Thursday or after
    date.setDate(date.getDate() + (7 - dayOfWeek));
  }

  return date;
}

function getFirstDayOfWeek(date) {
  const dateOfMonth = date.getDate();
  const dayOfWeek = date.getDay();
  const firstDayOfWeek = new Date(date.getTime());

  // + 1 because we're normal people and our weeks start on Monday.
  firstDayOfWeek.setDate(dateOfMonth - dayOfWeek + 1);

  return firstDayOfWeek;
}

function thereIsSlotBookedOnSameDay(date, bookedSlots) {
  // bookedSlots are in UTC; we're gonna compare using timeString instead
  const dateString = `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`;

  return bookedSlots.some((slot) => (
    (slot.startTimeString.startsWith(dateString))
  ));
}

function getWorkingDaysOfWeek(firstDayOfWeek) {
  const workingDaysOfWeek = [];
  for (let i = 0; i < 5; i += 1) {
    const ithDayOfWeek = new Date(firstDayOfWeek.getTime());
    ithDayOfWeek.setDate(ithDayOfWeek.getDate() + i);

    workingDaysOfWeek.push(ithDayOfWeek);
  }

  return workingDaysOfWeek;
}

function workingDaysOfNextWeek(workingDaysOfWeek) {
  const firstDayOfWeek = new Date(workingDaysOfWeek[0].getTime());
  firstDayOfWeek.setDate(firstDayOfWeek.getDate() + 7);

  return getWorkingDaysOfWeek(firstDayOfWeek);
}

function workingDaysOfLastWeek(workingDaysOfWeek) {
  const firstDayOfWeek = new Date(workingDaysOfWeek[0].getTime());
  firstDayOfWeek.setDate(firstDayOfWeek.getDate() - 7);

  return getWorkingDaysOfWeek(firstDayOfWeek);
}

const useStyles = makeStyles((theme) => ({
  buttonsContainer: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  monthYearText: {
    textAlign: 'right',
  },
  utc8Text: {
    textAlign: 'right',
    color: theme.palette.future.accent,
  },
  timetable: {
    tableLayout: 'fixed',
    width: '100%',
    marginBottom: `${theme.spacing(1)}px`,
  },
  weekSwitchButton: {
    margin: `${theme.spacing(1)}px`,
  },
  slotCard: {
    cursor: 'pointer',
  },
  selectedCard: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.neutral.white,
    cursor: 'default',
  },
  blockedCard: {
    backgroundColor: theme.palette.neutral.darkestGray,
    color: theme.palette.neutral.white,
  },
  selectedTimeSlotText: {
    marginTop: `${theme.spacing(2)}px`,
    marginBottom: `${theme.spacing(3)}px`,
  },
  timeHighlightText: {
    fontWeight: 'bold',
    color: theme.palette.future.accent,
  },
  submitButton: {
    marginTop: `${theme.spacing(2)}px`,
    float: 'right',
  },
}));

function AvailableSlot({ startTime, selected, onClick }) {
  const classes = useStyles();

  return (
    <td>
      <Card
        variant="outlined"
        onClick={onClick}
        classes={{
          root: `${classes.slotCard} ${(selected) && classes.selectedCard}`,
        }}
      >
        <CardContent>
          <Typography variant="h6">
            {`${startTime}:00 - ${startTime + 1}:00`}
          </Typography>
        </CardContent>
      </Card>
    </td>
  );
}

AvailableSlot.propTypes = {
  startTime: PropTypes.number.isRequired,
  selected: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};

function BlockedSlot({ startTime }) {
  const classes = useStyles();

  return (
    <td>
      <Card
        variant="outlined"
        classes={{ root: classes.blockedCard }}
      >
        <CardContent>
          <Typography variant="h6">
            {`${startTime}:00 - ${startTime + 1}:00`}
          </Typography>
        </CardContent>
      </Card>
    </td>
  );
}

BlockedSlot.propTypes = {
  startTime: PropTypes.number.isRequired,
};

const useStyles1 = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    textAlign: 'center',
    marginBottom: `${theme.spacing(2)}px`,
    color: theme.palette.neutral.white,
  },
  confirmationEmailText: {
    marginBottom: `${theme.spacing(2)}px`,
  },
}));

function SuccessScreen() {
  const classes = useStyles1();

  return (
    <div className={classes.container}>
      <Typography variant="h3">
        Thank you for booking ParallelChain™ Demo
      </Typography>
      <br />
      <Typography variant="body1" classes={{ root: classes.confirmationEmailText }}>
        You should have received a confirmation email.
      </Typography>
      <NextLink href="/">
        <a>
          <FutureButton dark>
            Back to home
          </FutureButton>
        </a>
      </NextLink>
    </div>
  );
}

function FailureScreen() {
  const classes = useStyles1();

  return (
    <div className={classes.container}>
      <Typography variant="h3">
        There seems to have been an error :(
      </Typography>
      <Typography variant="body1">
        There was a technical error and your application was not submitted. We&apos;d appreciate
        it if you&apos;d inform our staff at info@parallelchain.io of this error.
      </Typography>
      <NextLink href="/">
        <a>
          <FutureButton>
            Back to home
          </FutureButton>
        </a>
      </NextLink>
    </div>
  );
}

export default function DemoBookBookingPanel({ ticket }) {
  const [firstDayAfterBlackout] = useState(getFirstDayAfterBlackout());

  const [displayedDates, setDisplayedDates] = useState(() => getWorkingDaysOfWeek(getFirstDayOfWeek(getFirstDayAfterBlackout())));

  const [alreadyBookedSlots, setAlreadyBookedSlots] = useState();

  const [selectedDateTime, setSelectedDateTime] = useState(undefined);

  useEffect(() => {
    getBookedSlotsBetweenDays(displayedDates[0], displayedDates[4])
      .then((slots) => {
        setAlreadyBookedSlots(slots);
      });
  }, [displayedDates]);

  useEffect(() => {
    setDisplayedDates(getWorkingDaysOfWeek(getFirstDayOfWeek(getFirstDayAfterBlackout())));
  }, []);

  const { displayBackdrop } = useBackdrop();

  const handleSubmit = () => {
    if (selectedDateTime) {
      forwardParallelChainExperienceBooking(ticket,
        selectedDateTime.date, selectedDateTime.startTime)
        .then((res) => {
          if (res.ok) {
            displayBackdrop(() => (
              <SuccessScreen />
            ));
          } else {
            displayBackdrop(() => (
              <FailureScreen />
            ));
          }
        });
    }
  };

  const classes = useStyles();

  return (
    <Section>
      <Overtitle>{ `Ticket ID: ${ticket}` }</Overtitle>
      <Typography variant="h3" classes={{ root: classes.monthYearText }}>
        {displayedDates
          ? `${monthNames[displayedDates[0].getMonth()].long} ${displayedDates[0].getFullYear()}`
          : 'Loading...' }
      </Typography>
      <Typography variant="h6" classes={{ root: classes.utc8Text }}>
        All times are in Hong Kong Time (UTC+08:00)
      </Typography>
      <table className={classes.timetable}>
        <thead>
          <tr>
            {displayedDates.map((date) => (
              <td key={date.toUTCString()}>
                <CardContent>
                  <Typography variant="subtitle1">
                    {dayNames[date.getDay() - 1]}
                  </Typography>
                  <Typography variant="h5">
                    {`${monthNames[date.getMonth()].short} ${date.getDate()}`}
                  </Typography>
                </CardContent>
              </td>
            ))}
          </tr>
        </thead>
        <tbody>
          {startTimes.map((startTime) => (
            <tr key={startTime}>
              {displayedDates.map((date) => {
                if (date < firstDayAfterBlackout
                  || (alreadyBookedSlots && thereIsSlotBookedOnSameDay(date, alreadyBookedSlots))) {
                  return (
                    <BlockedSlot
                      key={date.getTime()}
                      startTime={startTime}
                    />
                  );
                }
                return (
                  <AvailableSlot
                    key={date.getTime()}
                    startTime={startTime}
                    selected={selectedDateTime
                    && selectedDateTime.date === date
                    && selectedDateTime.startTime === startTime}
                    onClick={() => {
                      setSelectedDateTime({ date, startTime });
                    }}
                  />
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
      <div className={classes.buttonsContainer}>
        <Button
          variant="outlined"
          color="primary"
          onClick={() => {
            setDisplayedDates(workingDaysOfLastWeek(displayedDates));
            setSelectedDateTime(undefined);
          }}
          classes={{
            root: classes.weekSwitchButton,
          }}
        >
          &lt; Previous week
        </Button>
        <Button
          variant="outlined"
          color="primary"
          onClick={() => {
            setDisplayedDates(workingDaysOfNextWeek(displayedDates));
            setSelectedDateTime(undefined);
          }}
          classes={{
            root: classes.weekSwitchButton,
          }}
        >
          Next week &gt;
        </Button>
      </div>
      { selectedDateTime && (
        <>
          <Typography variant="h3" classes={{ root: classes.selectedTimeSlotText }}>
            Selected time slot
          </Typography>
          <Card variant="outlined">
            <CardContent>
              <Typography variant="h5" classes={{ root: classes.timeHighlightText }}>
                {`${selectedDateTime.startTime}:00 - ${selectedDateTime.startTime + 1}:00`}
              </Typography>
              <Typography variant="subtitle1">
                {`${dayNames[selectedDateTime.date.getDay() - 1]}, 
                ${monthNames[selectedDateTime.date.getMonth()].long} 
                ${selectedDateTime.date.getDate()}
                ${selectedDateTime.date.getFullYear()}`}
              </Typography>
            </CardContent>
          </Card>
        </>
      )}
      <Button
        color="primary"
        variant="contained"
        classes={{
          root: classes.submitButton,
        }}
        onClick={handleSubmit}
      >
        Submit
      </Button>
    </Section>
  );
}

DemoBookBookingPanel.propTypes = {
  ticket: PropTypes.string.isRequired,
};
