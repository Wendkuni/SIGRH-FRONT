import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PermutationNiveauNationalComponent } from './permutation-niveau-national.component';

describe('PermutationNiveauNationalComponent', () => {
  let component: PermutationNiveauNationalComponent;
  let fixture: ComponentFixture<PermutationNiveauNationalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PermutationNiveauNationalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PermutationNiveauNationalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
