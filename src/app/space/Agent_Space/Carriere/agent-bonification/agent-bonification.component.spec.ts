import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgentBonificationComponent } from './agent-bonification.component';

describe('AgentBonificationComponent', () => {
  let component: AgentBonificationComponent;
  let fixture: ComponentFixture<AgentBonificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AgentBonificationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AgentBonificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
