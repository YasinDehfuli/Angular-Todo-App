import {Component, EventEmitter, Output} from '@angular/core';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-form-add-todo',
  imports: [
    FormsModule
  ],
  templateUrl: './form-add-todo.component.html',
  styleUrl: './form-add-todo.component.scss'
})
export class FormAddTodoComponent {
  todoText: string = ''
  @Output('doAddTodo') doAddTodo = new EventEmitter<string>();

  doSubmitTodo() {
    if (this.todoText!.length > 0) {
      this.doAddTodo.emit(this.todoText)
      this.todoText = ''
    }
  }
}
