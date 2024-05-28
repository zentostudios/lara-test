import { PetPipe } from './pet.pipe';

describe('PetPipe', () => {
  it('create an instance', () => {
    const pipe = new PetPipe();
    expect(pipe).toBeTruthy();
  });
});
