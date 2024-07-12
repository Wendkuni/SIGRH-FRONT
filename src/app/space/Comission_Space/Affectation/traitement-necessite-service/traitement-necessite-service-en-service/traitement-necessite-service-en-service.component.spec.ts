import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TraitementNecessiteServiceEnServiceComponent } from './traitement-necessite-service-en-service.component';

describe('TraitementNecessiteServiceEnServiceComponent', () => {
  let component: TraitementNecessiteServiceEnServiceComponent;
  let fixture: ComponentFixture<TraitementNecessiteServiceEnServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TraitementNecessiteServiceEnServiceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TraitementNecessiteServiceEnServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
