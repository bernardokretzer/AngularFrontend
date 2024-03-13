import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiltroFormComponent } from './filtro-form.component';

describe('FiltroFormComponent', () => {
  let component: FiltroFormComponent;
  let fixture: ComponentFixture<FiltroFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FiltroFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FiltroFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
