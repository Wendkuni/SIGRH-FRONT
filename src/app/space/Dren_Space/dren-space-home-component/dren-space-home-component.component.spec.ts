import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrenSpaceHomeComponentComponent } from './dren-space-home-component.component';

describe('DrenSpaceHomeComponentComponent', () => {
  let component: DrenSpaceHomeComponentComponent;
  let fixture: ComponentFixture<DrenSpaceHomeComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DrenSpaceHomeComponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DrenSpaceHomeComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
