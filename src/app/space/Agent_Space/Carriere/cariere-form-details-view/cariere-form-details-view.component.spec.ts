import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CariereFormDetailsViewComponent } from './cariere-form-details-view.component';

describe('CariereFormDetailsViewComponent', () => {
  let component: CariereFormDetailsViewComponent;
  let fixture: ComponentFixture<CariereFormDetailsViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CariereFormDetailsViewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CariereFormDetailsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
