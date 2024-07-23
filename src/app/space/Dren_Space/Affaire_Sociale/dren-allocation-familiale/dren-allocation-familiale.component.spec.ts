import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrenAllocationFamilialeComponent } from './dren-allocation-familiale.component';

describe('DrenAllocationFamilialeComponent', () => {
  let component: DrenAllocationFamilialeComponent;
  let fixture: ComponentFixture<DrenAllocationFamilialeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DrenAllocationFamilialeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DrenAllocationFamilialeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
