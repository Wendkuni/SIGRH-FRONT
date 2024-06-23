import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CongeAbsenceComponent } from './conge-absence.component';

describe('CongeAbsenceComponent', () => {
  let component: CongeAbsenceComponent;
  let fixture: ComponentFixture<CongeAbsenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CongeAbsenceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CongeAbsenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
