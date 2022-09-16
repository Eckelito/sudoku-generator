import { getNumberOfCurrencyDigits } from '@angular/common';
import { Injectable } from '@angular/core';
import { shuffleArray } from './shuffleArray';
import { generateSudoku, Sudoku, Cell } from './sudokuGenerator';


@Injectable({
  providedIn: 'root'
})

export class SudokuCoreService {
  readonly DIGITS = 0;
  readonly LETTERS = 1;
  readonly DIGITS_AND_LETTERS = 2;

  sudoku!: Sudoku;
  shuffledList!: Cell[];
  private name = "";
  private percentVisible = 100;
  private displaySetting = this.DIGITS;

  constructor() {
    this.createSudoku(3);
  }



  setPercentVisible(percent: number) {
    this.percentVisible = percent;
    let visibleCount = Math.round(this.shuffledList.length * (percent / 100));
    for (let i = 0; i < this.shuffledList.length; i++) {
      this.shuffledList[i].visible = i < visibleCount;
    }
  }

  getPercentVisible(){
    this.percentVisible;
  }

  setDisplaySetting(option: number) {
    this.displaySetting = option;
  }

  getDisplaySetting() {
    return this.displaySetting;
  }

  getName(): string {
    return this.name;
  }

  setName(name: string){
    this.name = name;
  }

  createSudoku(regionWidth: number) {
    this.sudoku = generateSudoku(regionWidth);
    this.shuffledList = shuffleArray([...this.sudoku.list]);
    this.setPercentVisible(this.percentVisible);
  }
}
