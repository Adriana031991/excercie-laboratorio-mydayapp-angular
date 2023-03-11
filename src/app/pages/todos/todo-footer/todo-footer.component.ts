import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Filter } from 'src/app/Model/filter.interface';
import { Todo } from 'src/app/Model/todo.model';
import { setFilter } from '../../store/filter.action';
import { filter } from '../../store/filter.select';
import { ClearTodo, FilterTodo } from '../../store/todo.action';
import { todoQuery } from '../../store/todo.selector';

@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styleUrls: ['./todo-footer.component.css']
})
export class TodoFooterComponent implements OnInit {

  actualFilter!:Filter;
  filters = Filter;
  todos$ = this.store.select(todoQuery.todos);
  actualFilter$ = this.store.select(filter);
  countPending = 0;
  countComplete = 0;

  constructor(private store: Store) { }

  ngOnInit(): void {
    this.todos$.subscribe({
      next: value => {
        this.countPending = value.filter(todo => !todo.completed).length;
        this.countComplete = value.filter(todo => todo.completed).length;
        
      }
    });
    this.actualFilter$.subscribe({
      next: value => { console.log('value', value); if(value != null) this.actualFilter = value}
    })
  }

  selectFilter(filter: Filter){
    this.store.dispatch(setFilter({filter}));
  }
  // selectFilter(filter: Filter) {
  //   // this.store.dispatch(FilterTodo({ filter }))
    
  // }


  clearCompleted() {
    this.store.dispatch(ClearTodo());
  }

}
