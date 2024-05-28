import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'lib-cats',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cats.component.html',
  styleUrl: './cats.component.css',
})
export class CatsComponent {}
