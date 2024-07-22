import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgentAttesttaionTravailComponent } from './agent-attesttaion-travail.component';

describe('AgentAttesttaionTravailComponent', () => {
  let component: AgentAttesttaionTravailComponent;
  let fixture: ComponentFixture<AgentAttesttaionTravailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AgentAttesttaionTravailComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AgentAttesttaionTravailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
