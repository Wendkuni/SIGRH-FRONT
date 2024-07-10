import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AffectationNecessiteServiceTraitementComponent } from './affectation-necessite-service-traitement.component';

describe('AffectationNecessiteServiceTraitementComponent', () => {
  let component: AffectationNecessiteServiceTraitementComponent;
  let fixture: ComponentFixture<AffectationNecessiteServiceTraitementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AffectationNecessiteServiceTraitementComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AffectationNecessiteServiceTraitementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
