import { Component, signal } from '@angular/core';
import { AvatarComponent } from './components/avatar/avatar';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [AvatarComponent],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  title = 'practica-2';
}
