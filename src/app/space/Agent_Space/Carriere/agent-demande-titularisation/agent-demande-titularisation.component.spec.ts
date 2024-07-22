import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgentDemandeTitularisationComponent } from './agent-demande-titularisation.component';

describe('AgentDemandeTitularisationComponent', () => {
  let component: AgentDemandeTitularisationComponent;
  let fixture: ComponentFixture<AgentDemandeTitularisationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AgentDemandeTitularisationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AgentDemandeTitularisationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
