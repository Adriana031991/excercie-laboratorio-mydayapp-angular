import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Todo } from 'src/app/Model/todo.model';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor() { }

  addTodo(title: string, todos:Todo[]): Observable<Todo[]> {
    let todo = new Todo(title);
    
    todos = [...todos, todo];

    this.saveTodoInStorage(todos);

    return of(todos);
  }

  editTodo(id: string, title: string): Observable<Todo[]> {

    let todos: Todo[] = this.getTodo();

    todos = todos.map((todo) => {
      if (todo.id === id) todo.title = title;
      return todo;
    });
    this.saveTodoInStorage(todos);

    return of(todos);
  }

  toggleCompletedTodo(id: string):Observable<Todo[]>{
    let todos: Todo[] = this.getTodo();
    todos = todos.map((todo) => {
      if (todo.id === id) todo.completed = !todo.completed;
      return todo;
      
    })
    this.saveTodoInStorage(todos);
    return of(todos);

  }

  deleteTodo(id: string):Observable<string>{
    let todos: Todo[] = this.getTodo();
    let todo = todos.find((todo) => todo.id === id);
    let idxTodo = todos.indexOf(todo!);
    let newTodos = todos.splice(idxTodo, 1);
    this.saveTodoInStorage(newTodos);
    return of(`Todo: ${todo?.title} was deleted`);
  }

  getTodos():Observable<Todo[]>{
    let todos = this.getTodo();
    console.log('this.todsoguyoguys', todos)
    return of(todos);
  }


  saveTodoInStorage(todos: Todo[]) {
    localStorage.setItem('mydayapp-angular', JSON.stringify(todos));
  }

  getTodo() {
    return JSON.parse(localStorage.getItem('mydayapp-angular') || '[fff]');
  }
}
