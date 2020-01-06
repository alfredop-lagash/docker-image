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
import DeleteIcon from '@material-ui/icons/Delete';
import HomeIcon from '@material-ui/icons/Home';

import { USERS_MSG } from '../../config/messages';
import { setDeleteUser } from '../../actions/users';

import Formulario from './formulario';

const Users = () => {
  const dispatch = useDispatch();
  const { saveUsers } = useSelector(({ users }) => users);
  const handleGoback = useCallback(() => dispatch(goBack()), [dispatch]);
  const handleSetDeleteUser = useCallback(
    item => () => dispatch(setDeleteUser(item)),
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
      <Formulario
        First={menu.first}
        Last={menu.last}
        Email={menu.email}
        Index={index}
      />
      <IconButton
        aria-label='delete'
        onClick={handleSetDeleteUser(index)}
        className={classes.margin}
      >
        <DeleteIcon color='secondary' />
      </IconButton>
    </ListItem>
  );

  return (
    <div className={classes.root}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={12}>
          <div>
            <Typography variant='h4' className={classes.title}>
              {USERS_MSG}
              <IconButton
                aria-label='home'
                onClick={handleGoback}
                className={classes.Button}
              >
                <HomeIcon color='primary' />
              </IconButton>
            </Typography>
          </div>
          <List className={classes.root}>{saveUsers.map(renderUsers)}</List>
        </Grid>
      </Grid>
    </div>
  );
};

export default Users;
