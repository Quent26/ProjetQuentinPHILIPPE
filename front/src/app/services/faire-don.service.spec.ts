import { TestBed, inject } from '@angular/core/testing';

import { FaireDonService } from './faire-don.service';

describe('FaireDonService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FaireDonService]
    });
  });

  it('should be created', inject([FaireDonService], (service: FaireDonService) => {
    expect(service).toBeTruthy();
  }));
});
