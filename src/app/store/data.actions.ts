// data.actions.ts

import { createAction, props } from '@ngrx/store';
import { user } from './data.state';

export const LOAD_USERS_SUCCESS = '[User] Load Users Success';
export const LOAD_USERS = '[User] Load Users';

export const loadUsers = createAction(LOAD_USERS);
export const loadUsersSuccess = createAction(LOAD_USERS_SUCCESS, props<{ users: user[] }>());



