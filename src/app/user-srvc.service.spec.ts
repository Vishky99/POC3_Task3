import { TestBed } from '@angular/core/testing';

import { UserSrvcService } from './user-srvc.service';

describe('UserSrvcService', () => {
  let service: UserSrvcService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserSrvcService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
