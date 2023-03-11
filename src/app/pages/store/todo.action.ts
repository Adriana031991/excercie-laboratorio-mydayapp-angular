import { createAction, props } from '@ngrx/store';
import { ErrorModel } from 'src/app/Model/error.model';
import { Filter } from 'src/app/Model/filter.interface';
import { Todo } from 'src/app/Model/todo.model';

export const LoadTodos = createAction('[TODO] LoadTodos todo');
export const LoadTodosSuccess = createAction('[TODO] LoadTodos todo success', props<{ data: Todo[] }>());
export const LoadTodosFailure = createAction('[TODO] LoadTodos todo failure', props<{ error: ErrorModel }>());

export const Create = createAction('[TODO] create todo', props<{ text: string, todos: Todo[] }>());
export const CreateSuccess = createAction('[TODO] create todo success', props<{ data: Todo[] }>());
export const CreateFailure = createAction('[TODO] create todo failure', props<{ error: ErrorModel }>());

export const Toggle = createAction('[TODO] toggle todo', props<{ id: string }>());
export const ToggleSuccess = createAction('[TODO] toggle todo success', props<{ data: Todo[] }>());
export const ToggleFailure = createAction('[TODO] toggle todo failure', props<{ error: ErrorModel }>());

export const Edit = createAction('[TODO] edit todo', props<{ id: string, title: string }>());
// export const Edit = createAction('[TODO] edit todo', props<{ data: Todo }>());
export const EditSuccess = createAction('[TODO] edit todo success', props<{ data: Todo[] }>());
export const EditFailure = createAction('[TODO] edit todo failure', props<{ error: ErrorModel }>());

export const Delete = createAction('[TODO] delete todo', props<{ id: string }>());
export const DeleteSuccess = createAction('[TODO] delete todo success', props<{ text: string }>());
export const DeleteFailure = createAction('[TODO] delete todo failure', props<{ error: ErrorModel }>());

export const FilterTodo = createAction('[TODO] filter todo', props<{ filter: Filter }>());
export const FilterTodoSuccess = createAction('[TODO] filter todo success', props<{ data: Todo[]  }>());
export const FilterTodoFailure = createAction('[TODO] filter todo failure', props<{ error: ErrorModel }>());

export const ClearTodo = createAction('[TODO] delete todo');