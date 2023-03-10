import { Action, createReducer, on, State } from '@ngrx/store';
import { setFilter } from './filter.action';
import { Filter, FilterState } from 'src/app/Model/filter.interface';


export const initialState: FilterState = {
  validateFilter: Filter.All
};

const _filterReducer = createReducer(initialState,

  on(setFilter, (state, { filter }): FilterState => ({
    ...state,
    validateFilter:filter
  })),

);


export function FilterReducer(state: FilterState | undefined, action: Action) {
  return _filterReducer(state, action);
}

// export const initialState: filterState ={
//   filtrosValidos: 'todos'
// };

// const _filterReducer = createReducer(initialState,

//   on(setFilter, (state, { filter }):filterState => ({
//     ...state,
//     filtrosValidos: filter })),

// );


// export function FilterReducer(state: filterState | undefined, action: Action) {
//   return _filterReducer(state, action);
// }