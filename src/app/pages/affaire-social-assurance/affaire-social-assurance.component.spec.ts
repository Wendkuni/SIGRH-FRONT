import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AffaireSocialAssuranceComponent } from './affaire-social-assurance.component';

describe('AffaireSocialAssuranceComponent', () => {
  let component: AffaireSocialAssuranceComponent;
  let fixture: ComponentFixture<AffaireSocialAssuranceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AffaireSocialAssuranceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AffaireSocialAssuranceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
