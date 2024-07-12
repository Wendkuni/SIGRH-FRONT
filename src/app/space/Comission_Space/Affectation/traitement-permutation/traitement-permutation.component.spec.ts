import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TraitementPermutationComponent } from './traitement-permutation.component';

describe('TraitementPermutationComponent', () => {
  let component: TraitementPermutationComponent;
  let fixture: ComponentFixture<TraitementPermutationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TraitementPermutationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TraitementPermutationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
