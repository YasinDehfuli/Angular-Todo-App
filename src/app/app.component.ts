import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormAddTodoComponent } from './components/form-add-todo/form-add-todo.component';

interface Todo {
  key: number;
  done: boolean;
  text: string;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormAddTodoComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Angular Todo App';
  todos: Todo[] = [];

  doAddTodoToArray(todo: string): void {
    this.todos = [
      ...this.todos,
      { key: Date.now(), done: false, text: todo }
    ];
    console.log(this.todos);
  }
}
