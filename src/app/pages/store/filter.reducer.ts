import { Action, createReducer, on } from '@ngrx/store';
import { setFilter, setFilterSuccess, setFilterFailure } from './filter.action';
import { Todo } from 'src/app/Model/todo.model';
import { ErrorModel } from 'src/app/Model/error.model';

export interface FilterState {
  validateFilter: Filter;
  todos:Todo[];
  error: ErrorModel | null;
}

export enum Filter {
  All = "All",
  completed = "Completed",
  pending = "Pending",
}

export const initialState: FilterState = {
  validateFilter: Filter.All,
  todos: [],
  error: null
};

const _filterReducer = createReducer(initialState,

  on(setFilter, (state, { filter }): FilterState => ({
    ...state,
    validateFilter: filter
  })),

  on(setFilterSuccess, (state, { todos }): FilterState => ({
    ...state,
    todos
  })),

  on(setFilterFailure, (state, { error }): FilterState => ({
    ...state,
    error
  })),

);


export function FilterReducer(state: FilterState | undefined, action: Action) {
  return _filterReducer(state, action);
}

