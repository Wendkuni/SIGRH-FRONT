import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecrutementStatistiqueComponent } from './recrutement-statistique.component';

describe('RecrutementStatistiqueComponent', () => {
  let component: RecrutementStatistiqueComponent;
  let fixture: ComponentFixture<RecrutementStatistiqueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecrutementStatistiqueComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RecrutementStatistiqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
