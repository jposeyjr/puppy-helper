import React from 'react';
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from '@material-ui/core/';
import DeleteIcon from '@material-ui/icons/Delete';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import { useDispatch } from 'react-redux';
import moment from 'moment';
import { deletePuppy } from '../../../Actions/puppy';
import useStyles from './styles';

const Puppies = ({ puppy, setCurrentId }) => {
  const dispatch = useDispatch();
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardMedia
        component='img'
        alt={puppy.name}
        image={
          puppy.photo ||
          'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'
        }
        title={puppy.name}
      />
      <CardContent>
        <div className={classes.owner}>
          <Typography variant='h4'>{puppy.name}</Typography>
          <Button size='small' onClick={() => setCurrentId(puppy._id)}>
            <MoreHorizIcon fontSize='default' />
          </Button>
        </div>
        <Typography gutterBottom variant='h6' component='h2'>
          Breed: {puppy.breed}
        </Typography>
        <Typography gutterBottom variant='h6' component='h2'>
          Birthday: {moment(puppy.birthday).format('ll')}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          size='small'
          color='primary'
          onClick={() => dispatch(deletePuppy(puppy._id))}
        >
          <DeleteIcon fontSize='small' /> Delete
        </Button>
      </CardActions>
    </Card>
  );
};

export default Puppies;