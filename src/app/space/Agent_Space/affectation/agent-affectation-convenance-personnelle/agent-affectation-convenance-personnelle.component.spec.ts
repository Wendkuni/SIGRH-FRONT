import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgentAffectationConvenancePersonnelleComponent } from './agent-affectation-convenance-personnelle.component';

describe('AgentAffectationConvenancePersonnelleComponent', () => {
  let component: AgentAffectationConvenancePersonnelleComponent;
  let fixture: ComponentFixture<AgentAffectationConvenancePersonnelleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AgentAffectationConvenancePersonnelleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AgentAffectationConvenancePersonnelleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
