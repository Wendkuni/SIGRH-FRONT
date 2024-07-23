import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrhAllocationFamilialeComponent } from './drh-allocation-familiale.component';

describe('DrhAllocationFamilialeComponent', () => {
  let component: DrhAllocationFamilialeComponent;
  let fixture: ComponentFixture<DrhAllocationFamilialeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DrhAllocationFamilialeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DrhAllocationFamilialeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
