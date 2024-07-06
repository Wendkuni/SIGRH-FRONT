import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgentNominationComponent } from './agent-nomination.component';

describe('AgentNominationComponent', () => {
  let component: AgentNominationComponent;
  let fixture: ComponentFixture<AgentNominationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AgentNominationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AgentNominationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
