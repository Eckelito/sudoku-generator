import { Component, OnInit } from '@angular/core';
import { SudokuCoreService } from '../sudoku-core.service';

@Component({
  selector: 'app-sudoku-viewer',
  templateUrl: './sudoku-viewer.component.html',
  styleUrls: ['./sudoku-viewer.component.scss']
})
export class SudokuViewerComponent implements OnInit {


  constructor(public sudokuCore : SudokuCoreService) {
  }

  setBoard() {
    return {
      'grid-template': `repeat(${this.sudokuCore.sudoku.gridWidth}, 1fr) / repeat(${this.sudokuCore.sudoku.gridWidth}, 1fr)`,
      'font-size': `${90 / 12 * (9 / this.sudokuCore.sudoku.gridWidth)}vh`
    }
  }

  isAtEdge(val: number, offset: number) {
    return (val + offset) % this.sudokuCore.sudoku.regionWidth === 0;
  }


  ngOnInit(): void {
  }

}
