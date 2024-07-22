import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgentReclassementComponent } from './agent-reclassement.component';

describe('AgentReclassementComponent', () => {
  let component: AgentReclassementComponent;
  let fixture: ComponentFixture<AgentReclassementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AgentReclassementComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AgentReclassementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
