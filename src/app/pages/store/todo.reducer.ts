import { Action, createReducer, on } from '@ngrx/store';
import { ErrorModel } from 'src/app/Model/error.model';
import { Filter } from 'src/app/Model/filter.interface';
import { Todo } from 'src/app/Model/todo.model';
import { ClearTodo, Create, CreateSuccess, Delete, Edit, Toggle, CreateFailure, ToggleSuccess, ToggleFailure, EditSuccess, EditFailure, DeleteSuccess, DeleteFailure, LoadTodos, LoadTodosSuccess, LoadTodosFailure, FilterTodo, FilterTodoSuccess, FilterTodoFailure, ClearTodoSuccess, ClearTodoFailure } from './todo.action';

export interface TodoState {
    todos: Todo[];
    error: ErrorModel | null;
    message: string;
    loading: boolean;
    filter:Filter|null;
}

export const initialState: TodoState = {
    todos: [],
    error: null,
    message: '',
    loading: false,
    filter:null

};

const _todoReducer = createReducer(initialState,

    on(ClearTodo, (state): TodoState => ({
        ...state,
    }
    )),
    on(ClearTodoSuccess, (state, {data}): TodoState => ({
        ...state,
        todos:data
    }
    )),
    on(ClearTodoFailure, (state, {error}): TodoState => ({
        ...state,
        error
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

    on(FilterTodo, (state, {filter}):TodoState => ({
        ...state,
        loading:true,
        filter
    })),

    on(FilterTodoSuccess, (state, { data }):TodoState => ({
        ...state,
        loading:false,
        todos:data
    })),

    on(FilterTodoFailure, (state, { error }):TodoState => ({
        ...state,
        loading:false,
        error
    })),

);

export function TodoReducer(state: TodoState | undefined, action: Action) {
    return _todoReducer(state, action);
}