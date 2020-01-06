import React, { useCallback } from 'react';
import { goBack } from 'connected-react-router';
import { useDispatch, useSelector } from 'react-redux';
import {
  makeStyles,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Avatar,
  Typography,
  IconButton,
  Grid
} from '@material-ui/core';
import { Save, Home } from '@material-ui/icons';

import { setRamdom, setSaveUsers } from '../../actions/users';
import usersApi from '../../services/ramdom';
import { useMount } from '../../hooks';
import { RAMDOM_USERS_MSG } from '../../config/messages';

const Ramdom = () => {
  const dispatch = useDispatch();

  const { ramdomUsers } = useSelector(({ users }) => users);

  const handleGoback = useCallback(() => dispatch(goBack()), [dispatch]);

  const handleSetRamdom = useCallback(item => dispatch(setRamdom(item)), [
    dispatch
  ]);

  const handleSendSave = useCallback(
    item => () => dispatch(setSaveUsers(item)),
    [dispatch]
  );
  const useStyles = makeStyles(theme => ({
    root: {
      width: '100%',
      backgroundColor: theme.palette.background.paper
    },
    margin: { margin: theme.spacing(1) },
    inline: {
      display: 'inline'
    },
    title: {
      margin: theme.spacing(4, 4, 2)
    },
    Button: {
      margin: theme.spacing(2)
    }
  }));

  const classes = useStyles();

  useMount(async () => {
    const { data } = await usersApi().getUsers();

    if (Array.isArray(data.results)) {
      handleSetRamdom(data.results);
    }
  });

  const renderUsers = (menu, index) => (
    <ListItem alignItems='flex-start' key={menu.email}>
      <ListItemAvatar>
        <Avatar src={menu.picture} />
      </ListItemAvatar>
      <ListItemText
        primary={`${menu.first} ${menu.last}`}
        secondary={
          <React.Fragment>
            <Typography
              component='span'
              variant='body2'
              className={classes.inline}
              color='textPrimary'
            >
              {menu.email}
            </Typography>
          </React.Fragment>
        }
      />
      <IconButton
        aria-label='delete'
        onClick={handleSendSave(index)}
        className={classes.margin}
      >
        <Save color='secondary' />
      </IconButton>
    </ListItem>
  );

  return (
    <div className={classes.root}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={12}>
          <div>
            <Typography variant='h4' className={classes.title}>
              {RAMDOM_USERS_MSG}
              <IconButton
                aria-label='home'
                onClick={handleGoback}
                className={classes.Button}
              >
                <Home color='primary' />
              </IconButton>
            </Typography>
          </div>
          <List className={classes.root}>{ramdomUsers.map(renderUsers)}</List>
        </Grid>
      </Grid>
    </div>
  );
};

export default Ramdom;
