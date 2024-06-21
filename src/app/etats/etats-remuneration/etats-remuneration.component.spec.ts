import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EtatsRemunerationComponent } from './etats-remuneration.component';

describe('EtatsRemunerationComponent', () => {
  let component: EtatsRemunerationComponent;
  let fixture: ComponentFixture<EtatsRemunerationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EtatsRemunerationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EtatsRemunerationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
