import { TestBed } from '@angular/core/testing';

import { ValueDataService } from './value-data.service';

describe('ValueDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ValueDataService = TestBed.get(ValueDataService);
    expect(service).toBeTruthy();
  });
});
