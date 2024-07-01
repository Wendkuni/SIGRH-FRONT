import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConvenancePersonnelleNiveauCommunaleComponent } from './convenance-personnelle-niveau-communale.component';

describe('ConvenancePersonnelleNiveauCommunaleComponent', () => {
  let component: ConvenancePersonnelleNiveauCommunaleComponent;
  let fixture: ComponentFixture<ConvenancePersonnelleNiveauCommunaleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConvenancePersonnelleNiveauCommunaleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConvenancePersonnelleNiveauCommunaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
