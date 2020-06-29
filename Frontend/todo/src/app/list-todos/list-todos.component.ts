import { Component, OnInit } from '@angular/core';
import { TodoDataService } from '../service/data/todo-data.service';


// -*Future*
// -No Navigation Menu and Footer
// -Formatting -  Bootstrap
// -No Security for Menus
// -Hardcoded Logic in the TodoList and Login Components
// -Remaining Functionality - Edit, Delete, Add
// -Spring Boot
// -Spring Security


export class Todo {
  constructor(
    public id: number,
    public description: string,
    public done: boolean,
    public targetDate: Date
  ){
  }
}

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {

  todos: Todo[];

  message: string
  // [
  //   new Todo(1, 'Learn to Dance', false, new Date()),
  //   new Todo(2, 'Become an Expert at Angular', false, new Date()),
  //   new Todo(2, 'Visit Nigeria', false, new Date())
  //   // {id : 1, description : 'Learn to Dance'},
  //   // {id : 2, description : 'Become an Expert at Angular'},
  //   // {id : 3, description : 'Visit Nigeria'}
  // ];
  // todo = {
  //   id: 1,
  //   description: 'Learn to Dance'
  // }

  constructor(

    private todoservice:TodoDataService
  ) { }

  ngOnInit() {
    this.refreshTodos();
  }

  refreshTodos(){
    
    this.todoservice.retrieveAllTodos('in28minutes').subscribe(
      response => {
        console.log(response);
        this.todos = response;
      }
    )
  }

  deleteTodo(id){
    console.log(`delete todo ${id}`)
    this.todoservice.deleteTodo('in28minutes', id).subscribe (
      response => {
        console.log(response);
        this.message = `Delete of Todo ${id} Successful!`;
        this.refreshTodos();
      }
    )
  }



}
