import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgentAffectationNecessiteServiceComponent } from './agent-affectation-necessite-service.component';

describe('AgentAffectationNecessiteServiceComponent', () => {
  let component: AgentAffectationNecessiteServiceComponent;
  let fixture: ComponentFixture<AgentAffectationNecessiteServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AgentAffectationNecessiteServiceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AgentAffectationNecessiteServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
