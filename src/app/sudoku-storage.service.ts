import { Injectable } from '@angular/core';
import { SudokuCoreService } from './sudoku-core.service';
import { Sudoku, Cell } from './sudokuGenerator';

@Injectable({
  providedIn: 'root'
})

@Injectable()
export class SudokuStorageService {

  sudokuList!: any[];

  private retrieveSudokuList() {
    this.sudokuList = JSON.parse(localStorage.getItem('sudokuList') ?? '[]');
  }

  constructor(private sudokuCore: SudokuCoreService) {
    if (!localStorage.getItem("sudokuList")) {
      localStorage.setItem('sudokuList', JSON.stringify([]));
    }
    this.retrieveSudokuList();
  }

  saveSudoku() {
    this.retrieveSudokuList();
    let sudokuData = {
      name: this.sudokuCore.getName(),
      sudoku: this.sudokuCore.sudoku,
      shuffledList: this.sudokuCore.shuffledList,
      settings: {
        percentVisible: this.sudokuCore.getPercentVisible(),
        displaySetting: this.sudokuCore.getDisplaySetting()
      }
    }

    if (this.sudokuList.every((sudokuEntry: { name: string; }) => sudokuEntry.name != sudokuData.name)) {
      this.sudokuList.push(sudokuData);
      localStorage.setItem('sudokuList', JSON.stringify(this.sudokuList));
      alert("sudoku saved");
    }
    else {
      alert("a sudoku with this name already exists");
    }
    this.retrieveSudokuList();
  }

  loadSudoku(input: any) {
    Object.setPrototypeOf(input.sudoku, Sudoku.prototype);
    this.sudokuCore.sudoku = input.sudoku;
    this.sudokuCore.setDisplaySetting(input.settings.displaySetting);
    this.sudokuCore.setPercentVisible(input.settings.percentVisible);
    this.sudokuCore.shuffledList = input.shuffledList;
    this.sudokuCore.setName(input.name);
    this.sudokuCore.refreshSettings.next();
  }

  deleteAllSudokus() {
    if (window.confirm('Delete all stored Sudokus?')){
      localStorage.clear();
      this.retrieveSudokuList();
    }
  }

  ngOnInit(): void {
    if (!localStorage.getItem("sudokuList")) {
    }
  }

}
