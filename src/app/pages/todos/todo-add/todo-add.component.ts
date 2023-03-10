import { Component, Input } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import { Todo } from 'src/app/Model/todo.model';
import { TodoService } from '../../services/todo-service.service';
import { Create } from '../../store/todo.action';

@Component({
  selector: 'app-todo-add',
  templateUrl: './todo-add.component.html',
  styleUrls: ['./todo-add.component.css']
})
export class TodoAddComponent {
  txtInput: FormControl;
  @Input() todos:Todo[]|null = [];

  constructor( private store: Store, ){
    this.txtInput = new FormControl('', Validators.required);
  }

  add(){
    if (this.txtInput.invalid) {
      return;
    }
    if (this.todos === null) {
      return;
    }
    
    this.store.dispatch(Create({text: this.txtInput.value.trim(), todos: this.todos}))
    this.txtInput.reset();
  }


}
