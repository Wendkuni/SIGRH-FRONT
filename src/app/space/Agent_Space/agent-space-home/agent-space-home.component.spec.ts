import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgentSpaceHomeComponent } from './agent-space-home.component';

describe('AgentSpaceHomeComponent', () => {
  let component: AgentSpaceHomeComponent;
  let fixture: ComponentFixture<AgentSpaceHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AgentSpaceHomeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AgentSpaceHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
