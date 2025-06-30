import {Component, EventEmitter, Input, Output} from '@angular/core';
import {TodoComponent} from '../todo/todo.component';
import {NgForOf} from '@angular/common';

@Component({
  selector: 'app-todos',
  imports: [
    TodoComponent,
    NgForOf
  ],
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.scss'
})
export class TodosComponent {
  @Input() todos: Array<{ key: number; done: boolean; text: string; }> = []
  @Output() delete = new EventEmitter<number>();
  @Output() status = new EventEmitter<number>();

  doDeleteTodo(key: number) {
    this.delete.emit(key)
  }

  doChangeStatus(status: number) {
    this.status.emit(status)
  }
}
