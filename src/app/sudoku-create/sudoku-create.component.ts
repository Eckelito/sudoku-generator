import { Component, OnInit } from '@angular/core';
import { SudokuCoreService } from '../sudoku-core.service';

@Component({
  selector: 'app-sudoku-create',
  templateUrl: './sudoku-create.component.html',
  styleUrls: ['./sudoku-create.component.scss', '../form-style.scss']
})

export class SudokuCreateComponent implements OnInit {

  constructor(public sudokuCore : SudokuCoreService) { }

  ngOnInit(): void {
  }

  onSubmit(event: any){
    this.sudokuCore.createSudoku(event.target.regionWidth.value);
  }

}
