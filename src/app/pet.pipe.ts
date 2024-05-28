import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pet',
  standalone: true,
})
export class PetPipe implements PipeTransform {
  transform(value: unknown, ...args: unknown[]): unknown {
    return 'you are a pet';
  }
}
