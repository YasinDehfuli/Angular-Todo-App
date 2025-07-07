import {Component, OnInit} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {FormAddTodoComponent} from './components/form-add-todo/form-add-todo.component';
import {TodosComponent} from './components/todos/todos.component';
import {TodoService} from './services/todo.service';

export interface Todo {
  key: number;
  done: boolean;
  text: string;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'Angular Todo App';
  todos: Todo[] = [];

  constructor(public todoService: TodoService) {
  }

  ngOnInit() {
    this.todos = this.todoService.doGetTodos()
    this.todoService.todosChanged.subscribe(todos => this.todos = todos)
  }
}
