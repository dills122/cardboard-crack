import { TestBed } from '@angular/core/testing';

import { PdfParserService } from './pdf-parser.service';

describe('PdfParserService', () => {
  let service: PdfParserService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PdfParserService],
    });
    service = TestBed.inject(PdfParserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
