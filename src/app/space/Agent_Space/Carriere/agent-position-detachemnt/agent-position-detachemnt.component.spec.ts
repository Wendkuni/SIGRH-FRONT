import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgentPositionDetachemntComponent } from './agent-position-detachemnt.component';

describe('AgentPositionDetachemntComponent', () => {
  let component: AgentPositionDetachemntComponent;
  let fixture: ComponentFixture<AgentPositionDetachemntComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AgentPositionDetachemntComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AgentPositionDetachemntComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
