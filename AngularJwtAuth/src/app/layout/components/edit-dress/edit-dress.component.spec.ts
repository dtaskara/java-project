import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditDressComponent } from './edit-dress.component';

describe('EditDressComponent', () => {
  let component: EditDressComponent;
  let fixture: ComponentFixture<EditDressComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditDressComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditDressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
