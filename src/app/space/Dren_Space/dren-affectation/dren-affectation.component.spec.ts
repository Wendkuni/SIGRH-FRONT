import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrenAffectationComponent } from './dren-affectation.component';

describe('DrenAffectationComponent', () => {
  let component: DrenAffectationComponent;
  let fixture: ComponentFixture<DrenAffectationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DrenAffectationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DrenAffectationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
