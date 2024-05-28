import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RabbitBabyComponent } from './rabbit-baby.component';

@Component({
  selector: 'lib-rabbits',
  standalone: true,
  imports: [
    CommonModule,
    RabbitBabyComponent,
  ],
  templateUrl: './rabbits.component.html',
  styleUrl: './rabbits.component.css',
})
export class RabbitsComponent {}
