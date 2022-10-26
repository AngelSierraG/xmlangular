import { TestBed } from '@angular/core/testing';

import { XmlservService } from './xmlserv.service';

describe('XmlservService', () => {
  let service: XmlservService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(XmlservService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
