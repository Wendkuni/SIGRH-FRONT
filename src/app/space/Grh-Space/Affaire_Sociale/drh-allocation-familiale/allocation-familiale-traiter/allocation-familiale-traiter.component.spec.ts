import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllocationFamilialeTraiterComponent } from './allocation-familiale-traiter.component';

describe('AllocationFamilialeTraiterComponent', () => {
  let component: AllocationFamilialeTraiterComponent;
  let fixture: ComponentFixture<AllocationFamilialeTraiterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AllocationFamilialeTraiterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AllocationFamilialeTraiterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
