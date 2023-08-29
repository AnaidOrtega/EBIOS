import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import type {RootState} from '../store';

// Define a type for the slice state
interface CounterState {
  Name: String;
  AccessToken: String;
}

// Define the initial state using that type
const initialState: CounterState = {
  Name: '',
  AccessToken: '',
};

export const Usuario = createSlice({
  name: 'Usuario',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    // Use the PayloadAction type to declare the contents of `action.payload`
    Login: (state, action: PayloadAction<String>) => {
      state.Name = action.payload;
    },
    Logout: state => {
      state.Name = '';
      state.AccessToken = '';
    },
    SetAccessToken: (state, action: PayloadAction<String>) => {
      state.AccessToken = action.payload;
    },
  },
});

export const {Login, Logout, SetAccessToken} = Usuario.actions;

// Other code such as selectors can use the imported `RootState` type
export const SelectName = (state: RootState) => state.Usuario.Name;
export const SelectAccessToken = (state: RootState) =>
  state.Usuario.AccessToken;

export default Usuario.reducer;
