import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateDressComponent } from './create-dress.component';

describe('CreateDressComponent', () => {
  let component: CreateDressComponent;
  let fixture: ComponentFixture<CreateDressComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateDressComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateDressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
