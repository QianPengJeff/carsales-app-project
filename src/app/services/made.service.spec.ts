import { TestBed, inject } from '@angular/core/testing';

import { MadeService } from './made.service';

describe('MadeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MadeService]
    });
  });

  it('should be created', inject([MadeService], (service: MadeService) => {
    expect(service).toBeTruthy();
  }));
});
