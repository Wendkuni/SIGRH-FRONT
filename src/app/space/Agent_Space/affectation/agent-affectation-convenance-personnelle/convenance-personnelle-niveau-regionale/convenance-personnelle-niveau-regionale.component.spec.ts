import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConvenancePersonnelleNiveauRegionaleComponent } from './convenance-personnelle-niveau-regionale.component';

describe('ConvenancePersonnelleNiveauRegionaleComponent', () => {
  let component: ConvenancePersonnelleNiveauRegionaleComponent;
  let fixture: ComponentFixture<ConvenancePersonnelleNiveauRegionaleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConvenancePersonnelleNiveauRegionaleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConvenancePersonnelleNiveauRegionaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
