import {createSlice} from '@reduxjs/toolkit';

export interface UserType {
  firstName: string;
  lastName: string;
  userId: number;
  uri: string;
}

const initialState: UserType = {
  firstName: 'Jerick',
  lastName: 'Dela Cruz',
  userId: 12,
  uri: 'https://cdn.dribbble.com/users/1577045/screenshots/4914645/media/028d394ffb00cb7a4b2ef9915a384fd9.png?compress=1&resize=400x300&vertical=top',
};

export const User = createSlice({
  name: 'user',
  initialState: initialState,
  reducers: {
    updateFirstName: (state, action) => {
      state.firstName = action.payload.firstName;
    },
    resetToInitialState: () => {
      return initialState;
    },
  },
});

export const {updateFirstName, resetToInitialState} = User.actions;
export default User.reducer;
