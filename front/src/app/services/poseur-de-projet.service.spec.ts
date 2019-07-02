import { TestBed, inject } from '@angular/core/testing';

import { PoseurDeProjetService } from './poseur-de-projet.service';

describe('PoseurDeProjetService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PoseurDeProjetService]
    });
  });

  it('should be created', inject([PoseurDeProjetService], (service: PoseurDeProjetService) => {
    expect(service).toBeTruthy();
  }));
});
