import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  button: {
    marginTop: 30,
    width: 150
  },
  text: {
    overflowX: 'hidden',
    textAlign: 'center',
    marginTop: 10,
    minHeight: 60
  }
}));

export default useStyles;
