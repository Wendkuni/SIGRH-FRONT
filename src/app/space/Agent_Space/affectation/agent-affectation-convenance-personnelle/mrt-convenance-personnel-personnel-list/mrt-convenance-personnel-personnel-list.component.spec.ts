import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MrtConvenancePersonnelPersonnelListComponent } from './mrt-convenance-personnel-personnel-list.component';

describe('MrtConvenancePersonnelPersonnelListComponent', () => {
  let component: MrtConvenancePersonnelPersonnelListComponent;
  let fixture: ComponentFixture<MrtConvenancePersonnelPersonnelListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MrtConvenancePersonnelPersonnelListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MrtConvenancePersonnelPersonnelListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
