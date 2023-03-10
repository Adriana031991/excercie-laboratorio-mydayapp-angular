import { createAction, props } from '@ngrx/store';
import { Filter } from 'src/app/Model/filter.interface';

export const setFilter = createAction(
    '[FILTER] filter todo',
    props<{ filter: Filter }>()
);

// export const setFilter = createAction(
//     '[FILTER] filter todo',
//     props<{ filter: filtrosValidos }>()
//     );
