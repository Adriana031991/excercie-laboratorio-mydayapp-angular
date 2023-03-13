import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, EMPTY, exhaustMap, map, mergeMap, of, tap } from "rxjs";
import { Todo } from "src/app/Model/todo.model";
import { TodoService } from "../services/todo-service.service";
import * as action from './todo.action';
import { DeleteSuccess } from './todo.action';

@Injectable()
export class TodoEffects {

    constructor(
        private actions$: Actions,
        private service: TodoService
    ) { }

    createTodo$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(action.Create),
            exhaustMap(
                ({text, todos}) => this.service.addTodo(text, todos).pipe(
                    map((data) => {
                        return action.CreateSuccess({ data })
                    }
                    ),
                    catchError((error) => of(action.CreateFailure({ error })))
                )
            )
        )
    });

    loadTodos$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(action.LoadTodos),
            exhaustMap(
                () => this.service.getTodos().pipe(
                    map((data) => {
                        return action.LoadTodosSuccess({ data })
                    }
                    ),
                    catchError((error) => of(action.LoadTodosFailure({ error })))
                )
            )
        )
    });

    toggleCompletedTodos$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(action.Toggle),
            exhaustMap(
                ({id}) => this.service.toggleCompletedTodo(id).pipe(
                    map((data) => {
                        return action.ToggleSuccess({ data })
                    }
                    ),
                    catchError((error) => of(action.ToggleFailure({ error })))
                )
            )
        )
    });

    editTodos$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(action.Edit),
            exhaustMap(
                ({id, title}) => this.service.editTodo(id, title).pipe(
                    map((data) => {
                        return action.EditSuccess({ data })
                    }
                    ),
                    catchError((error) => of(action.EditFailure({ error })))
                )
            )
        )
    });

    deleteTodos$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(action.Delete),
            exhaustMap(
                ({id}) => this.service.deleteTodo(id).pipe(
                    map((data) => {
                        return action.DeleteSuccess({ text:data })
                    }
                    ),
                    catchError((error) => of(action.DeleteFailure({ error })))
                )
            )
        )
    });

    filterTodos$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(action.FilterTodo),
            exhaustMap(
                ({url}) => this.service.filterTodos(url).pipe(
                    map((data) => {
                        console.log('entra2', data);

                        return action.FilterTodoSuccess({ data })
                    }
                    ),
                    catchError((error) => of(action.FilterTodoFailure({ error })))
                )
            )
        )
    });

    clearCompletedTodos$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(action.ClearTodo),
            exhaustMap(
                () => this.service.clearCompleted().pipe(
                    map((data) => {
                        return action.ClearTodoSuccess({ data })
                    }
                    ),
                    catchError((error) => of(action.ClearTodoFailure({ error })))
                )
            )
        )
    });

}


