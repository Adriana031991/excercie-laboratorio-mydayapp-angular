import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Todo } from 'src/app/Model/todo.model';
import { FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Delete, Edit, Toggle } from '../../store/todo.action';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {

  @Input() todo!:Todo;
  @ViewChild('inputData') inputData!:ElementRef;
  
  checkCompleted!: FormControl;
  txtInput!: FormControl;
  editing:boolean = false;

  constructor(private store:Store){

  }

  
  ngOnInit():void{
    this.txtInput = new FormControl(this.todo.title, Validators.required);
    this.checkCompleted = new FormControl(this.todo.completed);
    this.checkCompleted.valueChanges.subscribe({
      next: value => { 
        this.store.dispatch(Toggle({id: this.todo.id}))
       },
    });
  }

  edit(){
    this.editing = true;
    setTimeout(() => {
      this.inputData.nativeElement.focus();
      this.txtInput.setValue(this.todo.title);
      // this.inputData.nativeElement.select();
      
          },100)
  }
  
  endEditing(){

    if (this.txtInput.invalid) {
      return;
    }
    
    if (this.txtInput.value === this.todo.title) {
      return;
    }

    this.editing = false;
    
    this.store.dispatch(Edit({id:this.todo.id, title:this.txtInput.value.trim()}))
  }

  delete(){
    const id = this.todo.id;
    this.store.dispatch(Delete({id}))
  }

  cancel(){
    this.editing = false;
    this.txtInput.setValue(this.todo.title);

  }
}
