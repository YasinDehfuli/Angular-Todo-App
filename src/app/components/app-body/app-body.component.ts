import {Component, OnInit} from '@angular/core';
import {FormAddTodoComponent} from '../form-add-todo/form-add-todo.component';
import {TodosComponent} from '../todos/todos.component';
import {TodoService} from '../../services/todo.service';

export interface Todo {
  key: number;
  done: boolean;
  text: string;
}

@Component({
  selector: 'app-app-body',
  imports: [FormAddTodoComponent, TodosComponent],
  templateUrl: './app-body.component.html',
  styleUrl: './app-body.component.scss'
})
export class AppBodyComponent implements OnInit {
  todos: Todo[] = [];

  constructor(public todoService: TodoService) {
  }

  ngOnInit() {
    this.todos = this.todoService.doGetTodos()
    this.todoService.todosChanged.subscribe(todos => this.todos = todos)
  }
}
