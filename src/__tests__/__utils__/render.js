/* eslint-disable react/prop-types */
import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { MuiThemeProvider } from '@material-ui/core/styles';

import { store, history } from '../../store';
import theme from '../../theme';

const BaseProvider = ({ children }) => (
  <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>
);

const BaseStoreProvider = ({ children }) => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <BaseProvider>{children}</BaseProvider>
    </ConnectedRouter>
  </Provider>
);

const renderProviderWrapper = (ui, options = {}) =>
  render(ui, { wrapper: BaseProvider, ...options });

const renderStoreProviderWrapper = (ui, options = {}) =>
  render(ui, { wrapper: BaseStoreProvider, ...options });

export { renderProviderWrapper, renderStoreProviderWrapper };
