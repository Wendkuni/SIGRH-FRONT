import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TraitementNominationComponent } from './traitement-nomination.component';

describe('TraitementNominationComponent', () => {
  let component: TraitementNominationComponent;
  let fixture: ComponentFixture<TraitementNominationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TraitementNominationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TraitementNominationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
