import {Routes} from '@angular/router';
import {AppComponent} from './app.component';
import {TodoComponent} from './components/todo/todo.component';
import {FormAddTodoComponent} from './components/form-add-todo/form-add-todo.component';
import {RoutesComponent} from './components/routes/routes.component';
import {AppBodyComponent} from './components/app-body/app-body.component';

export const routes: Routes = [
  {
    path: '',
    component: AppBodyComponent
  },
  {
    path: 'todo',
    component: TodoComponent,
  },
  {
    path: 'routes',
    component: RoutesComponent,
  }
];
