import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturesSelectorComponent } from './features-selector.component';

describe('FeaturesSelectorComponent', () => {
  let component: FeaturesSelectorComponent;
  let fixture: ComponentFixture<FeaturesSelectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeaturesSelectorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeaturesSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
