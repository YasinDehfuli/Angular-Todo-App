import {Component, Input} from '@angular/core';
import {NgIf} from '@angular/common';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-todo',
  imports: [
    NgIf,
    FormsModule
  ],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.scss'
})
export class TodoComponent {
  @Input('todoItem') todo!: { key: number; done: boolean; text: string };
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
}
