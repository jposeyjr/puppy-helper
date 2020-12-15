import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  tracker: {
    padding: theme.spacing(3),
    margin: theme.spacing(1),
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  paper: {
    padding: theme.spacing(3),
  },
  margin: {
    margin: theme.spacing(1),
  },
}));
