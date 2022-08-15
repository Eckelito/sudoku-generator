import { TestBed } from '@angular/core/testing';

import { SudokuCoreService } from './sudoku-core.service';

describe('SudokuCoreService', () => {
  let service: SudokuCoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SudokuCoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
