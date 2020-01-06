const overrides = {
  MuiInput: {
    input: {
      textOverflow: 'ellipsis'
    }
  },
  MuiInputBase: {
    input: {
      '&:-webkit-autofill': {
        transitionDelay: '9999999s'
      }
    }
  },
  MuiTooltip: {
    tooltip: {
      fontSize: 13
    }
  }
};

export default overrides;
