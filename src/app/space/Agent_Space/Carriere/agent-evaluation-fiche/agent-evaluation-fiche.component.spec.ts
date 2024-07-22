import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgentEvaluationFicheComponent } from './agent-evaluation-fiche.component';

describe('AgentEvaluationFicheComponent', () => {
  let component: AgentEvaluationFicheComponent;
  let fixture: ComponentFixture<AgentEvaluationFicheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AgentEvaluationFicheComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AgentEvaluationFicheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
