import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';
import { esES } from '@material-ui/core/locale';

import breakpoints from './breakpoints';
import overrides from './overrides';
import palette from './palette';
import props from './props';

const theme = responsiveFontSizes(
  createMuiTheme(
    {
      breakpoints,
      overrides,
      palette,
      props
    },
    esES
  )
);

export default theme;
