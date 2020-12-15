import puppyImg from '../../images/puppy.svg';
import { AppBar, Typography } from '@material-ui/core';
import useStyles from './styles';

const Header = () => {
  const classes = useStyles();
  return (
    <AppBar className={classes.appBar} position='static' color='inherit'>
      <Typography className={classes.heading} variant='h2' align='center'>
        Puppy Helper
      </Typography>
      <img className={classes.image} src={puppyImg} alt='icon' height='60' />
    </AppBar>
  );
};

export default Header;
