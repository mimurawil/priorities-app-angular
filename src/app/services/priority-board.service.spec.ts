import { TestBed, inject } from '@angular/core/testing';

import { PriorityBoardService } from './priority-board.service';

describe('PriorityBoardService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PriorityBoardService]
    });
  });

  it('should be created', inject([PriorityBoardService], (service: PriorityBoardService) => {
    expect(service).toBeTruthy();
  }));
});
