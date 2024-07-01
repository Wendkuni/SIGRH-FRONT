import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConvenancePersonnelleNiveauNationaleComponent } from './convenance-personnelle-niveau-nationale.component';

describe('ConvenancePersonnelleNiveauNationaleComponent', () => {
  let component: ConvenancePersonnelleNiveauNationaleComponent;
  let fixture: ComponentFixture<ConvenancePersonnelleNiveauNationaleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConvenancePersonnelleNiveauNationaleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConvenancePersonnelleNiveauNationaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
