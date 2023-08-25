import {createSlice} from '@reduxjs/toolkit';

export interface UserType {
  displayName: string;
  email: string;
  token: Object;
  isLoggedIn: boolean;
  uri: string;
}

const initialState: UserType = {
  displayName: '',
  email: '',
  token: {},
  isLoggedIn: false,
  uri: 'https://cdn.dribbble.com/users/1577045/screenshots/4914645/media/028d394ffb00cb7a4b2ef9915a384fd9.png?compress=1&resize=400x300&vertical=top',
};

export const User = createSlice({
  name: 'user',
  initialState: initialState,
  reducers: {
    resetToInitialState: () => {
      return initialState;
    },

    login: (state, action) => {
      return {...state, ...{isLoggedIn: true}, ...action.payload};
    },
  },
});

export const {resetToInitialState, login} = User.actions;
export default User.reducer;
