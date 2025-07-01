import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {TodoService} from '../../services/todo.service';

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

  constructor(private todoService: TodoService) {
  }

  doSubmitTodo() {
    if (this.todoText!.length > 0) {
      this.todoService.doAddTodo(this.todoText)
      this.todoText = ''
    }
  }
}
