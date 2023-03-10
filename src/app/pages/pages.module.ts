import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { TodoAddComponent } from './todos/todo-add/todo-add.component';
import { TodoFooterComponent } from './todos/todo-footer/todo-footer.component';
import { TodoItemComponent } from './todos/todo-item/todo-item.component';
import { TodoListComponent } from './todos/todo-list/todo-list.component';
import { TodoHeaderComponent } from './todos/todo-header/todo-header.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PluralPipe } from './pipes/plural.pipe';
import { FilterPipe } from './pipes/filter.pipe';



@NgModule({
  declarations: [
    HomeComponent,
    TodoAddComponent,
    TodoFooterComponent,
    TodoItemComponent,
    TodoListComponent,
    TodoHeaderComponent,
    PluralPipe,
    FilterPipe
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    HomeComponent
  ]
})
export class PagesModule { }
