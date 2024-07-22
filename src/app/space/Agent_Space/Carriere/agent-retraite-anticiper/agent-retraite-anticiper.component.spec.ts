import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgentRetraiteAnticiperComponent } from './agent-retraite-anticiper.component';

describe('AgentRetraiteAnticiperComponent', () => {
  let component: AgentRetraiteAnticiperComponent;
  let fixture: ComponentFixture<AgentRetraiteAnticiperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AgentRetraiteAnticiperComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AgentRetraiteAnticiperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
