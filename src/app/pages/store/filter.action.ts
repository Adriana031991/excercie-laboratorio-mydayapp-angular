import { createAction, props } from '@ngrx/store';
import { Filter } from 'src/app/Model/filter.interface';
import { Todo } from 'src/app/Model/todo.model';
import { ErrorModel } from '../../Model/error.model';

export const setFilter = createAction(
    '[FILTER] filter todo',
    props<{ filter: Filter }>()
);

export const setFilterSuccess = createAction(
    '[FILTER] filter todo success',
    props<{ todos: Todo[] }>()
);

export const setFilterFailure = createAction(
    '[FILTER] filter todo failure',
    props<{ error: ErrorModel }>()
);


