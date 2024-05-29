import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PetsService {

  constructor() { 
    console.log('in constructor')
  }

  getPets() {
    return 'pets';
  }
}
