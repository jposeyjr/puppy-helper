import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  formControl: {
    minWidth: 200,
    background: '#FFFFFF',
    color: '#000000',
    borderRadius: 12,
  },
  select: {
    margin: theme.spacing(1),
    padding: theme.spacing(0.5),
  },
  label: {
    margin: theme.spacing(1),
  },
}));
