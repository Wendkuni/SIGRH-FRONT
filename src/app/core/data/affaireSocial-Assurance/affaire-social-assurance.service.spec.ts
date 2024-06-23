import { TestBed } from '@angular/core/testing';

import { AffaireSocialAssuranceService } from './affaire-social-assurance.service';

describe('AffaireSocialAssuranceService', () => {
  let service: AffaireSocialAssuranceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AffaireSocialAssuranceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
