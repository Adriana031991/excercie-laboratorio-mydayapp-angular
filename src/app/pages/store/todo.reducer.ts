import { Action, createReducer, on } from '@ngrx/store';
import { ErrorModel } from 'src/app/Model/error.model';
import { Todo } from 'src/app/Model/todo.model';
import { ClearTodo, Create, CreateSuccess, Delete, Edit, Toggle, CreateFailure, ToggleSuccess, ToggleFailure, EditSuccess, EditFailure, DeleteSuccess, DeleteFailure, LoadTodos, LoadTodosSuccess, LoadTodosFailure } from './todo.action';

export interface TodoState {
    todos: Todo[];
    todo: Todo | null;
    error: ErrorModel | null;
    message: string;
    loading: boolean;
}

export const initialState: TodoState = {
    todos: [],
    todo: null,
    error: null,
    message: '',
    loading: false

};

const _todoReducer = createReducer(initialState,

    on(ClearTodo, (state): TodoState => ({
        ...state,
        todos: [],
        error: null,
        message: '',
        loading: false
    }
    )),

    on(LoadTodos, (state): TodoState => ({
        ...state,
        loading: true
    })),

    on(LoadTodosSuccess, (state, {data}): TodoState => ({
        ...state,
        loading: false,
        todos:data
    })),

    on(LoadTodosFailure, (state, {error}): TodoState => ({
        ...state,
        loading: false,
        error
    })),

    on(Create, (state): TodoState => ({
        ...state,
        loading: true
    })),


    on(CreateSuccess, (state, { data }): TodoState => ({
        ...state,
        loading: false,
        todos:  data,

    })),

    on(CreateFailure, (state, { error }): TodoState => ({
        ...state,
        loading: false,
        error

    })),


    on(Toggle, (state, { id }): TodoState => ({
        ...state,
        loading: true
    })),

    on(ToggleSuccess, (state, { data }): TodoState => ({
        ...state,
        loading: false,
        todos: data
    })),

    on(ToggleFailure, (state, { error }): TodoState => ({
        ...state,
        loading: false,
        error
    })),
    
    on(Edit, (state):TodoState => ({
        ...state,
        loading:true,
    })),

    on(EditSuccess, (state, {data }):TodoState => ({
        ...state,
        loading:false,
        todos:data
    })),

    on(EditFailure, (state, { error }):TodoState => ({
        ...state,
        loading:false,
        error
    })),

    on(Delete, (state, { id }):TodoState => ({
        ...state,
        loading:true
    })),

    on(DeleteSuccess, (state, { text }):TodoState => ({
        ...state,
        loading:false,
        message:text
    })),

    on(DeleteFailure, (state, { error }):TodoState => ({
        ...state,
        loading:false,
        error
    })),

);

export function TodoReducer(state: TodoState | undefined, action: Action) {
    return _todoReducer(state, action);
}