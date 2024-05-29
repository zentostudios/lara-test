import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CatsComponent } from '@lara-test/cats';
import { PetsService } from './services/pets.service';
import { NxWelcomeComponent } from './nx-welcome.component';
import { PetPipe } from './pet.pipe';

@Component({
  standalone: true,
  imports: [
    NxWelcomeComponent, 
    RouterModule,
    CatsComponent,
    PetPipe
  ],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'merge-queues';
  petsService = inject(PetsService);
  pets = '';
  constructor() {
    this.pets = this.petsService.getPets();
  }
}
