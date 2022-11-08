import { Component, OnInit } from '@angular/core';
import { SudokuStorageService } from '../sudoku-storage.service';
import { Output, EventEmitter } from '@angular/core';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

@Component({
  selector: 'app-list-view',
  templateUrl: './list-view.component.html',
  styleUrls: ['./list-view.component.scss']
})

export class ListViewComponent implements OnInit {
  displayedColumns: string[] = ['name', 'size', 'display setting', 'percent visible'];

  @Output() changeTabEmit = new EventEmitter<number>();

  changeTab(num: number){
    this.changeTabEmit.emit(1);
  }


  displaySettingOptions = ["digits", "letters", "letters for 10 and up"];
  constructor(public sudokuStorage: SudokuStorageService) {

  }


  ngOnInit(): void {
  }

}
