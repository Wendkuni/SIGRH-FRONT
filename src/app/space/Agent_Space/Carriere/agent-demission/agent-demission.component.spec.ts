import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgentDemissionComponent } from './agent-demission.component';

describe('AgentDemissionComponent', () => {
  let component: AgentDemissionComponent;
  let fixture: ComponentFixture<AgentDemissionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AgentDemissionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AgentDemissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
