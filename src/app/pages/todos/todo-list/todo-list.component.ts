import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Filter } from 'src/app/Model/filter.interface';
import { Todo } from 'src/app/Model/todo.model';
import { filter } from '../../store/filter.select';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  @Input() todos: Todo[] | null = [];
  actualFilter!: Filter;
  actualFilter$ = this.store.select(filter);

  
  constructor(private store: Store) {

  }
  ngOnInit(): void {
    // console.log('first')
    this.actualFilter$.subscribe({
      next: value => this.actualFilter = value
    })
  }



}
