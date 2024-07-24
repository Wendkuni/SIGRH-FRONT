import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrhStageRecrutementComponent } from './drh-stage-recrutement.component';

describe('DrhStageRecrutementComponent', () => {
  let component: DrhStageRecrutementComponent;
  let fixture: ComponentFixture<DrhStageRecrutementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DrhStageRecrutementComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DrhStageRecrutementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
