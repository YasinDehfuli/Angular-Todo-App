import {Component} from '@angular/core';
import {NgOptimizedImage} from '@angular/common';
import {FormAddTodoComponent} from '../form-add-todo/form-add-todo.component';

@Component({
  selector: 'app-app-header',
  imports: [
    FormAddTodoComponent
  ],
  templateUrl: './app-header.component.html',
  styleUrl: './app-header.component.scss'
})
export class AppHeaderComponent {

}
