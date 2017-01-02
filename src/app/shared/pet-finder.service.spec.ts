/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { PetFinderService } from './pet-finder.service';

describe('Service: PetFinder', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PetFinderService]
    });
  });

  it('should ...', inject([PetFinderService], (service: PetFinderService) => {
    expect(service).toBeTruthy();
  }));
});
