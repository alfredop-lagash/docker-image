import React from 'react';
import { CssBaseline } from '@material-ui/core';
import { MuiThemeProvider } from '@material-ui/core/styles';

import { Routes } from '../../routes';
import theme from '../../theme';

const Root = () => (
  <MuiThemeProvider theme={theme}>
    <CssBaseline />
    <Routes />
  </MuiThemeProvider>
);

export default Root;
