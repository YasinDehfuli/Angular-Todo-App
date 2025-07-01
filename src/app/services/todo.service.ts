import {EventEmitter, Injectable} from '@angular/core';
import {Todo} from '../app.component';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  todosChanged = new EventEmitter<Todo[]>()

  public todos = [
    {
      key: 1,
      done: false,
      text: 'Todo service worked'
    }
  ]

  constructor() {
  }

  doGetTodos() {
    return this.todos
  }

  doAddTodo(todo: string) {
    this.todos.push({key: Date.now(), done: false, text: todo})
  }

  doRemoveTodo(key: number) {
    this.todos = this.todos.filter(item => item.key !== key);
    this.todosChanged.emit(this.todos)
  }

  doChangeStatus(key: number) {
    this.todos = this.todos.map(item => {
      if (item.key === key) {
        return {
          ...item,
          done: !item.done
        }
      }
      return item;
    })
    this.todosChanged.emit(this.todos)
    console.log(key)
  }
}
