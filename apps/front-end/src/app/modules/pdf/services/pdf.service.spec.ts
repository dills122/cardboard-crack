import { TestBed } from '@angular/core/testing';

import { PdfService } from './pdf.service';

describe('PdfParserService', () => {
  let service: PdfService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PdfService],
    });
    service = TestBed.inject(PdfService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
