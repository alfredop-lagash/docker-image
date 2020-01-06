import React from 'react';
import PropTypes from 'prop-types';
import { Button, Grid, Typography } from '@material-ui/core';

import { FETCH_TEXT_MSG, FETCHING_MSG } from '../../config/messages';

import ids from './identifiers';
import useStyles from './styles';

const Example = ({ text, fetching, onFetchText }) => {
  const classes = useStyles();

  return (
    <Grid className={classes.container} item>
      <Button
        data-testid={ids.BUTTON_FETCH_TEXT}
        className={classes.button}
        color='primary'
        variant='outlined'
        disabled={fetching}
        onClick={onFetchText}
      >
        {FETCH_TEXT_MSG}
      </Button>
      <Typography className={classes.text} variant='body1'>
        {fetching ? FETCHING_MSG : text}
      </Typography>
    </Grid>
  );
};

Example.propTypes = {
  text: PropTypes.string.isRequired,
  fetching: PropTypes.bool.isRequired,
  onFetchText: PropTypes.func.isRequired
};

export default Example;
