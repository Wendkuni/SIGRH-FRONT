import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgentPositionDisponibiliteComponent } from './agent-position-disponibilite.component';

describe('AgentPositionDisponibiliteComponent', () => {
  let component: AgentPositionDisponibiliteComponent;
  let fixture: ComponentFixture<AgentPositionDisponibiliteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AgentPositionDisponibiliteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AgentPositionDisponibiliteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
