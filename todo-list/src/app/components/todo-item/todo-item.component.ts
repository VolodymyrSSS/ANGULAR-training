// import { splitClasses } from '@angular/compiler';
import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { TodoService } from '../../services/todo.service';
import { Todo } from 'src/app/models/Todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent implements OnInit {

  @Input() todo: Todo;
  @Output() deleteTodo: EventEmitter<Todo> = new EventEmitter();

  constructor(private todoService:TodoService) { }

  ngOnInit(): void {
  }

  //Set Dynamic Classes
  setClasses() {
    let classes = {
      todo: true,
      'is-completed': this.todo.completed
    }
    return classes;
  }

  //Set Event 'onToggle'
  onToggle(todo) {
    // toggle in UI
    todo.completed = !todo.completed;
    // Toggle on server 
    this.todoService.toggleCompleted(todo).subscribe(todo => {
      console.log('todo');
      
    });
  }
  //Set Event 'onDelete'
  onDelete(todo) {
    this.deleteTodo.emit(todo);
  }

}
