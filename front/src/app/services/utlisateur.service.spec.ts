import { TestBed, inject } from '@angular/core/testing';

import { UtlisateurService } from './utlisateur.service';

describe('UtlisateurService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UtlisateurService]
    });
  });

  it('should be created', inject([UtlisateurService], (service: UtlisateurService) => {
    expect(service).toBeTruthy();
  }));
});
