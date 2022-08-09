import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
 localItem: string | undefined | null;
todos?:Todo[] | undefined | any= [];
today: number = Date.now();

constructor() { 
 this.localItem = localStorage?.getItem("todos");
 if(this.localItem ==null)
  this.todos = [];
    
  
 }

  ngOnInit(): void {

    
    const sayu =[1,2,34,87,95];

    sayu.forEach(a=>{
      console.log(a*30)

      a+30;
    })
  }
  
deleteTodo(todo:any){
  console.log(todo);
  const index = this?.todos?.indexOf(todo)!;
  this?.todos?.splice(index , 1)
  localStorage.setItem("todos",JSON.stringify(this.todos));

}
addTodo(todo:Todo){
 console.log(todo);
  this.todos?.push(todo);
 localStorage.setItem("todos",JSON.stringify(this.todos));
}


toggleTodo(todo:any){
  console.log(todo);
  const index = this?.todos?.indexOf(todo)!;
    this.todos[index].active =!this.todos[index]?.active
    localStorage.setItem("todos",JSON.stringify(this.todos));

    console.log(todo)
  }
  }

