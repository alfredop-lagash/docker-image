import React, { useCallback } from 'react';
import { Container, Button } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { push } from 'connected-react-router';

import { RAMDOM, USERS } from '../../routes/paths';
import { RAMDOM_USERS_MSG, USERS_MSG } from '../../config/messages';

import useStyles from './styles';

const Home = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const handleNavigate = useCallback(path => () => dispatch(push(path)), [
    dispatch
  ]);

  return (
    <Container className={classes.container} maxWidth={false}>
      <Button
        onClick={handleNavigate(RAMDOM)}
        variant='contained'
        color='primary'
      >
        {RAMDOM_USERS_MSG}
      </Button>
      <Button
        onClick={handleNavigate(USERS)}
        variant='contained'
        color='secondary'
      >
        {USERS_MSG}
      </Button>
    </Container>
  );
};

export default Home;
