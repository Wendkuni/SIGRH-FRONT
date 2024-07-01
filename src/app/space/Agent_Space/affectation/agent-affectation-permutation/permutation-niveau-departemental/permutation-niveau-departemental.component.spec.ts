import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PermutationNiveauDepartementalComponent } from './permutation-niveau-departemental.component';

describe('PermutationNiveauDepartementalComponent', () => {
  let component: PermutationNiveauDepartementalComponent;
  let fixture: ComponentFixture<PermutationNiveauDepartementalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PermutationNiveauDepartementalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PermutationNiveauDepartementalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
