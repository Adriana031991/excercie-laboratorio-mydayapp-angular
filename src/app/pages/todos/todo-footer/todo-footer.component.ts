import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import { Filter } from 'src/app/Model/filter.interface';
import { setFilter } from '../../store/filter.action';
import { ClearTodo } from '../../store/todo.action';

@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styleUrls: ['./todo-footer.component.css']
})
export class TodoFooterComponent implements OnInit {

  actualFilter!: Filter;
  filters = Filter;

  countPending= 0;

  constructor(private store: Store<AppState>){}
  
  ngOnInit(): void {
    this.store.subscribe({
      next: state => {
        this.actualFilter = state.filter.validateFilter;
        this.countPending = state.todos.todos.filter(todo=>!todo.completed).length;
      }
    })
    console.log('actualFilter', this.actualFilter)
  }

  selectFilter(filter: Filter){
    this.store.dispatch(setFilter({filter}));
  }

  clearCompleted(){
    this.store.dispatch(ClearTodo());
  }

}
