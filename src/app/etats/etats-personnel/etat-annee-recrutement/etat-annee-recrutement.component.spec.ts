import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EtatAnneeRecrutementComponent } from './etat-annee-recrutement.component';

describe('EtatAnneeRecrutementComponent', () => {
  let component: EtatAnneeRecrutementComponent;
  let fixture: ComponentFixture<EtatAnneeRecrutementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EtatAnneeRecrutementComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EtatAnneeRecrutementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
