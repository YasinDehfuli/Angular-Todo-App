import {Component, OnInit} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {TodoService} from './services/todo.service';
import {Observable} from 'rxjs';
import {log} from '@angular-devkit/build-angular/src/builders/ssr-dev-server';

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

    let observable = new Observable((subscriber) => {
      let count = 0
      setInterval(() => {
        if (count >= 10) {
          subscriber.complete()
        }
        count++
        subscriber.next(count)
      }, 1000)
    });

    observable.subscribe(data => console.log(data))
  }
}
