import { Injectable } from '@angular/core';
import { SudokuCoreService } from './sudoku-core.service';

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
      sudoku: this.sudokuCore.sudoku,
      name: this.sudokuCore.getName(),
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

  }

  sudokuNames() {
    this.retrieveSudokuList();
    alert(this.sudokuList.map((sudokuEntry) => sudokuEntry.name))
  }

  ngOnInit(): void {
    if (!localStorage.getItem("sudokuList")) {
    }
  }

}
