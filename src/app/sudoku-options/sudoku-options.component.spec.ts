import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SudokuOptionsComponent } from './sudoku-options.component';

describe('SudokuOptionsComponent', () => {
  let component: SudokuOptionsComponent;
  let fixture: ComponentFixture<SudokuOptionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SudokuOptionsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SudokuOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
