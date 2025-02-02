import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NeedsAttentionComponent } from './needs-attention.component';
import { PdfModule } from '../../../pdf/pdf.module';
import { BadgeModule } from 'primeng/badge';
import { OverlayBadgeModule } from 'primeng/overlaybadge';

describe('NeedsAttentionComponent', () => {
  let component: NeedsAttentionComponent;
  let fixture: ComponentFixture<NeedsAttentionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NeedsAttentionComponent],
      imports: [PdfModule, BadgeModule, OverlayBadgeModule],
    }).compileComponents();

    fixture = TestBed.createComponent(NeedsAttentionComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    component.checklist = {};
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });
});
