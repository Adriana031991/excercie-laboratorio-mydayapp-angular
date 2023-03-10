import { createFeatureSelector, createSelector } from "@ngrx/store";
import { TodoState } from "./todo.reducer";

const selectTodo = createFeatureSelector<TodoState>('todos');

const todos = createSelector(
    selectTodo,
    (state: TodoState) => state.todos
);

const todo = createSelector(
    selectTodo,
    (state: TodoState) => state.todo
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
    todo,
    loading,
    error,
}