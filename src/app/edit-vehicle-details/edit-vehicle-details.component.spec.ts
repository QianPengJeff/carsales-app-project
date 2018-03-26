import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditVehicleDetailsComponent } from './edit-vehicle-details.component';

describe('EditVehicleDetailsComponent', () => {
  let component: EditVehicleDetailsComponent;
  let fixture: ComponentFixture<EditVehicleDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditVehicleDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditVehicleDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
