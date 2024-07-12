import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TraitementNecessiteServiceSortantComponent } from './traitement-necessite-service-sortant.component';

describe('TraitementNecessiteServiceSortantComponent', () => {
  let component: TraitementNecessiteServiceSortantComponent;
  let fixture: ComponentFixture<TraitementNecessiteServiceSortantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TraitementNecessiteServiceSortantComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TraitementNecessiteServiceSortantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
