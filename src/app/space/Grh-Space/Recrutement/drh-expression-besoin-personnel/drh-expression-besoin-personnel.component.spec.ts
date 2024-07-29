import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrhExpressionBesoinPersonnelComponent } from './drh-expression-besoin-personnel.component';

describe('DrhExpressionBesoinPersonnelComponent', () => {
  let component: DrhExpressionBesoinPersonnelComponent;
  let fixture: ComponentFixture<DrhExpressionBesoinPersonnelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DrhExpressionBesoinPersonnelComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DrhExpressionBesoinPersonnelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
