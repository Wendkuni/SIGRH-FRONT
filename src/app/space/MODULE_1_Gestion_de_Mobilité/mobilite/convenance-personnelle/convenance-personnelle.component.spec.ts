import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConvenancePersonnelleComponent } from './convenance-personnelle.component';

describe('ConvenancePersonnelleComponent', () => {
  let component: ConvenancePersonnelleComponent;
  let fixture: ComponentFixture<ConvenancePersonnelleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConvenancePersonnelleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConvenancePersonnelleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
