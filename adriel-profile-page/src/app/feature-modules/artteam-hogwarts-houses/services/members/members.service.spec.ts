import { TestBed } from '@angular/core/testing';

import { HogwartteamMembersService } from './members.service';

describe('HogwartteamMembersService', () => {
  let service: HogwartteamMembersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HogwartteamMembersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
