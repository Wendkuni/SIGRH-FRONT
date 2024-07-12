import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TraitementAffectationConvenancePersonnelComponent } from './traitement-affectation-convenance-personnel.component';

describe('TraitementAffectationConvenancePersonnelComponent', () => {
  let component: TraitementAffectationConvenancePersonnelComponent;
  let fixture: ComponentFixture<TraitementAffectationConvenancePersonnelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TraitementAffectationConvenancePersonnelComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TraitementAffectationConvenancePersonnelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
