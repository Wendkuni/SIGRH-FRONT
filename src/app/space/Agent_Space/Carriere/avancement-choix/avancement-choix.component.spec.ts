import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvancementChoixComponent } from './avancement-choix.component';

describe('AvancementChoixComponent', () => {
  let component: AvancementChoixComponent;
  let fixture: ComponentFixture<AvancementChoixComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AvancementChoixComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AvancementChoixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
