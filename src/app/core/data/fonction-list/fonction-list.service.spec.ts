import { TestBed } from '@angular/core/testing';

import { FonctionListService } from './fonction-list.service';

describe('FonctionListService', () => {
  let service: FonctionListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FonctionListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
