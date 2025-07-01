import {Component, EventEmitter, Input, Output} from '@angular/core';
import {NgClass, NgIf} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {TodoService} from '../../services/todo.service';

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
  @Output() status = new EventEmitter<number>();

  hasDoEditSelected: boolean = false;
  initialValue: string = ''

  constructor(public todoService: TodoService) {
  }

  doEditTodo() {
    this.hasDoEditSelected = true;
  }

  doCancelChangeTodo() {
    this.hasDoEditSelected = false;
  }

  doSubmitEditTodo() {
    if (this.initialValue.length > 0) {
      this.todo.text = this.initialValue
      this.doCancelChangeTodo()
    }
  }

  doDeleteTodo(key: number) {
    this.todoService.doRemoveTodo(key)
  }



  doToggleStatusTodo(status: number) {
    this.status.emit(status)
  }
}
