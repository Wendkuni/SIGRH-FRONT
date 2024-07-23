import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrenBesoinPersonnelStatisticComponent } from './dren-besoin-personnel-statistic.component';

describe('DrenBesoinPersonnelStatisticComponent', () => {
  let component: DrenBesoinPersonnelStatisticComponent;
  let fixture: ComponentFixture<DrenBesoinPersonnelStatisticComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DrenBesoinPersonnelStatisticComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DrenBesoinPersonnelStatisticComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
