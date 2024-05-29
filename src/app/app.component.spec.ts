import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';
import { RouterTestingModule } from '@angular/router/testing';
import { PetsService } from './services/pets.service';

describe('AppComponent', () => {
  const pets = 'pets';
  const mockPetsService = {
    getPets: jest.fn().mockReturnValue(pets)
  }
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent, NxWelcomeComponent, RouterTestingModule],
      providers: [
        {
          provide: PetsService,
          useValue: mockPetsService
        }
      ]
    }).compileComponents();
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain(
      'Welcome merge-queues'
    );
    expect(mockPetsService.getPets).toHaveBeenCalled();
  });

  it(`should have as title 'merge-queues'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('merge-queues');
  });
});
