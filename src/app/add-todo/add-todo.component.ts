import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Todo } from '../Todo';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {
  title:string | undefined;
  desc:string | undefined;
  @Output() todoAdd: EventEmitter<Todo> = new EventEmitter();

  constructor() { 

    console.log("invoked aj")
    
  }

  ngOnInit() {

    console.log("invoked")
    //alert("hi sayu")
  }

  ngDoCheck(){

    console.log("hi sayu")
  }

onSubmit(){
  const todo = {
    sno:8,
    title: this.title,
    desc: this.desc,
    active:true
  }
  this.todoAdd.emit(todo);
}
}
