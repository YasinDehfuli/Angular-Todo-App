import {Component} from '@angular/core';
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
  todoText: string | undefined

  doSubmitTodo() {
    if (this.todoText!.length > 0) {
      console.log('todo text =>', this.todoText)
    }
    this.todoText = ''
  }
}
