import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgentCertificatPriseServiceComponent } from './agent-certificat-prise-service.component';

describe('AgentCertificatPriseServiceComponent', () => {
  let component: AgentCertificatPriseServiceComponent;
  let fixture: ComponentFixture<AgentCertificatPriseServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AgentCertificatPriseServiceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AgentCertificatPriseServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
