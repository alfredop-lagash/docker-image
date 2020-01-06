import { createReducer } from 'reduxsauce';
import produce from 'immer';

import {
  SET_RAMDOM,
  SET_SAVE_USERS,
  SET_DELETE_USER,
  SET_EDIT_USER
} from '../actions/users';

const INITIAL_STATE = {
  ramdomUsers: [],
  saveUsers: []
};

const setRamdom = produce(({ ramdomUsers }, { index }) => {
  index.forEach(item => {
    ramdomUsers.push({
      first: item.name.first,
      last: item.name.last,
      email: item.email,
      picture: item.picture.large
    });
  });
});

const setSaveUsers = produce((draft, { index }) => {
  draft.saveUsers.push(draft.ramdomUsers[index]);
  draft.ramdomUsers = draft.ramdomUsers.filter((p, i) => i !== index);
});

const setDeleteUser = produce((draft, { index }) => {
  draft.saveUsers = draft.saveUsers.filter((p, i) => i !== index);
});

const setEditUser = produce(
  (draft, { index, valueFirst, valueLast, valueEmail }) => {
    draft.saveUsers[index].email = valueEmail;
    draft.saveUsers[index].first = valueFirst;
    draft.saveUsers[index].last = valueLast;
  }
);

const reducer = createReducer(INITIAL_STATE, {
  [SET_RAMDOM]: setRamdom,
  [SET_SAVE_USERS]: setSaveUsers,
  [SET_DELETE_USER]: setDeleteUser,
  [SET_EDIT_USER]: setEditUser
});

export default reducer;
