import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NeedsAttentionComponent } from './needs-attention.component';

describe('NeedsAttentionComponent', () => {
  let component: NeedsAttentionComponent;
  let fixture: ComponentFixture<NeedsAttentionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NeedsAttentionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NeedsAttentionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
