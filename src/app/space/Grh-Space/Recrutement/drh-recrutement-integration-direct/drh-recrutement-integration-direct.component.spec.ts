import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrhRecrutementIntegrationDirectComponent } from './drh-recrutement-integration-direct.component';

describe('DrhRecrutementIntegrationDirectComponent', () => {
  let component: DrhRecrutementIntegrationDirectComponent;
  let fixture: ComponentFixture<DrhRecrutementIntegrationDirectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DrhRecrutementIntegrationDirectComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DrhRecrutementIntegrationDirectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
