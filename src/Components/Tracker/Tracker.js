import React, { useState, useRef } from 'react';
import useStyles from './styles';
import {
  Paper,
  Button,
  Typography,
  NativeSelect,
  InputLabel,
} from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { createTracker, updateTracker } from '../../Actions/tracker';
import Results from '../Results/Results';
const Tracker = (props) => {
  const [time, setTime] = useState(0);
  const [activity, setActivity] = useState('');
  const [isActive, setIsActive] = useState(false);

  const countRef = useRef(null);
  const dispatch = useDispatch();
  const classes = useStyles();

  const handleChange = (e) => {
    setActivity(e.target.value);
  };

  const formatTime = () => {
    const getSeconds = `0${time % 60}`.slice(-2);
    const minutes = `${Math.floor(time / 60)}`;
    const getMinutes = `0${minutes % 60}`.slice(-2);
    const getHours = `0${Math.floor(time / 3600)}`.slice(-2);

    return `${getHours} : ${getMinutes} : ${getSeconds}`;
  };

  const restartTimer = () => {
    clearInterval(countRef.current);
    setActivity('');
    setIsActive(false);
    setTime(0);
  };

  const startTimer = () => {
    setIsActive(true);
    countRef.current = setInterval(() => {
      setTime((time) => time + 1);
    }, 1000);
    if (activity.length > 1) {
      let timeObj = {
        startTime: Date.now(),
        activity: activity,
        puppyId: props.currentId,
      };
      console.log(timeObj);
      dispatch(createTracker(timeObj));
    } else {
      alert('Please select an activity');
    }
  };

  const stopTime = () => {
    if (activity.length > 1) {
      let timeObj = {
        endTime: Date.now(),
        activity: activity,
        puppyId: props.currentId,
      };
      console.log(timeObj);
      dispatch(updateTracker(props.currentId, timeObj));
    } else {
      alert('Please select an activity');
    }
    clearInterval(countRef.current);
    setIsActive(false);
    setActivity('');
    setTime(0);
  };

  return (
    <div className={classes.root}>
      <Paper elevation={3} className={classes.paper}>
        <Typography className={classes.header} component='h1' variant='h2'>
          Potty Tracker
        </Typography>

        <Typography className={classes.header} align='center' variant='h4'>
          {formatTime()}
        </Typography>
        <div className={classes.activity}>
          <InputLabel htmlFor='select'>Puppy Activity</InputLabel>
          <NativeSelect
            id='select'
            value={activity}
            onChange={handleChange}
            inputProps={{ name: 'activity', id: 'select' }}
          >
            <option aria-label='None' value='' />
            <option value={'Food'}>Food</option>
            <option value={'Water'}>Water</option>
            <option value={'Play'}>Play</option>
            <option value={'Sleep'}>Sleep</option>
          </NativeSelect>

          {!isActive ? (
            <Button
              aria-live='polite'
              className={classes.button}
              variant={'contained'}
              size='large'
              color={'primary'}
              onClick={() => {
                startTimer();
              }}
            >
              Start
            </Button>
          ) : (
            <Button
              className={classes.button}
              variant={'contained'}
              size='large'
              color={'primary'}
              onClick={() => {
                restartTimer();
              }}
            >
              Restart
            </Button>
          )}
          <Typography variant='h6'>Potty Achieved</Typography>

          <Button
            aria-live='polite'
            className={classes.button}
            variant={'contained'}
            size='large'
            color={'secondary'}
            onClick={() => {
              stopTime(time);
            }}
          >
            Stop
          </Button>
        </div>
      </Paper>
    </div>
  );
};

export default Tracker;
