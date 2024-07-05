import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PermutationReceptionComponent } from './permutation-reception.component';

describe('PermutationReceptionComponent', () => {
  let component: PermutationReceptionComponent;
  let fixture: ComponentFixture<PermutationReceptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PermutationReceptionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PermutationReceptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
