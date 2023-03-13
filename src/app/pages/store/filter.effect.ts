import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, exhaustMap, map, of } from "rxjs";
import { TodoService } from "../services/todo-service.service";
import * as action from './filter.action';

@Injectable()
export class TodoEffects {


    constructor(
        private actions$: Actions,
        private service: TodoService
    ) { }

    filterTodos$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(action.setFilter),
            exhaustMap(
                ({ filter }) => this.service.filterTodos(filter).pipe(
                    map((data) => {
      console.log('entra2');

                        return action.setFilterSuccess({ todos: data })
                    }
                    ),
                    catchError((error) => of(action.setFilterFailure({ error })))
                )
            )
        )
    });
}