import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AffectationNecessiteServiceFormulaireComponent } from './affectation-necessite-service-formulaire.component';

describe('AffectationNecessiteServiceFormulaireComponent', () => {
  let component: AffectationNecessiteServiceFormulaireComponent;
  let fixture: ComponentFixture<AffectationNecessiteServiceFormulaireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AffectationNecessiteServiceFormulaireComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AffectationNecessiteServiceFormulaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
