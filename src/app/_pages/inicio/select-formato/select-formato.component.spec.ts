import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectFormatoComponent } from './select-formato.component';

describe('SelectFormatoComponent', () => {
  let component: SelectFormatoComponent;
  let fixture: ComponentFixture<SelectFormatoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SelectFormatoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SelectFormatoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
