import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { LoadTodos } from '../store/todo.action';
import { todoQuery } from '../store/todo.selector';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {

  loading:boolean = false;
  loading$ = this.store.select(todoQuery.loading);
  todos$ = this.store.select(todoQuery.todos);
  
  constructor(private store: Store) { }

  ngOnInit(): void {

    this.store.dispatch(LoadTodos());
  }

}
