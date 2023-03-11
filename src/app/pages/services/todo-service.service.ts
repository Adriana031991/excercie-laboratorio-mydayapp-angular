import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, of } from 'rxjs';
import { Filter } from 'src/app/Model/filter.interface';
import { Todo } from 'src/app/Model/todo.model';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private route: ActivatedRoute) { }

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
    return of(todos);
  }

  filterTodos(filter:Filter):Observable<Todo[]>{
    let todos: Todo[] = this.getTodo();
    
    this.route.url.subscribe(url => {
      if (url.length > 0) {
        if (url[0].path === 'Pending' && filter === 'Pending') 
        {console.log('pasa'); return todos.filter(todo => !todo.completed)} else
        if (url[0].path === 'Completed' && filter === 'Completed') 
        { console.log('pasa2'); return todos.filter(todo => todo.completed)} else {
          console.log('pasa 3');
          return todos;
        }
        
        //this.saveTodoInStorage(todos);
      }
      return todos;
    })

    return of(todos);
    
  }

  clearCompleted():Observable<Todo[]>{
    let todos: Todo[] = this.getTodo();
    return of(todos.filter(todo => !todo.completed))
  }

  saveTodoInStorage(todos: Todo[]) {
    localStorage.setItem('mydayapp-angular', JSON.stringify(todos));
  }

  getTodo() {
    return JSON.parse(localStorage.getItem('mydayapp-angular') || '[fff]');
  }
}
