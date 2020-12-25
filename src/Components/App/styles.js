import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  tabStyles: {
    margin: theme.spacing(1),
  },
  tabItemStyles: {
    margin: theme.spacing(1),
  },
  appBar: {
    borderRadius: 15,
    margin: '1.8em 0',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  heading: {
    color: 'rgba(0,183,255, 1)',
  },
  image: {
    marginLeft: '1em',
  },
}));
