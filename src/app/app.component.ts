import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';
import { CatsComponent } from '@lara-test/cats';
@Component({
  standalone: true,
  imports: [
    NxWelcomeComponent, 
    RouterModule,
    CatsComponent
  ],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'merge-queues';
}
