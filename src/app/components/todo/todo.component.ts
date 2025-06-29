import {Component, Input} from '@angular/core';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-todo',
  imports: [
    NgIf
  ],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.scss'
})
export class TodoComponent {
  @Input('todoItem') todo!: { key: number; done: boolean; text: string };
  hasDoEditSelected : boolean = false;


  doEditTodo(){
    this.hasDoEditSelected = true;
  }

  doCancelChangeTodo(){
    this.hasDoEditSelected = false;
  }
}
