import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PermutationNiveauRegionalComponent } from './permutation-niveau-regional.component';

describe('PermutationNiveauRegionalComponent', () => {
  let component: PermutationNiveauRegionalComponent;
  let fixture: ComponentFixture<PermutationNiveauRegionalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PermutationNiveauRegionalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PermutationNiveauRegionalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
