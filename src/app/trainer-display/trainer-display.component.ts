import { Component, inject } from '@angular/core';
import { TrainerServiceService } from '../trainer-service.service';


@Component({
  selector: 'app-trainer-display',
  imports: [],
  templateUrl: './trainer-display.component.html',
  styleUrl: './trainer-display.component.css'
})
export class TrainerDisplayComponent {
  trainerService = inject(TrainerServiceService);
}
