import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})


export class TodoItemComponent implements OnInit {
    @Input() i : number | undefined;
    @Input() todo: Todo | undefined;
    @Output() todoCheckbox: EventEmitter<Todo> = new EventEmitter();
    @Output() todoDelete: EventEmitter<Todo> = new EventEmitter();;
  
  

  constructor() { }

  ngOnInit(): void {


  }

  onClick(todo:any){
this.todoDelete.emit(todo);
 console.log("onClick has been triggerd" , todo)
 }
  
 onCheckboxClick(todo: Todo | undefined){
      this.todoCheckbox.emit(todo);
    }
}
