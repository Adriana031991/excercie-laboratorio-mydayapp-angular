import { createFeatureSelector, createSelector } from "@ngrx/store";
import { TodoState } from "./todo.reducer";
import { filter } from './filter.select';

const selectTodo = createFeatureSelector<TodoState>('todos');

const todos = createSelector(
    selectTodo,
    (state: TodoState) => state.todos
);

const filterTodo = createSelector(
    selectTodo,
    (state: TodoState) => state.filter
);

const loading = createSelector(
    selectTodo,
    (state: TodoState) => state.loading
);

const error = createSelector(
    selectTodo,
    (state: TodoState) => state.error
);


export const todoQuery = {
    todos,
    loading,
    error,
    filterTodo
}