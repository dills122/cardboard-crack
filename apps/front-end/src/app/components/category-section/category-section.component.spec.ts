import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategorySectionComponent } from './category-section.component';
import { TableModule } from 'primeng/table';
import { SelectButtonModule } from 'primeng/selectbutton';

describe('CategorySectionComponent', () => {
  let component: CategorySectionComponent;
  let fixture: ComponentFixture<CategorySectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CategorySectionComponent],
      imports: [TableModule, SelectButtonModule],
    }).compileComponents();

    fixture = TestBed.createComponent(CategorySectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
