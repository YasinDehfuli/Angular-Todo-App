import {Component, OnDestroy, OnInit} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {TodoService} from './services/todo.service';
import {Observable, Subscription} from 'rxjs';

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
export class AppComponent implements OnInit, OnDestroy {
  title = 'Angular Todo App';
  todos: Todo[] = [];

  private subscription: Subscription = new Subscription();

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
        if (count >= 3) {
          subscriber.error(new Error('Custom Error Happens!'));
        }
        count++
        subscriber.next(count)
      }, 1000)
    });

    this.subscription = observable.subscribe({
      next(data) {
        console.log('data =>', data);
      },
      error(err) {
        console.log('error =>', err);
      },
      complete() {
        console.log('done')
      }
    })
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
