import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'lib-rabbits',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './rabbits.component.html',
  styleUrl: './rabbits.component.css',
})
export class RabbitsComponent {}
