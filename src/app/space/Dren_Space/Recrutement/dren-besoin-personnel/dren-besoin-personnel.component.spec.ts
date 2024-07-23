import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrenBesoinPersonnelComponent } from './dren-besoin-personnel.component';

describe('DrenBesoinPersonnelComponent', () => {
  let component: DrenBesoinPersonnelComponent;
  let fixture: ComponentFixture<DrenBesoinPersonnelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DrenBesoinPersonnelComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DrenBesoinPersonnelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
