import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TrainerDisplayComponent } from './trainer-display/trainer-display.component';

@Component({
  selector: 'app-root',
  imports: [TrainerDisplayComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'md-application';
}
