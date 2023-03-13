import { Pipe, PipeTransform } from '@angular/core';
import { Todo } from 'src/app/Model/todo.model';
import { Filter } from '../../Model/filter.interface';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform( todos: Todo[], filter: Filter ): Todo[] {

    switch( filter ) {
      case "Completed":
        return todos.filter( todo => todo.completed );
      
      case "Pending":
        return todos.filter( todo => !todo.completed );

      default:
        return todos;
    }
  }

}
