import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EtatsPersonnelComponent } from './etats-personnel.component';

describe('EtatsPersonnelComponent', () => {
  let component: EtatsPersonnelComponent;
  let fixture: ComponentFixture<EtatsPersonnelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EtatsPersonnelComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EtatsPersonnelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
