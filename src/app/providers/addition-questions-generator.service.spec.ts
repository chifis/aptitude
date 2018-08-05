import { TestBed, inject } from '@angular/core/testing';

import { AdditionQuestionsGeneratorService } from './addition-questions-generator.service';

describe('AdditionQuestionsGeneratorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AdditionQuestionsGeneratorService]
    });
  });

  it('should be created', inject([AdditionQuestionsGeneratorService], (service: AdditionQuestionsGeneratorService) => {
    expect(service).toBeTruthy();
  }));
});
