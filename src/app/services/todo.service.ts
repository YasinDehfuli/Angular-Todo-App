import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
    public todos = [
        {
            key: 1,
            done: false,
            text: 'Todo service worked'
        }
    ]

    constructor() {
    }

    doGetTodos() {
        return this.todos
    }
}
