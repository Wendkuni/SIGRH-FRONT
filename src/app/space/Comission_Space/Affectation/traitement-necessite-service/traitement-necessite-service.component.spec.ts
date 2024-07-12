import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TraitementNecessiteServiceComponent } from './traitement-necessite-service.component';

describe('TraitementNecessiteServiceComponent', () => {
  let component: TraitementNecessiteServiceComponent;
  let fixture: ComponentFixture<TraitementNecessiteServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TraitementNecessiteServiceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TraitementNecessiteServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
