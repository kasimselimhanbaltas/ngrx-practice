// data.selectors.ts
import { createSelector } from '@ngrx/store';
import { DataState } from './data.state';

// Örnek bir selector
export const selectData = (state: { data: DataState }) => state.data.data;
