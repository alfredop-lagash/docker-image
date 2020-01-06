import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  container: {
    backgroundColor: '#282c34',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#FFF'
  },
  logo: {
    height: '40vmin'
  },
  title: {
    color: '#09d3ac',
    textAlign: 'center',
    marginBottom: 20
  },
  link: {
    color: '#09d3ac'
  }
}));

export default useStyles;
