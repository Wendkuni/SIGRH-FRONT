import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EtatActifComponent } from './etat-actif.component';

describe('EtatActifComponent', () => {
  let component: EtatActifComponent;
  let fixture: ComponentFixture<EtatActifComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EtatActifComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EtatActifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
