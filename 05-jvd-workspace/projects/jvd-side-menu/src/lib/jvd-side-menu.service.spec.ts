import { TestBed } from '@angular/core/testing';

import { JvdSideMenuService } from './jvd-side-menu.service';

describe('JvdSideMenuService', () => {
  let service: JvdSideMenuService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JvdSideMenuService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
