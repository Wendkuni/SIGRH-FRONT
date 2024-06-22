import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EtatsAbsencesComponent } from './etats-absences.component';

describe('EtatsAbsencesComponent', () => {
  let component: EtatsAbsencesComponent;
  let fixture: ComponentFixture<EtatsAbsencesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EtatsAbsencesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EtatsAbsencesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
