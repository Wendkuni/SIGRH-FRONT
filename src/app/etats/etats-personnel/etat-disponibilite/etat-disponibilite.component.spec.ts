import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EtatDisponibiliteComponent } from './etat-disponibilite.component';

describe('EtatDisponibiliteComponent', () => {
  let component: EtatDisponibiliteComponent;
  let fixture: ComponentFixture<EtatDisponibiliteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EtatDisponibiliteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EtatDisponibiliteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
