// data.reducer.ts

import { Action, createReducer, on } from '@ngrx/store';
import { DataState } from './data.state';
import { loadUsers, loadUsersSuccess } from './data.actions';



export const initialState: DataState = {
  data: [], // Change this to match the expected data type
};

const itemsReducer = createReducer(
  initialState,
  on(loadUsersSuccess, (state, payload) => ({ ...state, data: payload.users }))
);

export function reducer(state: DataState | undefined, action: Action) {
  return itemsReducer(state, action);
}
