import { TestBed, inject } from '@angular/core/testing';

import { WheelsService } from './wheels.service';

describe('WheelsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WheelsService]
    });
  });

  it('should be created', inject([WheelsService], (service: WheelsService) => {
    expect(service).toBeTruthy();
  }));
});
