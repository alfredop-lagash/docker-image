import React, { useCallback } from 'react';
import { useSelector } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { Container, Link, Typography } from '@material-ui/core';

import logo from '../../resources/svg/logo.svg';
import { exampleApi } from '../../services';
import { setText, setStatus } from '../../actions/example';
import { makeGetData, makeGetStatus } from '../../selectors/example';
import { useActions } from '../../hooks';
import { Example as ExampleComponent } from '../../components';
import { REACT_URL } from '../../config/constants';
import { WELCOME_MSG, LEARN_REACT_MSG, ERROR_MSG } from '../../config/messages';

import useStyles from './styles';

const { todos: todosApi } = exampleApi;

const Example = () => {
  const classes = useStyles();
  const {
    data: { text },
    status: { fetching }
  } = useSelector(
    createStructuredSelector({
      data: makeGetData(),
      status: makeGetStatus()
    })
  );
  const { onSetStatus, onSetText } = useActions({
    onSetStatus: setStatus,
    onSetText: setText
  });

  const handleFetchText = useCallback(async () => {
    try {
      onSetStatus('fetching', true);

      const id = Math.floor(Math.random() * 100 + 1);
      const { data } = await todosApi.getTodo(id);
      const { title } = data || {};

      onSetText(title || '');
    } catch {
      // eslint-disable-next-line no-alert
      alert(ERROR_MSG);
    } finally {
      onSetStatus('fetching', false);
    }
  }, [onSetStatus, onSetText]);

  return (
    <Container className={classes.container} maxWidth={false}>
      <img className={classes.logo} src={logo} alt='logo' />
      <Typography className={classes.title} variant='h4'>
        {WELCOME_MSG}
      </Typography>
      <ExampleComponent
        text={text}
        fetching={fetching}
        onFetchText={handleFetchText}
      />
      <Link
        className={classes.link}
        href={REACT_URL}
        target='_blank'
        rel='noopener noreferrer'
      >
        {LEARN_REACT_MSG}
      </Link>
    </Container>
  );
};

export default Example;
