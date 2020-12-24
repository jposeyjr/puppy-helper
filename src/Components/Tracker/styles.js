import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
  },
  paper: {
    padding: theme.spacing(3),
    margin: theme.spacing(1),
    alignContent: 'center',
    flexWrap: 'wrap',
    flexDirection: 'column',
  },
  header: {
    margin: theme.spacing(1),
  },
  activity: {
    padding: theme.spacing(2),
    display: 'flex',
    flexDirection: 'column',
    margin: theme.spacing(2),
  },
  button: {
    margin: theme.spacing(1),
  },
}));
