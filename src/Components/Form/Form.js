import React, { useState, useEffect } from 'react';
import { TextField, Button, Typography, Paper } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { createPuppy, updatePuppy } from '../../Actions/puppy';
import FileUpload from '../FileUpload/FileUpload';
import useStyles from './styles';

const Form = ({ currentId, setCurrentId }) => {
  const [puppyData, setPuppyData] = useState({
    name: '',
    birthday: '',
    breed: '',
    weight: '',
    height: '',
    photo: '',
  });
  const puppy = useSelector((state) =>
    currentId ? state.puppies.find((dog) => dog._id === currentId) : null
  );
  const dispatch = useDispatch();
  const classes = useStyles();

  useEffect(() => {
    if (puppy) setPuppyData(puppy);
  }, [puppy]);

  const clear = () => {
    setCurrentId(0);
    setPuppyData({
      name: '',
      birthday: '',
      breed: '',
      weight: '',
      height: '',
      photo: '',
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (currentId === 0) {
      dispatch(createPuppy(puppyData));
      clear();
    } else {
      dispatch(updatePuppy(currentId, puppyData));
      clear();
    }
  };

  return (
    <Paper className={classes.paper}>
      <form
        autoComplete='off'
        noValidate
        className={`${classes.root} ${classes.form}`}
        onSubmit={handleSubmit}
      >
        <Typography variant='h6'>
          {currentId ? `Editing "${puppy.name}"` : 'Adding a Puppy'}
        </Typography>
        <TextField
          name='name'
          variant='outlined'
          label='Name'
          helperText='Please enter your puppies name'
          fullWidth
          value={puppyData.name}
          onChange={(e) => setPuppyData({ ...puppyData, name: e.target.value })}
        />
        <TextField
          name='birthday'
          type='date'
          helperText='Please enter your puppies birthday'
          variant='outlined'
          label='Birthday'
          InputLabelProps={{ shrink: true }}
          fullWidth
          value={puppyData.birthday}
          onChange={(e) =>
            setPuppyData({ ...puppyData, birthday: e.target.value })
          }
        />
        <TextField
          name='breed'
          variant='outlined'
          helperText='Please enter your puppies breed'
          label='Breed'
          fullWidth
          multiline
          rows={3}
          value={puppyData.breed}
          onChange={(e) =>
            setPuppyData({ ...puppyData, breed: e.target.value })
          }
        />
        <TextField
          name='weight'
          variant='outlined'
          helperText='Optional entry for puppies weight'
          label='*Weight Optional'
          fullWidth
          value={puppyData.weight}
          onChange={(e) =>
            setPuppyData({ ...puppyData, weight: e.target.value })
          }
        />
        <TextField
          name='height'
          variant='outlined'
          helperText='Optional entry for puppies height'
          label='*Height Optional'
          fullWidth
          value={puppyData.height}
          onChange={(e) =>
            setPuppyData({ ...puppyData, height: e.target.value })
          }
        />
        <div className={classes.fileInput}>
          <FileUpload
            accept={'.jpeg, .png, .jpg'}
            multiple={false}
            onDone={({ base64 }) =>
              setPuppyData({ ...puppyData, photo: base64 })
            }
          />
        </div>
        <Button
          className={classes.buttonSubmit}
          variant='contained'
          color='primary'
          size='medium'
          type='submit'
          fullWidth
        >
          Submit
        </Button>
        <Button
          variant='contained'
          color='secondary'
          size='medium'
          onClick={clear}
          fullWidth
        >
          Clear
        </Button>
      </form>
    </Paper>
  );
};

export default Form;
