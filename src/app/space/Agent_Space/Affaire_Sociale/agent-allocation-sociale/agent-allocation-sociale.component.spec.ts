import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgentAllocationSocialeComponent } from './agent-allocation-sociale.component';

describe('AgentAllocationSocialeComponent', () => {
  let component: AgentAllocationSocialeComponent;
  let fixture: ComponentFixture<AgentAllocationSocialeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AgentAllocationSocialeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AgentAllocationSocialeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
