import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {AppHeaderComponent} from './components/app-header/app-header.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, AppHeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Angular-Todo-App';
}
