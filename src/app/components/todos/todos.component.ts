import {Component, EventEmitter, Input, Output} from '@angular/core';
import {TodoComponent} from '../todo/todo.component';
import {NgClass, NgForOf} from '@angular/common';

@Component({
  selector: 'app-todos',
  imports: [
    TodoComponent,
    NgForOf,
    NgClass
  ],
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.scss'
})
export class TodosComponent {
  doneStatus: boolean = false
  @Input() todos: Array<{ key: number; done: boolean; text: string; }> = []
  @Output() delete = new EventEmitter<number>();
  @Output() status = new EventEmitter<number>();

  get filterTodos() {
    return this.todos.filter(item => item.done === this.doneStatus)
  }

  get doneTodos() {
    return this.todos.filter(item => !item.done)
  }

  get unDoneTodos() {
    return this.todos.filter(item => item.done)
  }

  doDeleteTodo(key: number) {
    this.delete.emit(key)
  }

  doChangeStatus(status: number) {
    this.status.emit(status)
  }
}
