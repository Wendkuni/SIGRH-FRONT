import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgentAnulationActeComponent } from './agent-anulation-acte.component';

describe('AgentAnulationActeComponent', () => {
  let component: AgentAnulationActeComponent;
  let fixture: ComponentFixture<AgentAnulationActeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AgentAnulationActeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AgentAnulationActeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
