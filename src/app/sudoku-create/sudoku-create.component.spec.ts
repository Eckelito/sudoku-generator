import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SudokuCreateComponent } from './sudoku-create.component';

describe('SudokuCreateComponent', () => {
  let component: SudokuCreateComponent;
  let fixture: ComponentFixture<SudokuCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SudokuCreateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SudokuCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
