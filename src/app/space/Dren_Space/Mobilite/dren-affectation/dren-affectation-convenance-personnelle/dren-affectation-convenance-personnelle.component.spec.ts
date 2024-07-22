import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrenAffectationConvenancePersonnelleComponent } from './dren-affectation-convenance-personnelle.component';

describe('DrenAffectationConvenancePersonnelleComponent', () => {
  let component: DrenAffectationConvenancePersonnelleComponent;
  let fixture: ComponentFixture<DrenAffectationConvenancePersonnelleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DrenAffectationConvenancePersonnelleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DrenAffectationConvenancePersonnelleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
