import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllocationFamilialeNonTraiterComponent } from './allocation-familiale-non-traiter.component';

describe('AllocationFamilialeNonTraiterComponent', () => {
  let component: AllocationFamilialeNonTraiterComponent;
  let fixture: ComponentFixture<AllocationFamilialeNonTraiterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AllocationFamilialeNonTraiterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AllocationFamilialeNonTraiterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
