import React, { useCallback, useState } from 'react';
import useForm from 'react-hook-form';
import { useDispatch } from 'react-redux';
import {
  TextField,
  Dialog,
  IconButton,
  DialogContent,
  makeStyles,
  Button,
  DialogActions,
  DialogTitle
} from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';

import {
  EDIT_USER_MSG,
  SAVE_MSG,
  CANCEL_MSG,
  FIRST_NAME_MSG,
  LAST_NAME_MSG,
  EMAIL_NAME_MSG
} from '../../config/messages';
import { setEditUser } from '../../actions/users';

const Formulario = ({ First, Last, Email, Index }) => {
  const dispatch = useDispatch();
  const handleSetEditUser = useCallback(
    (index, first, last, email) =>
      dispatch(setEditUser(index, first, last, email)),
    [dispatch]
  );
  const { register, handleSubmit, errors } = useForm({
    defaultValues: {
      FirstName: `${First}`,
      LastName: `${Last}`,
      Email: `${Email}`,
      Index: `${Index}`
    }
  });
  const onSubmit = data => {
    handleSetEditUser(data.Index, data.FirstName, data.LastName, data.Email);
  };

  const useStyles = makeStyles(theme => ({
    form: {
      display: 'flex',
      flexDirection: 'column',
      margin: 'auto',
      width: 'fit-content'
    },
    formControl: {
      marginTop: theme.spacing(2),
      minWidth: 120
    },
    formControlLabel: {
      marginTop: theme.spacing(1)
    }
  }));
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const handleClickOpen = useCallback(() => setOpen(true), [setOpen]);
  const handleClose = useCallback(() => setOpen(false), [setOpen]);

  const handleCloseSuccessful = useCallback(() => {
    if (errors.FirstName || errors.LastName || errors.Email) {
      setOpen(true);
    } else {
      setOpen(false);
    }
  }, [errors.Email, errors.FirstName, errors.LastName]);

  return (
    <div className={classes.form}>
      <IconButton aria-label='edit' onClick={handleClickOpen} color='primary'>
        <EditIcon />
      </IconButton>
      <Dialog open={open} aria-labelledby='form-dialog-title'>
        <DialogTitle id='form-dialog-title'>{EDIT_USER_MSG}</DialogTitle>
        <form onSubmit={handleSubmit(onSubmit)}>
          <DialogContent>
            <TextField
              id='1'
              label={FIRST_NAME_MSG}
              name='FirstName'
              fullWidth
              error={errors.FirstName && true}
              helperText={errors.FirstName && errors.FirstName.message}
              margin='normal'
              inputRef={register({ required: 'This field is requred' })}
            />
            <TextField
              id='2'
              label={LAST_NAME_MSG}
              name='LastName'
              fullWidth
              error={errors.LastName && true}
              helperText={errors.LastName && errors.LastName.message}
              margin='normal'
              inputRef={register({ required: 'This field is requred' })}
            />
            <TextField
              id='3'
              label={EMAIL_NAME_MSG}
              name='Email'
              fullWidth
              error={errors.Email && true}
              helperText={errors.Email && errors.Email.message}
              margin='normal'
              inputRef={register({
                required: 'This field is requred',
                pattern: {
                  value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/i,
                  message: 'Invalid email'
                }
              })}
            />
            <input
              type='hidden'
              name='Index'
              ref={register({ required: true })}
            />
          </DialogContent>
          <DialogActions>
            <Button
              type='submit'
              color='primary'
              onClick={handleCloseSuccessful}
            >
              {SAVE_MSG}
            </Button>
            <Button onClick={handleClose} color='primary'>
              {CANCEL_MSG}
            </Button>
          </DialogActions>
        </form>
      </Dialog>
    </div>
  );
};

export default Formulario;
