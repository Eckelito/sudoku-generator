import { Component, OnInit } from '@angular/core';
import { SudokuCoreService } from '../sudoku-core.service';

@Component({
  selector: 'app-sudoku-options',
  templateUrl: './sudoku-options.component.html',
  styleUrls: [ '../form-style.scss', './sudoku-options.component.scss']
})
export class SudokuOptionsComponent implements OnInit {

  options = [
    {name: "digits", value: 0},
    {name: "letters", value: 1},
    {name: "letters above 9 only", value: 2}
  ]
  displaySetting = this.options[0];
  constructor(public sudokuCore : SudokuCoreService)  { }


  onSubmit(event: any){
    this.sudokuCore.setPercentVisible(event.target.percentVisible.value);
    this.sudokuCore.setDisplaySetting(parseInt(event.target.displaySetting.value));
  }


  ngOnInit(): void {
  }

}
