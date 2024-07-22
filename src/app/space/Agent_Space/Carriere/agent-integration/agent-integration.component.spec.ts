import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgentIntegrationComponent } from './agent-integration.component';

describe('AgentIntegrationComponent', () => {
  let component: AgentIntegrationComponent;
  let fixture: ComponentFixture<AgentIntegrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AgentIntegrationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AgentIntegrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
