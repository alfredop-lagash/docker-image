import { createActions } from 'reduxsauce';

const { Types, Creators } = createActions(
  {
    setText: ['value'],
    setStatus: ['key', 'value']
  },
  {
    prefix: 'EXAMPLE/'
  }
);

const { setText, setStatus } = Creators;

const { SET_TEXT, SET_STATUS } = Types;

export { Types, setText, setStatus, SET_TEXT, SET_STATUS };

export default Creators;
