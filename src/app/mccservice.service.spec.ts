import { TestBed } from '@angular/core/testing';

import { MccService } from './mccservice.service';

describe('MccService', () => {
  let service: MccService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MccService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
