import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgentMesDemandesComponent } from './agent-mes-demandes.component';

describe('AgentMesDemandesComponent', () => {
  let component: AgentMesDemandesComponent;
  let fixture: ComponentFixture<AgentMesDemandesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AgentMesDemandesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AgentMesDemandesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
