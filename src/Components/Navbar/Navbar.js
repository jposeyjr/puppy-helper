import React, { useState, useEffect } from 'react';
import { Tab, Tabs } from '@material-ui/core';
import useStyles from './styles';
import { Link, useLocation } from 'react-router-dom';
const Navbar = () => {
  const [value, setValue] = useState(0);
  const classes = useStyles();

  const { pathname } = useLocation();
  useEffect(() => {
    //adjusting current active tab even with reload and accounting for dynamic blog posts
    switch (pathname) {
      case '/':
        setValue(0);
        break;
      case '/results':
        setValue(1);
        break;
      default:
        setValue(0);
        break;
    }
  }, [pathname]);

  return (
    <Tabs
      variant={'fullWidth'}
      className={classes.tabStyles}
      aria-label='navigation bar with home, blog and contact'
      value={value}
      onChange={(e, value) => setValue(value)}
    >
      <Tab
        className={classes.tabItemStyles}
        label={'Home'}
        to='/'
        component={Link}
      />
      <Tab
        className={classes.tabItemStyles}
        label={'Results'}
        to='/results'
        component={Link}
      />
    </Tabs>
  );
};

export default Navbar;
