import { createActions } from 'reduxsauce';

const { Types, Creators } = createActions(
  {
    setRamdom: ['index'],
    setSaveUsers: ['index'],
    setDeleteUser: ['index'],
    setEditUser: ['index', 'valueFirst', 'valueLast', 'valueEmail']
  },
  {
    prefix: 'USERS/'
  }
);
const { setRamdom, setSaveUsers, setDeleteUser, setEditUser } = Creators;

const { SET_RAMDOM, SET_SAVE_USERS, SET_DELETE_USER, SET_EDIT_USER } = Types;

export {
  Types,
  setRamdom,
  setSaveUsers,
  setDeleteUser,
  setEditUser,
  SET_RAMDOM,
  SET_SAVE_USERS,
  SET_DELETE_USER,
  SET_EDIT_USER
};
export default Creators;
