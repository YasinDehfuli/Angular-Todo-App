import {Component, EventEmitter, Input, Output} from '@angular/core';
import {NgClass, NgIf} from '@angular/common';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-todo',
  imports: [
    NgIf,
    FormsModule,
    NgClass
  ],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.scss'
})
export class TodoComponent {
  @Input('todoItem') todo!: { key: number; done: boolean; text: string };
  @Output() delete = new EventEmitter<number>();
  @Output() status = new EventEmitter<number>();

  hasDoEditSelected: boolean = false;
  initialValue: string = ''

  doEditTodo() {
    this.hasDoEditSelected = true;
  }

  doCancelChangeTodo() {
    this.hasDoEditSelected = false;
  }

  doSubmitEditTodo() {
    this.todo.text = this.initialValue
    this.doCancelChangeTodo()
  }

  doDeleteTodo(key: number) {
    this.delete.emit(key)
  }

  doToggleStatusTodo(status: number) {
    this.status.emit(status)
  }
}
