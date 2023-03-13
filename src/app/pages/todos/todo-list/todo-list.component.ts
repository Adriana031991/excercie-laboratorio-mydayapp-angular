import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Todo } from 'src/app/Model/todo.model';
import { Filter } from '../../store/filter.reducer';
import { filterData } from '../../store/filter.select';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  @Input() todos: Todo[] | null = [];
  actualFilter!: Filter;
  actualFilter$ = this.store.select(filterData);

  
  constructor(private store: Store) {

  }
  ngOnInit(): void {
    this.actualFilter$.subscribe({
      next: value => this.actualFilter = value
    })
  }



}
