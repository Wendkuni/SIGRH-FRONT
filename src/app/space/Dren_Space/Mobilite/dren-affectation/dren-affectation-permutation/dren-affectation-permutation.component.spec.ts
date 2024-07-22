import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrenAffectationPermutationComponent } from './dren-affectation-permutation.component';

describe('DrenAffectationPermutationComponent', () => {
  let component: DrenAffectationPermutationComponent;
  let fixture: ComponentFixture<DrenAffectationPermutationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DrenAffectationPermutationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DrenAffectationPermutationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
