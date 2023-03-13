import { ActionReducerMap } from '@ngrx/store';
import { FilterReducer, FilterState } from './pages/store/filter.reducer';
import { TodoReducer, TodoState } from './pages/store/todo.reducer';


export interface AppState {
   todos: TodoState,
   filter: FilterState

}

export const appReducers: ActionReducerMap<AppState> = {
   todos: TodoReducer,
   filter: FilterReducer
}