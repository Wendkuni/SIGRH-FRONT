import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatistiqueAffectationNominationComponent } from './statistique-affectation-nomination.component';

describe('StatistiqueAffectationNominationComponent', () => {
  let component: StatistiqueAffectationNominationComponent;
  let fixture: ComponentFixture<StatistiqueAffectationNominationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StatistiqueAffectationNominationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StatistiqueAffectationNominationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
