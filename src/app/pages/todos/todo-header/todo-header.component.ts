import { Component, Input } from '@angular/core';
import { Todo } from 'src/app/Model/todo.model';

@Component({
  selector: 'app-todo-header',
  templateUrl: './todo-header.component.html',
  styleUrls: ['./todo-header.component.css']
})
export class TodoHeaderComponent {
  @Input() todoArray: Todo[] | null = [];

  constructor() {

  }




}
