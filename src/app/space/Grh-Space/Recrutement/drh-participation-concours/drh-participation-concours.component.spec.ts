import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrhParticipationConcoursComponent } from './drh-participation-concours.component';

describe('DrhParticipationConcoursComponent', () => {
  let component: DrhParticipationConcoursComponent;
  let fixture: ComponentFixture<DrhParticipationConcoursComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DrhParticipationConcoursComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DrhParticipationConcoursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
