import { Component,  OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Filter } from '../../store/filter.reducer';
import { filterData } from '../../store/filter.select';
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
  actualFilter$ = this.store.select(filterData);
  countPending = 0;
  countComplete = 0;
  url:string ='';

  constructor(private store: Store, private activatedRoute: ActivatedRoute) { }


  ngOnInit(): void {
    this.todos$.subscribe({
      next: value => {
        this.countPending = value.filter(todo => !todo.completed).length;
        this.countComplete = value.filter(todo => todo.completed).length;
        
      }
    });
    this.actualFilter$.subscribe({
      next: value => { if(value != null) this.actualFilter = value}
    })
    
    this.activatedRoute.params.subscribe(params => {
    this.store.dispatch(FilterTodo({ url:params['filter'] }))


    })
  }
  

  clearCompleted() {
    this.store.dispatch(ClearTodo());
  }

}
