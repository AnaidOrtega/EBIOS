import {configureStore} from '@reduxjs/toolkit';
import CounterSlice from './feature/CounterSlice';
import Usuario from './feature/Usuario';

export const store = configureStore({
  reducer: {
    CounterSlice: CounterSlice,
    Usuario: Usuario,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
