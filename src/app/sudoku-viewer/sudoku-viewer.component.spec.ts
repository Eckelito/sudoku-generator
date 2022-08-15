import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SudokuViewerComponent } from './sudoku-viewer.component';

describe('SudokuViewerComponent', () => {
  let component: SudokuViewerComponent;
  let fixture: ComponentFixture<SudokuViewerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SudokuViewerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SudokuViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
