import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgentAffectationPermutationComponent } from './agent-affectation-permutation.component';

describe('AgentAffectationPermutationComponent', () => {
  let component: AgentAffectationPermutationComponent;
  let fixture: ComponentFixture<AgentAffectationPermutationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AgentAffectationPermutationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AgentAffectationPermutationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
